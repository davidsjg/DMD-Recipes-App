import axios from "axios";

export default {
  getRecipes: function () {
    return axios.get("/api/");
  },
};
