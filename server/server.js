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
    "SELECT * from patientcredential WHERE username = ? AND password = ?",
    [username, password],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error" });
      }
      if (results.length === 0) {
        return res.status(401).json({ message: "Invalid Credentials" });
      }
      return res.status(200).json({ message: "Authentication Successful" });
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
    "SELECT * from doctorcredentials WHERE username = ? AND password = ?",
    [username, password],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error" });
      }
      if (results.length === 0) {
        return res.status(401).json({ message: "Invalid Credentials" });
      }
      return res.status(200).json({ message: "Authentication Successful" });
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
    "SELECT * from receptionistcredentials WHERE username = ? AND password = ?",
    [username, password],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error" });
      }
      if (results.length === 0) {
        return res.status(401).json({ message: "Invalid Credentials" });
      }
      return res.status(200).json({ message: "Authentication Successful" });
    }
  );
});

app.post("/admin/login", (req, res) => {
  const { username, password } = req.body;
  console.log("data came");
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please provide both username and password" });
  }

   db.query(
    "SELECT username,password FROM admincredentials WHERE username = ? AND password = ?",
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

      return res.status(200).json({ message: "Authentication successful" });
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
