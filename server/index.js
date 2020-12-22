var express = require("express");
var app = express();
const https = require("https");

const AUTH_TOKEN = "SFAXCU2YRQBHQYWYIONT";
const API_URL = "https://www.eventbriteapi.com/v3";
// GET /v3/users/me HTTP 1.1 Host: www.eventbriteapi.com Authorization: Bearer SFAXCU2YRQBHQYWYIONT

app.get("/", function (req, res) {
  res.json({ message: "Connection to the API server is working!" });
});

app.get("/event/:eventId", function (req, res) {
  const { eventId } = req.params;

  https
    .get(`${API_URL}/events/${eventId}`, (resp) => {
      let data = "";

      // A chunk of data has been recieved.
      resp.on("data", (chunk) => {
        data += chunk;
      });
      console.log(resp);
      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        console.log("explanation", JSON.parse(data).explanation);
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
  res.send("GET request to the event");
});

app.listen(3000, () => {
  console.log(`API Server listening at http://localhost:3000`);
});
