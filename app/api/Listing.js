import firebase from "firebase";
import _ from "lodash";

const uriToBlob = (uri) => {
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

const addListing = (listing, onUploadProgress) => {
  onUploadProgress(0);
  const uid = firebase.auth().currentUser.uid;

  const { title, price, category, description, images } = listing;
  let data = { title, price, category, description, uid };

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

      uriToBlob(image).then((blob) => {
        const task = newPostImagesDir
          .child(imagename + "." + fileType)
          .put(blob, {
            contentType: "image/" + fileType,
          });
        task.on("state_changed", ({ bytesTransferred, totalBytes }) =>
          onUploadProgress(bytesTransferred / totalBytes)
        );
        task.then((snapshot) =>
          snapshot.ref.getDownloadURL().then((uri) => {
            data = {
              ...data,
              ["imagesURL"]: { ...data.imagesURL, [imagename]: uri },
            };

            updates["/listings/" + newPostKey] = data;
            updates["/users/" + uid + "/listings/" + newPostKey] = data;
            firebase.database().ref().update(updates);
          })
        );
      });
    });
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
