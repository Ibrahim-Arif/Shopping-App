import firebase from "firebase";
import client from "./Client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  const uid = firebase.auth().currentUser.uid;

  const { title, price, category, description } = listing;
  const data = { title, price, category, description, uid };

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
  } catch (error) {
    console.log(error);
  }

  // listing.images.forEach((image, index) =>
  //   data.append("images", {
  //     name: "image" + index,
  //     type: "image/jpg",
  //     uri: image,
  //   })
  // );
  return true;
};

export default {
  addListing,
  getListings,
};
