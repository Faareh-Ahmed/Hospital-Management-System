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
    "select idDoctor, FirstName, LastName, Email, ContactNumber,LicenseNumber,Specialization, Experience, Salary, ConsultationFee  from user natural join credentials natural join staff natural join doctor where UserName = ? and Password = ?",
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

router.post("/show-appointments", (req, res) => {
  // Query to fetch appointment data from the appointment table
  console.log(req.body);
  const idDoctor = req.body.idDoctor;

  // Use the connection pool to execute the query
  db.query(
    "select idappointment, idPatient, concat(FirstName, ' ', LastName) as PatientName, gender, ContactNumber, Age, BMI, Address, date_format(AppointmentDate, '%d-%m-%Y') as AppointmentDate, Status  from appointment natural join patient natural join user where idDoctor = 3;",
    [idDoctor],
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

module.exports = router;
