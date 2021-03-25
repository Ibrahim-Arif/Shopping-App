import firebase from "firebase";
import client from "./Client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  // const data = new FormData();
  console.log("inside add listing");
  const { title, price, category, description } = listing;
  const uid = firebase.auth().currentUser.uid;

  const data = { title, price, category, description, uid };

  let locJson;
  if (listing.location) {
    locJson = JSON.stringify(listing.location);
    data = { ...data, locJson };
  }
  console.log(data);

  try {
    // console.log(firebase.database().ref().child("listings").push().key);
    firebase.database().ref().child("listings").push(data);
    // firebase.database().ref(`/users/heheheh`).set({
    //   username: "heheh",
    //   email: "hehehe",
    //   image: "../assets/user.jpg",
    //   messages: {},
    //   listings: {},
    // });
  } catch (error) {}

  // data.append("title", listing.title);
  // data.append("price", listing.price);
  // data.append("category", listing.category);
  // data.append("description", listing.description);

  // listing.images.forEach((image, index) =>
  //   data.append("images", {
  //     name: "image" + index,
  //     type: "image/jpg",
  //     uri: image,
  //   })
  // );

  // if (listing.location)
  //   data.append("location", JSON.stringify(listing.location));

  // return client.post(endpoint, data, {
  //   onUploadProgress: ({ loaded, total }) => onUploadProgress(loaded / total),
  // });
};

export default {
  addListing,
  getListings,
};
