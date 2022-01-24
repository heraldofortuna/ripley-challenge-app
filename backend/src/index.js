const express = require("express");
const app = express();
const cors = require("cors");

// Settings
app.set("port", process.env.PORT || 3001);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "frontend/build")));
  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
  });
}

// Middlewares
app.use(express.json());
const whitelist = [
  "http://localhost:3001",
  "http://localhost:3000",
  "https://shrouded-journey-38552.herokuapp.com",
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

// Routes
app.use(require("./routes/clients.js"));

// Starting the server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
