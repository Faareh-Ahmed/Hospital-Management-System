const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "zaq@12wsx",
  database: "hospital",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

app.post("/patient/login", (req, res) => {
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
      return res.status(200).json({ message: "Authentication Successful",userInfo });
    }
  );
});

app.post("/receptionist/login", (req, res) => {
  const { username, password } = req.body;
  console.log("data came");
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please provide both username and password" });
  }
  db.query(
    "select FirstName, LastName, Email, ContactNumber, Salary,CNIC, Shift, CertificateNumber from user natural join credentials natural join staff natural join receptionist where username = ? and password = ?",
    [username, password],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error" });
      }
      if (results.length === 0) {
        return res.status(401).json({ message: "Invalid Credentials" });
      }
      const userInfo = results[0];
      return res.status(200).json({ message: "Authentication Successful", userInfo });
    }
  );
});

app.post("/doctor/login", (req, res) => {
  const { username, password } = req.body;
  console.log("data came");
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please provide both username and password" });
  }
  db.query(
    "select FirstName, LastName, Email, ContactNumber,LicenseNumber,Specialization, Experience, Salary, ConsultationFee  from user natural join credentials natural join staff natural join doctor where UserName = ? and Password = ?",
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

app.post("/admin/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please provide both username and password" });
  }

  db.query(
    "select FirstName, LastName, Email, ContactNumber,CNIC,CertificateNumber from user natural join credentials natural join admin where UserName = ? and Password = ?",
    [username, password],
    (err, results) => {
      if (err) {
        console.error("Error querying credentials:", err);
        return res.status(500).json({ message: "Internal server error" });
      }

      if (results.length === 0) {
        console.log("no input yet");
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const userInfo = results[0]; // Assuming only one admin with given credentials
      return res.status(200).json({
        message: "Authentication successful",
        userInfo,
      });
    }
  );
});

try {
  app.listen(5000, () => {
    console.log("Server started on port 5000");
  });
} catch (error) {
  console.error("Error starting the server:", error);
}
