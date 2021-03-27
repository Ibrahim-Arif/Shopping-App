import firebase from "firebase";
import client from "./Client";
import _ from "lodash";

const endpoint = "/listings";

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

const getListings = () => client.get(endpoint);

const getListings1 = () => {
  let data = {};

  firebase
    .database()
    .ref("/listings")
    .on("value", (snapshot) => {
      data = snapshot.val();
      console.log(snapshot.val());
    });

  let dataArray = _.map(data, (val, uid) => {
    return { ...val, uid };
  });

  console.log(dataArray);

  // return { ok: true, data };

  //   //      data should be an array of these objects
  //   // {
  //   //   id: 3,
  //   //   title: "Gray couch in a great condition",
  //   //   images: [{ fileName: "couch2" }],
  //   //   categoryId: 1,
  //   //   price: 1200,
  //   //   userId: 2,
  //   //   location: {
  //   //     latitude: 37.78825,
  //   //     longitude: -122.4324,
  //   //   },
  //   // },
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
    updates["/listings/" + newPostKey] = data;
    updates["/users/" + uid + "/listings/" + newPostKey] = data;

    firebase.database().ref().update(updates);

    let newPostImagesDir = firebase
      .storage()
      .ref("listings/" + newPostKey + "/");

    images.forEach(async (image, index) => {
      const fileType = image.substring(image.lastIndexOf(".") + 1);

      uriToBlob(image).then((blob) => {
        const task = newPostImagesDir
          .child("image" + index + "." + fileType)
          .put(blob, {
            contentType: "image/" + fileType,
          });

        task.on("state_changed", ({ bytesTransferred, totalBytes }) =>
          onUploadProgress(bytesTransferred / totalBytes)
        );
      });
    });
  } catch (error) {
    console.log(error);
  }

  return true;
};

export default {
  addListing,
  getListings,
  getListings1,
};
