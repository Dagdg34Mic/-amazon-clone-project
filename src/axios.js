import axios from "axios";
const instance = axios.create({
  //THE API {cloud function} URL
  baseURL: "http://127.0.0.1:5001/clone-frontend-project/us-central1/api",
});
export default instance;
//http://127.0.0.1:5001/clone-frontend-project/us-central1/api
