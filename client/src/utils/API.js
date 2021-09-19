import axios from "axios";

export default {
  // getRecipes: function () {
  //   return axios.get("/api/recipes");
  // },

  singleQuery: function (query) {
    return axios.get("/api/recipes", { params: { q: query } });
  },

  // findByBook: function (query) {
  //   return axios.get("/api/recipes", { params: { q: query } });
  // },
};
