const express = require("express");
const router = express.Router();

const db = require("../db");

router.post("/show-room", (req, res) => {
  // Query to fetch routerointment data from the routerointment table
  console.log(req.body);
  const nurseID = req.body.nurseID;

  // Use the connection pool to execute the query
  db.query(
    "select * from room natural join admitroom where idNurse = ?",
    [nurseID],
    (err, result) => {
      if (err) {
        console.log("Error showing rooms data:", err);
        return res.status(500).json({ error: "Error showing admitroom data" });
      }
      console.log("room data sent");
      res.json(result);
    }
  );
});

router.post("/nurse/login", (req, res) => {
  const { username, password } = req.body;
  console.log("data came");
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please provide both username and password" });
  }
  db.query(
    "select idNurse,FirstName, LastName, Email, ContactNumber,Responsibilities,Specialization, Experience, Salary  from user natural join credentials natural join staff natural join nurse where UserName = ? and Password = ?",
    [username, password],
    (err, results) => {
      if (err) {
        console.log("Query kharab");
        return res.status(500).json({ message: "Internal server error" });
      }
      if (results.length === 0) {
        console.log("password kharab");
        return res.status(401).json({ message: "Invalid Credentials" });
      }
      const userInfo = results[0];
      return res
        .status(200)
        .json({ message: "Authentication Successful", userInfo });
    }
  );
});

module.exports = router;
