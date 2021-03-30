import firebase from "firebase";
import _ from "lodash";

const _uriToBlob = (uri) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function () {
      reject(new Error("uriToBlob failed"));
    };

    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
};

const getListings = async () => {
  let dataObj = {};

  firebase
    .database()
    .ref("/listings")
    .on("value", (snapshot) => {
      dataObj = snapshot.val();
    });

  let data = [];
  data = _.map(dataObj, (val, key) => {
    return { ...val, key };
  });

  return { ok: true, data };
};

const addListing = (listing, setUploadProgress, uploadProgress, user) => {
  setUploadProgress(0);
  const uid = firebase.auth().currentUser.uid;

  let { username, image, totalListings } = user;
  totalListings = parseInt(totalListings) + 1;
  let dealer = { username, image, totalListings };

  const { title, price, category, description, images } = listing;
  let data = { title, price, category, description, dealerId: uid };

  let location;
  if (listing.location) {
    location = JSON.stringify(listing.location);
    data = { ...data, location };
  }

  try {
    const newPostKey = firebase.database().ref().child("listings").push().key;
    let updates = {};

    let newPostImagesDir = firebase
      .storage()
      .ref("listings/" + newPostKey + "/");

    images.forEach((image, index) => {
      const fileType = image.substring(image.lastIndexOf(".") + 1);
      const imagename = "image" + index;

      _uriToBlob(image).then((blob) => {
        const storageTask = newPostImagesDir
          .child(imagename + "." + fileType)
          .put(blob, {
            contentType: "image/" + fileType,
          });

        storageTask.on("state_changed", ({ bytesTransferred, totalBytes }) => {
          // console.log(bytesTransferred / totalBytes);
          console.log(setUploadProgress);
          // setUploadProgress(bytesTransferred / totalBytes);
          // console.log(uploadProgress);
        });

        // return client.post(endpoint, data, {
        //   onUploadProgress: ({ loaded, total }) => onUploadProgress(loaded / total),
        // });

        storageTask.then((snapshot) =>
          snapshot.ref.getDownloadURL().then((uri) => {
            data = {
              ...data,
              ["imagesURL"]: { ...data.imagesURL, [imagename]: uri },
            };

            updates["/listings/" + newPostKey] = { ...data, dealer };
            updates["/users/" + uid + "/listings/" + newPostKey] = data;
            firebase.database().ref().update(updates);
          })
        );
      });
    });

    //updating total posts of user.
    let updateTotalListing = {};
    firebase
      .database()
      .ref("/users/" + uid + "/totalListings")
      .on("value", (snapshot) => {
        updateTotalListing["/users/" + uid + "/totalListings"] =
          parseInt(snapshot.val()) + 1;
      });
    firebase.database().ref().update(updateTotalListing);
  } catch (error) {
    console.log(error);
    return { ok: false };
  }

  return { ok: true };
};

export default {
  addListing,
  getListings,
};
