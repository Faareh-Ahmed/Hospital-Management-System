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
    "select idPatient, FirstName, LastName, Email, ContactNumber,Age,Gender,BloodGroup,Height,Weight,BMI from user natural join credentials natural join patient where UserName = ? and Password = ?",
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


router.post("/show-history", (req, res) => {
  // Query to fetch appointment data from the appointment table
  console.log(req.body);
  console.log(req.body.idPatient);
  const idPatient = req.body.patientID;

  // Use the connection pool to execute the query
  db.query(
    "select idVisit,concat(FirstName, ' ',LastName) as Name, Email as DoctorEmail, LicenseNumber, Specialization, VisitType, Symptoms,Prescriptions,VisitDate from user natural join staff natural join doctor natural join visits where idPatient = ?",
    [idPatient],
    (err, result) => {
      if (err) {
        console.log("Error showing rooms data:", err);
        return res.status(500).json({ error: "Error showing admitroom data" });
      }
      console.log(result)
      res.json(result);
    }
  );
});


router.post("/show-upcoming", (req, res) => {
  // Query to fetch appointment data from the appointment table
  console.log(req.body);
  console.log(req.body.idPatient);
  const idPatient = req.body.patientID;

  // Use the connection pool to execute the query
  db.query(
    `
    select concat(FirstName, ' ',LastName) as Name, Email as DoctorEmail, LicenseNumber, Specialization, ConsultationFee,date_format(AppointmentDate, '%d-%m-%Y') as AppointmentDate, Status from appointment natural join doctor natural join staff natural join user where idPatient = ? and Status = ?`,
    [idPatient, "Due"],
    (err, result) => {
      if (err) {
        console.log("Error showing rooms data:", err);
        return res.status(500).json({ error: "Error showing admitroom data" });
      }
      console.log(result)
      res.json(result);
    }
  );
});


router.post("/show-pendingbills", (req, res) => {
  // Query to fetch appointment data from the appointment table
  console.log(req.body);
  console.log(req.body.idPatient);
  const idPatient = req.body.patientID;

  // Use the connection pool to execute the query
  db.query(
    `
    select idVisit,date_format(VisitDate, "%d-%m-%Y") as VisitDate,Amount,BillStatus from visits natural join billing where idPatient = ?;
`,
    [idPatient],
    (err, result) => {
      if (err) {
        console.log("Error showing rooms data:", err);
        return res.status(500).json({ error: "Error showing admitroom data" });
      }
      console.log(result)
      res.json(result);
    }
  );
});

router.post("/show-allbills", (req, res) => {
  // Query to fetch appointment data from the appointment table
  console.log(req.body);
  console.log(req.body.idPatient);
  const idPatient = req.body.patientID;

  // Use the connection pool to execute the query
  db.query(
    `

select idVisit,date_format(VisitDate, "%d-%m-%Y") as VisitDate,Amount, PaymentMethod, BankID, BillStatus,BillingDate from visits natural join billing where idPatient = ?;
`,
    [idPatient],
    (err, result) => {
      if (err) {
        console.log("Error showing rooms data:", err);
        return res.status(500).json({ error: "Error showing admitroom data" });
      }
      console.log(result)
      res.json(result);
    }
  );
});

router.post("/show-slips", (req, res) => {
  // Query to fetch appointment data from the appointment table
  console.log(req.body);
  console.log(req.body.idPatient);
  const idPatient = req.body.patientID;

  // Use the connection pool to execute the query
  db.query(
    `
    select idVisit,concat(FirstName, ' ',LastName) as Name, Specialization, VisitType,VisitDate from user natural join staff natural join doctor natural join visits where idPatient = ?;
`,
    [idPatient],
    (err, result) => {
      if (err) {
        console.log("Error showing rooms data:", err);
        return res.status(500).json({ error: "Error showing admitroom data" });
      }
      console.log(result)
      res.json(result);
    }
  );
});

module.exports = router;
