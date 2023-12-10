const express = require("express");
const router = express.Router();

const db = require("../db");

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("data came");
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please provide both username and password" });
  }
  db.query(
    "select FirstName, LastName, Email, ContactNumber,Age,Gender,BloodGroup,Height,Weight,BMI from user natural join credentials natural join patient where UserName = ? and Password = ?",
    [username, password],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error" });
      }
      if (results.length === 0) {
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
