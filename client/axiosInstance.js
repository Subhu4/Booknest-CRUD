import axios from "axios";

export const bookBaseUrl = axios.create({
  baseURL: "https://booknest-crud-backend.onrender.com/book",
});


