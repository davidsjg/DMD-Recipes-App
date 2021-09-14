import axios from "axios";

export default {
  // getRecipes: function () {
  //   return axios.get("/api/recipes");
  // },

  findByRecipe: function (query) {
    return axios.get("/api/recipes", { params: { q: query } });
  },
};
