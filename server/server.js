const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const patientRoute = require("./routes/Patient");
app.use('/patient', patientRoute);


const doctorRoute = require("./routes/Doctor");
app.use('/doctor',doctorRoute);


const adminRoute = require("./routes/Admin");
app.use('/admin',adminRoute);


const receptionistRoute = require("./routes/Receptionist");
app.use('/receptionist',receptionistRoute);


const nurseRoute = require("./routes/Nurse");
app.use('/nurse',nurseRoute);


try {
  app.listen(5000, () => {
    console.log("Server started on port 5000");
  });
} catch (error) {
  console.error("Error starting the server:", error);
}
