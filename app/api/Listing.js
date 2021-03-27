import firebase from "firebase";
import client from "./Client";
import _ from "lodash";
import { ObjectSchema } from "yup";

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

const getListings1 = () => client.get(endpoint);

const getListings = (listings, setListings) => {
  let dataObj = {};

  firebase
    .database()
    .ref("/listings")
    .on("value", (snapshot) => {
      dataObj = snapshot.val();
      // console.log(snapshot.val());
    });

  let data = [];
  // firebase
  // .storage()
  // .ref("/listings/-MWnb1TZ2vkVvR5K0Pv0/image0.png")
  // .getDownloadURL()
  // .then((uri) => {
  //   console.log(uri);
  // });

  // data = _.map(dataObj, (val, key) => {
  //   return { ...val, key };
  // });

  // let keys = [];

  // data = _.map(dataObj, (val, key) => {
  //   // keys.push(key);
  //   return { ...val, key };
  // });

  _.forEach(dataObj, (val, key) => {
    let obj = { ...val, key };
    firebase
      .storage()
      .ref("/listings/" + key + "/image0.png")
      .getDownloadURL()
      .then((uri) => {
        console.log(uri);
        obj = { ...obj, images: [{ url: uri }] };
      });

    data = [...data, obj];
    setListings(data);
    console.log(listings);
  });

  // setListings(data);

  // let finaldata = [];

  // let i = 0;
  // keys.forEach((key) => {
  //   firebase
  //     .storage()
  //     .ref("/listings/" + key + "/image0.png")
  //     .getDownloadURL()
  //     .then((uri) => {
  //       // finaldata.push({ ...data[i], images: [{ url: uri }] });
  //       setListings([...listings, { ...data[i], images: [{ url: uri }] }]);
  //       // console.log({ ...data[i], images: [{ url: uri }] });
  //       // obj = { ...obj, images: [{ url: uri }] };
  //     });
  //   i++;
  // });
  // console.log(finaldata);

  // return { ok: true, data: finaldata };

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
