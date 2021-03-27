import firebase from "firebase";
import client from "./Client";

const endpoint = "/listings";

const uriToBlob = (uri) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      // return the blob
      resolve(xhr.response);
    };

    xhr.onerror = function () {
      // something went wrong
      reject(new Error("uriToBlob failed"));
    };

    // this helps us get a blob
    xhr.responseType = "blob";

    xhr.open("GET", uri, true);
    xhr.send(null);
  });
};

const getListings = () => client.get(endpoint);

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
      // const fileName = image.substring(image.lastIndexOf("/") + 1);
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
};
