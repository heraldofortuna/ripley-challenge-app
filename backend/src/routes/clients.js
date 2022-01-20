const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

const mysqlConnection = require("../database");

// API #3: List of clients
router.get("/clients/", (req, res) => {
  mysqlConnection.query("SELECT * FROM clients", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

// API #1: Add a new client
router.post("/clients/", (req, res) => {
  const { id, name, lastname, birthday } = req.body;
  const query = `
    CALL clientAddOrEdit(?, ?, ?, ?);
  `;
  mysqlConnection.query(
    query,
    [id, name, lastname, birthday],
    (err, rows, fields) => {
      if (!err) {
        res.json({ Status: "Client saved" });
      } else {
        console.log(err);
      }
    }
  );
});

// EXTRA API: Get a specific client
router.get("/clients/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "SELECT * FROM clients WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
