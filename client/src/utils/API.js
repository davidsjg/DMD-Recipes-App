import axios from "axios";

export default {
  // getRecipes: function () {
  //   return axios.get("/api/recipes");
  // },

  singleQuery: function (query) {
    return axios.get("/api/recipes", { params: { q: query } });
  },

  doubleQuery: function (query1, query2) {
    return axios.get("/api/recipes", { params: { q: query1, r: query2 } });
  },

  // findByBook: function (query) {
  //   return axios.get("/api/recipes", { params: { q: query } });
  // },
};
