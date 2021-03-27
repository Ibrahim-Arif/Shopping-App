import firebase from "firebase";
import { Image } from "react-native";
import client from "./Client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  onUploadProgress(0);
  const uid = firebase.auth().currentUser.uid;

  const { title, price, category, description, images } = listing;
  let data = { title, price, category, description, uid };

  let locJSON;
  if (listing.location) {
    locJSON = JSON.stringify(listing.location);
    data = { ...data, locJSON };
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
      const fileName = image.substring(image.lastIndexOf("/") + 1);
      const fileType = fileName.substring(fileName.lastIndexOf(".") + 1);
      let blob = new Blob([image], { type: "image/" + fileType });

      const task = newPostImagesDir
        .child("image" + index + "." + fileType)
        .put(blob);

      task.on("state_changed", ({ bytesTransferred, totalBytes }) =>
        onUploadProgress(bytesTransferred / totalBytes)
      );
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
