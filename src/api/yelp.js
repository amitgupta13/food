import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer BJtv0F_HIJjXCNQ3WuinpGKb7hS1LRnVSyKGQibWSVfRw7mqdcjffiJkF2gYtl6yCkO8nsSpg99cAfsyPCFms3dO3pF8VHcWKWCA_BEivCesdlNZwUy7i45H3ykDXnYx"
  }
});
