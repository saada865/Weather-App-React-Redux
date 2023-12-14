const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/weather", async (req, res) => {
  const apiResponse = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=23f3938e20e046b0999223838231412&q=London"
  );
  const data = await apiResponse.json();
  const valTemp = data.current.temp_c;
  console.log("Request Recieved");
  console.log(data);
  res.json(data);
});

app.listen(4000, () => {
  console.log("Server is running! ");
});
