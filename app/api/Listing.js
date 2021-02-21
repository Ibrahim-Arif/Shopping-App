import client from "./Client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListing = (listing) => {
  const data = new FormData();

  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("category", listing.category);
  data.append("description", listing.description);

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/png",
      uri: image,
    })
  );

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return client.post(endpoint, data);
};

export default {
  addListing,
  getListings,
};
