const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

const mysqlConnection = require("../database");

// API #3: List of clients
router.get("/clients/", (res) => {
  mysqlConnection.query("SELECT * FROM clients", (err, rows) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

// API #1: Add a new client
router.post("/clients/create/", (req, res) => {
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

// API #2: Average age of clients
router.use("/clients/average/", (res) => {
  mysqlConnection.query("SELECT * FROM clients", (err, rows) => {
    const getAge = (time) => {
      const dateArray = time.split("-");
      const yearsElapsed = Math.trunc(
        (new Date() - new Date(dateArray[0], dateArray[1], dateArray[2])) /
          (1000 * 60 * 60 * 24 * 365)
      );
      return yearsElapsed;
    };
    const average = (
      rows.reduce((total, next) => total + getAge(next.birthday), 0) /
      rows.length
    )
      .toFixed(2)
      .toString();
    if (!err) {
      res.send(average);
    } else {
      console.log(err);
    }
  });
});

// EXTRA API: Get a specific client
router.get("/clients/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "SELECT * FROM clients WHERE id = ?",
    [id],
    (err, rows) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    }
  );
});

// EXTRA API: Delete a specific client
router.delete("/clients/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "DELETE FROM clients WHERE id = ?",
    [id],
    (err, rows) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
