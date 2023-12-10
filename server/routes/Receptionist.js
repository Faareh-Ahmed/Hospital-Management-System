const express = require("express");
const router = express.Router();

const db = require("../db");

const {
    generateRandomPassword,
    generateRandomUsername,
  } = require("../function/functions");

router.post("/login", (req, res) => {
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
        return res
          .status(200)
          .json({ message: "Authentication Successful", userInfo });
      }
    );
  });
  
  
  
  
  
  
  
  router.post("/add-routerointment", (req, res) => {
    console.log("Data has arrived at the backend");
    console.log(req.body);
  
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const contactNumber = req.body.contactNumber;
    const gender = req.body.gender;
    const age = req.body.age;
    const diesease = req.body.diesease;
    const bloodGroup = req.body.bloodGroup;
    const address = req.body.address;
    const height = req.body.height;
    const weight = req.body.weight;
    const doctorID = req.body.doctorID;
    const date = req.body.date;
    const BMI = (weight / (height * height)) * 10000;
    const username = generateRandomUsername();
    const password = generateRandomPassword();
  
    db.query(
      "INSERT INTO CREDENTIALS (UserName, Password) VALUES (?, ?)",
      [username, password],
      (err, credentialResult) => {
        if (err) {
          console.log("Error inserting credentials:", err);
          return res.status(500).json({ error: "Error inserting credentials" });
        }
  
        const credentialId = credentialResult.insertId;
  
        db.query(
          "INSERT INTO USER (FirstName, LastName, Email, ContactNumber, Role, idCredentials,  gender) VALUES (?, ?, ?, ?, ?, ?,?)",
          [
            firstName,
            lastName,
            email,
            contactNumber,
            "Patient",
            credentialId,
            gender,
          ],
          (err, userResult) => {
            if (err) {
              console.log("Error inserting user data:", err);
              return res.status(500).json({ error: "Error inserting user data" });
            }
  
            const userId = userResult.insertId;
  
            db.query(
              "INSERT INTO patient (idUser, Age, BloodGroup, Disease, Height, BMI, Weight, Address) VALUES (?, ?, ?, ?,?,?,?,?)",
              [userId, age, bloodGroup, diesease, height, BMI, weight, address],
              (err, patientResult) => {
                if (err) {
                  console.log("Error inserting staff data:", err);
                  return res
                    .status(500)
                    .json({ error: "Error inserting staff data" });
                }
  
                const patientId = patientResult.insertId;
  
                db.query(
                  "INSERT INTO routerointment (idPatient, idDoctor, routerointmentDate, Status) VALUES (?, ?, ?,?)",
                  [patientId, doctorID, date, "Due"],
                  (err, routerointmentResult) => {
                    if (err) {
                      console.log("Error inserting routerointment data:", err);
                      return res
                        .status(500)
                        .json({ error: "Error inserting routerointment data" });
                    }
  
                    console.log("Data inserted successfully into the database");
                    res
                      .status(200)
                      .json({ message: "Data inserted successfully" });
                  }
                );
              }
            );
          }
        );
      }
    );
  });
  
  
  
  
  router.get("/show-doctors", (req, res) => {
    console.log("show doctor wali api ko call aagayi");
    // Query to fetch routerointment data from the routerointment table
    const sql =
      "select idDoctor, concat(FirstName, ' ', LastName) as Name from user natural join staff natural join doctor;";
  
    // Use the connection pool to execute the query
    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(results); // Send the routerointment data as JSON to the frontend
      }
    });
  });
  
  
  router.get("/show-routerointments", (req, res) => {
    // Query to fetch routerointment data from the routerointment table
    const sql =
      `SELECT
      routerointment.*,
      DATE_FORMAT(routerointmentDate, '%d-%m-%Y') AS routerointmentDate1,
      CONCAT(user.FirstName, ' ', user.LastName) AS PatientName
  FROM
      routerointment
  NATURAL JOIN
      patient
  NATURAL JOIN
      user;
  `;
  
    // Use the connection pool to execute the query
    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(results); // Send the routerointment data as JSON to the frontend
      }
    });
  });
  
  
  router.get("/show-patients", (req, res) => {
    console.log("Patient wali api ko call aagayi");
    // Query to fetch routerointment data from the routerointment table
    // Query to fetch routerointment data from the routerointment table
    const sql =
      `select idPatient, concat(FirstName, ' ', LastName) as Name, Age, BloodGroup, Disease, BMI, Address,Email,ContactNumber from patient natural join user
  `;
    // Use the connection pool to execute the query
    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(results); // Send the routerointment data as JSON to the frontend
      }
    });
  });
  
  
  
  
  
  
  router.get("/show-room", (req, res) => {
    console.log("room wali api ko call aagayi")
    // Query to fetch routerointment data from the routerointment table
    const sql =
      "select * from room;";
  
    // Use the connection pool to execute the query
    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(results); // Send the routerointment data as JSON to the frontend
      }
    });
  });
  
  


module.exports = router;
