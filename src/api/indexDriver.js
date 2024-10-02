import axios from "axios";

const API = axios.create({
  baseURL: "https://hardcore-shippers.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});
export const signIn = (formData) => API.post("/user/driver/signin", formData);
export const signUp = (formData) => API.post("/user/driver/signup", formData);
