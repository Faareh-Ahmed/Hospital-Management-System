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


router.post("/add-appointment", (req, res) => {
  console.log("Data has arrived at the backend");
  console.log(req.body);

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const contactNumber = req.body.contactNumber;
  const gender = req.body.gender;
  const age = req.body.age;
  const disease = req.body.disease;
  const bloodGroup = req.body.bloodGroup;
  const address = req.body.address;
  const height = req.body.height;
  const weight = req.body.weight;
  const doctorID = req.body.doctorID;
  const date = req.body.date;
  const BMI = (weight / (height * height)) * 10000;

  // Check if a user with the given email and role "Patient" already exists
  db.query(
    "SELECT * FROM USER WHERE Email = ? AND Role = 'Patient'",
    [email],
    (err, userCheckResult) => {
      if (err) {
        console.log("Error checking existing user:", err);
        return res.status(500).json({ error: "Error checking existing user" });
      }

      if (userCheckResult.length > 0) {
        // User with the same email and role "Patient" exists
        const userId = userCheckResult[0].idUser;

        // Fetch the idPatient associated with the existing idUser
        db.query(
          "SELECT idPatient FROM patient WHERE idUser = ?",
          [userId],
          (err, patientResult) => {
            if (err) {
              console.log("Error fetching patient data:", err);
              return res
                .status(500)
                .json({ error: "Error fetching patient data" });
            }

            if (patientResult.length > 0) {
              const patientId = patientResult[0].idPatient;

              // Insert into the appointment table
              db.query(
                "INSERT INTO appointment (idPatient, idDoctor, AppointmentDate, Status) VALUES (?, ?, ?, ?)",
                [patientId, doctorID, date, "Due"],
                (err, appointmentResult) => {
                  if (err) {
                    console.log("Error inserting appointment data:", err);
                    return res
                      .status(500)
                      .json({ error: "Error inserting appointment data" });
                  }

                  const appointmentId = appointmentResult.insertId;

                  // Insert into the visits table
                  db.query(
                    "INSERT INTO visits (idPatient, idDoctor, VisitType, idAppointment) VALUES (?, ?, ?, ?)",
                    [patientId, doctorID, "Appointment", appointmentId],
                    (err, visitsResult) => {
                      if (err) {
                        console.log("Error inserting visits data:", err);
                        return res
                          .status(500)
                          .json({ error: "Error inserting visits data" });
                      }

                      console.log(
                        "Data inserted successfully into the database"
                      );
                      res.status(200).json({
                        message: "Data inserted successfully",
                      });
                    }
                  );
                }
              );
            } else {
              // Handle the case where there is no patient record for the user
              console.log("No patient record found for the user");
              return res
                .status(500)
                .json({ error: "No patient record found for the user" });
            }
          }
        );
      } else {
        const username = generateRandomUsername();
        const password = generateRandomPassword();

        db.query(
          "INSERT INTO CREDENTIALS (UserName, Password) VALUES (?, ?)",
          [username, password],
          (err, credentialResult) => {
            if (err) {
              console.log("Error inserting credentials:", err);
              return res
                .status(500)
                .json({ error: "Error inserting credentials" });
            }

            const credentialId = credentialResult.insertId;

            // Insert into the user table
            db.query(
              "INSERT INTO USER (FirstName, LastName, Email, ContactNumber, Role, idCredentials, gender) VALUES (?, ?, ?, ?, ?, ?, ?)",
              [firstName, lastName, email, contactNumber, "Patient", credentialId, gender],
              (err, userResult) => {
                if (err) {
                  console.log("Error inserting user data:", err);
                  return res
                    .status(500)
                    .json({ error: "Error inserting user data" });
                }

                const userId = userResult.insertId;

                db.query(
                  "INSERT INTO patient (idUser, Age, BloodGroup, Disease, Height, BMI, Weight, Address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                  [userId, age, bloodGroup, disease, height, BMI, weight, address],
                  (err, patientResult) => {
                    if (err) {
                      console.log("Error inserting patient data:", err);
                      return res
                        .status(500)
                        .json({ error: "Error inserting patient data" });
                    }

                    const patientId = patientResult.insertId;

                    // Insert into the appointment table
                    db.query(
                      "INSERT INTO appointment (idPatient, idDoctor, AppointmentDate, Status) VALUES (?, ?, ?, ?)",
                      [patientId, doctorID, date, "Due"],
                      (err, appointmentResult) => {
                        if (err) {
                          console.log("Error inserting appointment data:", err);
                          return res
                            .status(500)
                            .json({ error: "Error inserting appointment data" });
                        }

                        const appointmentId = appointmentResult.insertId;

                        // Insert into the visits table
                        db.query(
                          "INSERT INTO visits (idPatient, idDoctor, VisitType, idAppointment) VALUES (?, ?, ?, ?)",
                          [patientId, doctorID, "Appointment", appointmentId],
                          (err, visitsResult) => {
                            if (err) {
                              console.log("Error inserting visits data:", err);
                              return res
                                .status(500)
                                .json({ error: "Error inserting visits data" });
                            }

                            console.log(
                              "Data inserted successfully into the database"
                            );
                            res.status(200).json({
                              message: "Data inserted successfully",
                              username: username,
                              password: password,
                            });
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        ); // Closing bracket for the db.query in the "else" block
      }
    }
  );
});




//add patient API Might needs some change in it where we are inserting the data into Appointment table

router.post("/add-patient", (req, res) => {
  console.log("Data has arrived at the backend");
  console.log(req.body);

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const contactNumber = req.body.contactNumber;
  const gender = req.body.gender;
  const age = req.body.age;
  const diesease = req.body.disease;
  const bloodGroup = req.body.bloodGroup;
  const address = req.body.address;
  const height = req.body.height;
  const weight = req.body.weight;
  const doctorID = req.body.doctorID;
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
                "INSERT INTO visits (idPatient, idDoctor, VisitType) VALUES (?, ?, ?)",
                [patientId, doctorID, "Walk-In"],
                (err, appointmentResult) => {
                  if (err) {
                    console.log("Error inserting appointment data:", err);
                    return res
                      .status(500)
                      .json({ error: "Error inserting appointment data" });
                  }

                  console.log("Data inserted successfully into the database");
                  res.status(200).json({
                    message: "Data inserted successfully",
                    username: username,
                    password: password,
                  });
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
  // Query to fetch appointment data from the appointment table
  const sql =
    "select idDoctor, concat(FirstName, ' ', LastName) as Name from user natural join staff natural join doctor;";

  // Use the connection pool to execute the query
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results); // Send the appointment data as JSON to the frontend
    }
  });
});

router.get("/show-appointments", (req, res) => {
  // Query to fetch appointment data from the appointment table
  const sql = `SELECT
      appointment.*,
      DATE_FORMAT(AppointmentDate, '%d-%m-%Y') AS AppointmentDate1,
      CONCAT(user.FirstName, ' ', user.LastName) AS PatientName
  FROM
      appointment
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
      res.json(results); // Send the appointment data as JSON to the frontend
    }
  });
});

router.get("/show-patients", (req, res) => {
  console.log("Patient wali api ko call aagayi");
  // Query to fetch appointment data from the appointment table
  // Query to fetch appointment data from the appointment table
  const sql = `select idPatient, concat(FirstName, ' ', LastName) as Name, Age, BloodGroup, Disease, BMI, Address,Email,ContactNumber from patient natural join user
  `;
  // Use the connection pool to execute the query
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results); // Send the appointment data as JSON to the frontend
    }
  });
});

router.get("/show-room", (req, res) => {
  console.log("room wali api ko call aagayi");
  // Query to fetch appointment data from the appointment table
  const sql = "select * from room;";

  // Use the connection pool to execute the query
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results); // Send the appointment data as JSON to the frontend
    }
  });
});

module.exports = router;
