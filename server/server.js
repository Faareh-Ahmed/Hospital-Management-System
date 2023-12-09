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
      return res
        .status(200)
        .json({ message: "Authentication Successful", userInfo });
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
      return res
        .status(200)
        .json({ message: "Authentication Successful", userInfo });
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

app.post("/nurse/login", (req, res) => {
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

app.post("/admin/add-doctor", (req, res) => {
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

app.post("/admin/add-receptionist", (req, res) => {
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

app.post("/admin/add-nurse", (req, res) => {
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

app.post("/admin/add-clinicalroom", (req, res) => {
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

app.post("/admin/add-admitroom", (req, res) => {
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

app.post("/receptionist/add-appointment", (req, res) => {
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
                "INSERT INTO appointment (idPatient, idDoctor, AppointmentDate, Status) VALUES (?, ?, ?,?)",
                [patientId, doctorID, date, "Due"],
                (err, appointmentResult) => {
                  if (err) {
                    console.log("Error inserting appointment data:", err);
                    return res
                      .status(500)
                      .json({ error: "Error inserting appointment data" });
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

app.get("/admin/show-doctors", (req, res) => {
  console.log("show doctor wali api ko call aagayi");
  // Query to fetch appointment data from the appointment table
  const sql =
    "select iddoctor,concat(LastName,' ', FirstName) as Name, Email,Salary,Shift,LicenseNumber, Specialization,Experience,ConsultationFee from user natural join staff natural join doctor";

  // Use the connection pool to execute the query
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results); // Send the appointment data as JSON to the frontend
    }
  });
});

app.get("/receptionist/show-doctors", (req, res) => {
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


app.get("/receptionist/show-appointments", (req, res) => {
  // Query to fetch appointment data from the appointment table
  const sql =
    `SELECT
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


app.get("/receptionist/show-patients", (req, res) => {
  console.log("Patient wali api ko call aagayi");
  // Query to fetch appointment data from the appointment table
  // Query to fetch appointment data from the appointment table
  const sql =
    `select idPatient, concat(FirstName, ' ', LastName) as Name, Age, BloodGroup, Disease, BMI, Address,Email,ContactNumber from patient natural join user
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


app.get("/admin/show-nurses", (req, res) => {
  // Query to fetch appointment data from the appointment table
  const sql =
    "select idnurse,concat(LastName,' ', FirstName) as Name, Email,Salary,Shift,Responsibilities, Specialization,Experience from user natural join staff natural join nurse";

  // Use the connection pool to execute the query
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results); // Send the appointment data as JSON to the frontend
    }
  });
});

app.get("/admin/show-receptionist", (req, res) => {
  const sql =
    "select idreceptionist,concat(LastName,' ', FirstName) as Name, Email,Salary,Shift,CNIC,CertificateNumber from user natural join staff natural join receptionist";
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results); // Send the appointment data as JSON to the frontend
    }
  });
});

app.get("/admin/show-clinicalroom", (req, res) => {
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

app.get("/admin/show-admitroom", (req, res) => {
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

app.get("/receptionist/show-room", (req, res) => {
  console.log("room wali api ko call aagayi")
  // Query to fetch appointment data from the appointment table
  const sql =
    "select * from room;";

  // Use the connection pool to execute the query
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results); // Send the appointment data as JSON to the frontend
    }
  });
});

app.get("/admin/show-history", (req, res) => {
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

app.post("/nurse/show-room", (req, res) => {
  // Query to fetch appointment data from the appointment table
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

app.post("/doctor/show-appointments", (req, res) => {
  // Query to fetch appointment data from the appointment table
  console.log(req.body);
  const idDoctor = req.body.idDoctor;

  // Use the connection pool to execute the query
  db.query(
    "select idAppointment, idPatient, concat(FirstName, ' ', LastName) as PatientName, gender, ContactNumber, Age, BMI, Address, date_format(AppointmentDate, '%d-%m-%Y') as AppointmentDate, Status  from appointment natural join patient natural join user where idDoctor = 3;",
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

function generateRandomUsername() {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let randomUsername = "";

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomUsername += characters.charAt(randomIndex);
  }

  return randomUsername;
}

function generateRandomPassword() {
  const randomPassword = Math.floor(100000 + Math.random() * 900000);
  return randomPassword.toString();
}

try {
  app.listen(5000, () => {
    console.log("Server started on port 5000");
  });
} catch (error) {
  console.error("Error starting the server:", error);
}
