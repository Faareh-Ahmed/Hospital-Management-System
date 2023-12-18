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
    "select idappointment, idPatient, concat(FirstName, ' ', LastName) as PatientName, gender, ContactNumber, Age, BMI, Address, date_format(AppointmentDate, '%d-%m-%Y') as AppointmentDate, Status  from appointment natural join patient natural join user where idDoctor = ? and status = ?;",
    [idDoctor, "Due"],
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

router.post("/show-allappointments", (req, res) => {
  // Query to fetch appointment data from the appointment table
  console.log(req.body);
  const idDoctor = req.body.idDoctor;

  // Use the connection pool to execute the query
  db.query(
    "select idappointment, idPatient, concat(FirstName, ' ', LastName) as PatientName, gender, ContactNumber, Age, BMI, Address, date_format(AppointmentDate, '%d-%m-%Y') as AppointmentDate, Status, Symptoms, Prescriptions  from appointment natural join patient natural join visits natural join user where idDoctor = ?",
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
router.post("/show-walk_in", (req, res) => {
  console.log("call ayi");
  // Query to fetch appointment data from the appointment table
  console.log(req.body);
  const idDoctor = req.body.idDoctor;

  // Use the connection pool to execute the query
  db.query(
    "select  idPatient, concat(FirstName, ' ', LastName) as PatientName, gender, ContactNumber, Age, BMI, Address from patient natural join user natural join visits  where  idDoctor = ? and (prescriptions IS NULL OR prescriptions = '');",
    [idDoctor],
    (err, result) => {
      if (err) {
        console.log("Error showing rooms data:", err);
        return res.status(500).json({ error: "Error showing admitroom data" });
      }
      console.log("Walk In data sent");
    
      res.json(result);

    }
  );
});

router.post("/show-history", (req, res) => {
  console.log("call ayi");
  // Query to fetch appointment data from the appointment table
  console.log(req.body);
  const idDoctor = req.body.idDoctor;

  // Use the connection pool to execute the query
  db.query(
    "select concat(FirstName, ' ', LastName) as PatientName, gender, ContactNumber, Age, BMI, Address, Prescriptions, Symptoms, VisitDate from visits natural join patient natural join user where visittype = 'Walk-In' and prescriptions is not null",
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


router.get("/patient-history/:idPatient", (req, res) => {
  console.log("Patient history wali api ko call aagayi");

  // Assuming you're getting idPatient from the request parameters or query
  const idPatient = req.params.idPatient; // Adjust this line based on your route definition

  const sql = `
    SELECT
      CONCAT(up.LastName, ' ', up.FirstName) AS PatientName,
      v.idDoctor,
      CONCAT(ud.LastName, ' ', ud.FirstName) AS DoctorName,
      v.Symptoms,
      v.Prescriptions,
      v.VisitDate
    FROM
      visits v
    JOIN
      patient p ON v.idPatient = p.idPatient
    JOIN
      user up ON p.idUser = up.idUser
    JOIN
      doctor d ON d.idDoctor = v.idDoctor
    JOIN 
      staff st ON st.idStaff = d.idStaff
    JOIN 
      user ud ON ud.idUser=st.idUser
    WHERE
      up.Role = 'Patient'
      AND ud.Role = 'Staff'
      AND st.StaffType='Doctor'
      AND p.idPatient=?
      AND (v.Symptoms IS NOT NULL AND v.Prescriptions IS NOT NULL);
  `;

  db.query(sql, [idPatient], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      console.log("Error Retrieving History of Patient")
      res.json(results);
    }
  });
});



router.put("/update-appointment/:appointmentId", (req, res) => {
  console.log("api call hui");
  const appointmentId = req.params.appointmentId;
  const prescription = req.body.prescription;
  const symptoms = req.body.symptoms;
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const currentDate = `${day}-${month}-${year}`;

  db.query("UPDATE appointment set Status = ? where idAppointment = ? ", [
    "Done",
    appointmentId,
  ]);

  db.query(
    "UPDATE visits SET  Prescriptions = ?, Symptoms = ?, VisitDate = ? WHERE idAppointment = ?",
    [prescription, symptoms, currentDate, appointmentId],
    (err, result) => {
      if (err) {
        console.error("Error updating appointment:", err);
        return res.status(500).json({ error: "Error updating appointment" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Appointment not found" });
      }

      console.log("Appointment updated successfully");
      res.status(200).json({ message: "Appointment updated successfully" });
    }
  );
});



router.put("/update-walkin/:idPatient", (req, res) => {
  console.log("api call hui patient wali");
  const idPatient = req.params.idPatient;
  const prescription = req.body.prescription;
  const symptoms = req.body.symptoms;
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const currentDate = `${day}-${month}-${year}`;

  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 14);
  const futureDay = String(dueDate.getDate()).padStart(2, "0");
  const futureMonth = String(dueDate.getMonth() + 1).padStart(2, "0");
  const futureYear = dueDate.getFullYear();
  const DueDate = `${futureDay}-${futureMonth}-${futureYear}`;

  db.query(
    "UPDATE visits SET  Prescriptions = ?, Symptoms = ?, VisitDate = ? WHERE idPatient = ?",
    [prescription, symptoms, currentDate, idPatient],
    (err, result) => {
      if (err) {
        console.error("Error updating appointment:", err);
        return res.status(500).json({ error: "Error updating appointment" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Appointment not found" });
      }
      db.query(
        "INSERT INTO billing (idPatient, Amount, BillStatus, DueDate) values(?,?,?,?)",
        [idPatient,2500, "Pending",DueDate]
      );

      console.log("Appointment updated successfully");
      res.status(200).json({ message: "Appointment updated successfully" });
    }
  );
});

module.exports = router;
