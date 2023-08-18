const express = require("express");
const axios = require("axios"); // You may need to install this package
const app = express();

const CLIENT_PORT = process.env.CLIENT_PORT || 3000;
const SERVER_PORT = process.env.SERVER_PORT || 5000;

app.get("/", (req, res) => {
  axios
    .get(`http://localhost:${SERVER_PORT}/products`)
    .then((response) => {
      const items = response.data;
      const formattedItems = items.map((item) => `${item.name} ${item.price}`);
      const formattedResponse = formattedItems.join("<br>");

      res.send(`Client App - Response from Server:<br>${formattedResponse}`);
      res.end();
    })
    .catch((error) => {
      res.status(500).send(`Client App - Error: ${error.message}`);
      res.end();
    });
});

app.listen(CLIENT_PORT, () => {
  console.log(`Client running at http://localhost:${CLIENT_PORT}`);
});
