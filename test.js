const axios = require("axios");

const yelp = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer BJtv0F_HIJjXCNQ3WuinpGKb7hS1LRnVSyKGQibWSVfRw7mqdcjffiJkF2gYtl6yCkO8nsSpg99cAfsyPCFms3dO3pF8VHcWKWCA_BEivCesdlNZwUy7i45H3ykDXnYx"
  }
});

async function test() {
  const response = await yelp.get("/search", {
    params: {
      limit: 1,
      term: "pasta",
      location: "india"
    }
  });
  console.log(response.data.businesses);
}

test();
