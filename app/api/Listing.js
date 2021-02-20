import client from "./Client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

export default {
  getListings,
};
