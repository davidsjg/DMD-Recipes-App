import axios from "axios";

export default {
  getTitles: function () {
    return axios.get("/api/recipes/titles");
  },
  getBooks: function () {
    return axios.get("/api/recipes/books");
  },
  // singleQuery: function (query) {
  //   return axios.get("/api/recipes", { params: { q: query } });
  // },

  singleQuery: function (query1, query2) {
    return axios.get("/api/recipes", { params: { q: query1, r: query2 } });
  },

  // doubleQuery: function (query1, query2) {
  //   return axios.get("/api/recipes", { params: { q: query1, r: query2 } });
  // },

  // findByBook: function (query) {
  //   return axios.get("/api/recipes", { params: { q: query } });
  // },
};
