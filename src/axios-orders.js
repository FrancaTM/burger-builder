import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-c6b9c.firebaseio.com/"
});

export default instance;
