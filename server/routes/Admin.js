const express = require("express");
const router = express.Router();

const db = require("../db");

const {
  generateRandomPassword,
  generateRandomUsername,
} = require("../function/functions");

router.post("/login", (req, res) => {
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

router.post("/add-doctor", (req, res) => {
  console.log("Data has arrived at the backend");
  console.log(req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const contactNumber = req.body.contactNumber;
  const licenseNumber = req.body.licenseNumber;
  const specialization = req.body.specialization;
  const shift = req.body.shift;
  const experience = req.body.experience;
  const annualSalary = req.body.annualSalary;
  const gender = req.body.gender;

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
        "INSERT INTO USER (FirstName, LastName, Email, ContactNumber, Role, idCredentials,gender) VALUES (?, ?, ?, ?, ?, ?,?)",
        [
          firstName,
          lastName,
          email,
          contactNumber,
          "Staff",
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
            "INSERT INTO staff (idUser, Salary, StaffType, Shift) VALUES (?, ?, ?, ?)",
            [userId, annualSalary, "Doctor", shift],
            (err, staffResult) => {
              if (err) {
                console.log("Error inserting staff data:", err);
                return res
                  .status(500)
                  .json({ error: "Error inserting staff data" });
              }

              const staffId = staffResult.insertId;

              db.query(
                "INSERT INTO doctor (idStaff, idDepartment, idClinicalRoom, LicenseNumber, Specialization, Experience, ConsultationFee) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [
                  staffId,
                  1,
                  1,
                  licenseNumber,
                  specialization,
                  experience,
                  2500,
                ],
                (err, doctorResult) => {
                  if (err) {
                    console.log("Error inserting doctor data:", err);
                    return res
                      .status(500)
                      .json({ error: "Error inserting doctor data" });
                  }

                  console.log("Data inserted successfully into the database");
                  res
                    .status(200)
                    .json({ message: "Data inserted successfully", "username": username, "password": password }, );
                }
              );
            }
          );
        }
      );
    }
  );
});

router.post("/add-receptionist", (req, res) => {
  console.log("Data has arrived at the backend");
  console.log(req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const contactNumber = req.body.contactNumber;
  const certificateNumber = req.body.certificateNumber;
  const cnic = req.body.cnic;
  const shift = req.body.shift;
  const annualSalary = req.body.annualSalary;
  const gender = req.body.gender;

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
        "INSERT INTO USER (FirstName, LastName, Email, ContactNumber, Role, idCredentials,gender) VALUES (?, ?, ?, ?, ?, ?,?)",
        [
          firstName,
          lastName,
          email,
          contactNumber,
          "Staff",
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
            "INSERT INTO staff (idUser, Salary, StaffType, Shift) VALUES (?, ?, ?, ?)",
            [userId, annualSalary, "Receptionist", shift],
            (err, staffResult) => {
              if (err) {
                console.log("Error inserting staff data:", err);
                return res
                  .status(500)
                  .json({ error: "Error inserting staff data" });
              }

              const staffId = staffResult.insertId;

              db.query(
                "INSERT INTO receptionist (idStaff,CNIC,CertificateNumber) VALUES (?, ?, ?)",
                [staffId, cnic, certificateNumber],
                (err, receptionistresult) => {
                  if (err) {
                    console.log("Error inserting receptionist data:", err);
                    return res
                      .status(500)
                      .json({ error: "Error inserting receptionist data" });
                  }

                  console.log("Data inserted successfully into the database");
                  res
                    .status(200)
                    .json({ message: "Data inserted successfully", "username": username, "password": password  },);
                }
              );
            }
          );
        }
      );
    }
  );
});

router.post("/add-nurse", (req, res) => {
  console.log("Data has arrived at the backend");
  console.log(req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const contactNumber = req.body.contactNumber;
  const shift = req.body.shift;
  const annualSalary = req.body.annualSalary;
  const gender = req.body.gender;
  const responsibilities = req.body.responsibilites;
  const specialization = req.body.specialization;
  const experience = req.body.experience;

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
          "Staff",
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
            "INSERT INTO staff (idUser, Salary, StaffType, Shift) VALUES (?, ?, ?, ?)",
            [userId, annualSalary, "Nurse", shift],
            (err, staffResult) => {
              if (err) {
                console.log("Error inserting staff data:", err);
                return res
                  .status(500)
                  .json({ error: "Error inserting staff data" });
              }

              const staffId = staffResult.insertId;

              db.query(
                "INSERT INTO nurse (idStaff,Responsibilities, Specialization,Experience) VALUES (?, ?, ?,?)",
                [staffId, responsibilities, specialization, experience],
                (err, nurseResult) => {
                  if (err) {
                    console.log("Error inserting nurse data:", err);
                    return res
                      .status(500)
                      .json({ error: "Error inserting nurse data" });
                  }

                  console.log("Data inserted successfully into the database");
                  res
                    .status(200)
                    .json({ message: "Data inserted successfully", "username": username, "password": password  },);
                }
              );
            }
          );
        }
      );
    }
  );
});

router.post("/add-clinicalroom", (req, res) => {
  console.log("Data has arrived at the backend");
  console.log(req.body);

  const roomtype = req.body.roomtype;
  const floor = req.body.floor;
  const availability = req.body.availability;
  const capacity = req.body.capacity;

  //for clinical
  const speciality = req.body.speciality;
  const equipment = req.body.equipment;

  db.query(
    "INSERT INTO room (RoomType, Floor, Availability, Capacity) VALUES (?, ?,?,?)",
    [roomtype, floor, availability, capacity],
    (err, roomResult) => {
      if (err) {
        console.log("Error inserting room:", err);
        return res.status(500).json({ error: "Error inserting room" });
      }

      const roomId = roomResult.insertId;

      db.query(
        "INSERT INTO clinicalroom (idRoom, Speciality, Equipment) VALUES (?, ?, ?)",
        [roomId, speciality, equipment],
        (err, clinicalResult) => {
          if (err) {
            console.log("Error inserting clinicalroom data:", err);
            return res
              .status(500)
              .json({ error: "Error inserting clinicalroom data" });
          }
          console.log("Data inserted successfully into the database");
          res.status(200).json({ message: "Data inserted successfully" });
        }
      );
    }
  );
});

router.post("/add-admitroom", (req, res) => {
  console.log("Data has arrived at the backend");
  console.log(req.body);

  const roomtype = req.body.roomtype;
  const floor = req.body.floor;
  const availability = req.body.availability;
  const capacity = req.body.capacity;

  //for admit
  const idNurse = req.body.idNurse;
  const AdmitDate = req.body.admitdate;
  const DischargeDate = req.body.dischargedate;
  const price = req.body.price;

  db.query(
    "INSERT INTO room (RoomType, Floor, Availability, Capacity) VALUES (?, ?,?,?)",
    [roomtype, floor, availability, capacity],
    (err, roomResult) => {
      if (err) {
        console.log("Error inserting room:", err);
        return res.status(500).json({ error: "Error inserting room" });
      }

      const roomId = roomResult.insertId;

      db.query(
        "INSERT INTO admitroom (idRoom, idNurse, AdmitDate, DischargeDate, PricePerDay) VALUES (?, ?, ?,?,?)",
        [roomId, idNurse, admitdate, dischargedate, price],
        (err, admitResult) => {
          if (err) {
            console.log("Error inserting admitroom data:", err);
            return res
              .status(500)
              .json({ error: "Error inserting admitroom data" });
          }
          console.log("Data inserted successfully into the database");
          res.status(200).json({ message: "Data inserted successfully" });
        }
      );
    }
  );
});


//Update the Staff Record

router.put("/update-staff/:clickedRowStaff", (req, res) => {
  console.log("api call hui to Update Staff");
  const staffId = req.params.clickedRowStaff;
  const salary = req.body.salary;
  const shift = req.body.shift;
  // const today = new Date();
  // const day = String(today.getDate()).padStart(2, "0");
  // const month = String(today.getMonth() + 1).padStart(2, "0");
  // const year = today.getFullYear();
  // const currentDate = `${day}-${month}-${year}`;

  db.query("UPDATE staff SET Salary = ?, Shift = ? WHERE idStaff = ?", [
    salary,
    shift,
    staffId,
  ], (err, result) => {
    if (err) {
      console.error("Error updating staff:", err);
      return res.status(500).json({ error: "Error updating staff" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Staff not found" });
    }

    console.log("Staff updated successfully");
    res.status(200).json({ message: "Staff updated successfully" });
  });
});



router.get("/show-doctors", (req, res) => {
  // Call the stored procedure
  db.query("CALL ShowDoctors()", (err, results) => {
      if (err) {
          console.log("Error calling stored procedure:", err);
          return res.status(500).json({ error: "Error calling stored procedure" });
      }

      // Handle results if needed
      const doctors = results[0]; // Assuming the procedure returns a result set
      console.log("Stored procedure executed successfully");
      res.status(200).json(doctors);
  });
});

router.get("/show-nurses", (req, res) => {
  db.query("CALL ShowNurses()", (err, results) => {
      if (err) {
          console.log("Error calling stored procedure:", err);
          return res.status(500).json({ error: "Error calling stored procedure" });
      }

      const nurses = results[0];
      console.log("Stored procedure executed successfully");
      res.status(200).json(nurses);
  });
});

router.get("/show-receptionist", (req, res) => {
  db.query("CALL ShowReceptionists()", (err, results) => {
      if (err) {
          console.log("Error calling stored procedure:", err);
          return res.status(500).json({ error: "Error calling stored procedure" });
      }

      const receptionists = results[0];
      console.log("Stored procedure executed successfully");
      res.status(200).json(receptionists);
  });
});

router.get("/show-clinicalroom", (req, res) => {
  const sql =
    "select idclinicalroom,RoomType,Floor,Speciality,Equipment,Availability from room natural join clinicalroom";
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results); // Send the appointment data as JSON to the frontend
    }
  });
});

router.get("/show-admitroom", (req, res) => {
  // Query to fetch appointment data from the appointment table
  const sql =
    "select idadmitroom,RoomType,Floor,AdmitDate,DischargeDate,Priceperday from room natural join admitroom";

  // Use the connection pool to execute the query
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results); // Send the appointment data as JSON to the frontend
    }
  });
});

router.get("/show-history", (req, res) => {
  console.log("history wali api ko call aagayi");
  const sql = `
    SELECT
      v.idVisit,
      v.idPatient,
      CONCAT(up.LastName, ' ', up.FirstName) AS PatientName,
      v.idDoctor,
      CONCAT(ud.LastName, ' ', ud.FirstName) AS DoctorName,
      d.LicenseNumber,
      v.VisitType,
      v.Symptoms,
      v.Prescriptions,
      v.VisitDate
  FROM
      visits v
  JOIN
      user up ON v.idPatient = up.idUser
  JOIN
      user ud ON v.idDoctor = ud.idUser
  JOIN
      doctor d ON v.idDoctor = d.idDoctor
  WHERE
      up.Role = 'Patient'
      AND ud.Role = 'Doctor';
    `;

  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});
module.exports = router;
