import Client from "../api/Client";

const login = (email, password) => {
  Client.post("./auth", { email, password });
};

export default {
  login,
};
