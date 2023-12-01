use hospital;

CREATE TABLE IF NOT EXISTS credentials (
    idCredentials INT AUTO_INCREMENT PRIMARY KEY,
    Password VARCHAR(50),
    UserName VARCHAR(50),
    RegistrationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user (
    idUser INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(50),
    ContactNumber VARCHAR(50),
    Role ENUM('Admin', 'Patient', 'Doctor', 'Staff'),
    idCredentials INT,
    FOREIGN KEY (idCredentials) REFERENCES credentials(idCredentials)
);

CREATE TABLE IF NOT EXISTS admin (
    idAdmin INT AUTO_INCREMENT PRIMARY KEY,
    idUser INT,
    CNIC VARCHAR(50),
    CertificateNumber VARCHAR(50),
    FOREIGN KEY (idUser)
        REFERENCES user (idUser)
);
CREATE TABLE IF NOT EXISTS patient (
    idPatient INT AUTO_INCREMENT PRIMARY KEY,
    idUser INT,
    Age INT,
    Gender ENUM('Male', 'Female', 'Prefer not Say'),
    BloodGroup ENUM('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'),
    Disease VARCHAR(50),
    Height FLOAT,
    BMI FLOAT,
    Weight FLOAT,
    FOREIGN KEY (idUser)
        REFERENCES user (idUser)
);
CREATE TABLE IF NOT EXISTS staff (
    idStaff INT AUTO_INCREMENT PRIMARY KEY,
    idUser INT,
    Salary FLOAT,
    StaffType ENUM('Receptionist', 'Nurse', 'Doctor'),
    Shift ENUM('Morning', 'Evening'),
    FOREIGN KEY (idUser)
        REFERENCES user (idUser)
);

CREATE TABLE IF NOT EXISTS nurse (
    idNurse INT AUTO_INCREMENT PRIMARY KEY,
    idStaff INT,
    Responsibilities VARCHAR(50),
    Specialization VARCHAR(50),
    Experience INT,
    FOREIGN KEY (idStaff)
        REFERENCES staff (idStaff)
);

CREATE TABLE IF NOT EXISTS receptionist (
    idReceptionist INT AUTO_INCREMENT PRIMARY KEY,
    idStaff INT,
    CNIC VARCHAR(50),
    CertificateNumber VARCHAR(50),
    FOREIGN KEY (idStaff)
        REFERENCES staff (idStaff)
);


CREATE TABLE IF NOT EXISTS department (
	idDepartment INT AUTO_INCREMENT PRIMARY KEY,
    DeptName VARCHAR(50),
    Speciality VARCHAR(50),
    `Contact Information` VARCHAR(50),
    DepartmentDescription VARCHAR(50),
    NameHoD VARCHAR(50)
);



CREATE TABLE IF NOT EXISTS room (
    idRoom INT AUTO_INCREMENT PRIMARY KEY,
    RoomType ENUM('AdmitRoom', 'ClinicalRoom'),
    Floor INT,
    Availability ENUM('Available', 'Not Available'),
    Capacity INT
);

CREATE TABLE IF NOT EXISTS admitroom (
	idAdmitRoom INT AUTO_INCREMENT,
    idRoom INT,
    idNurse INT,
    AdmitDate date,
    DischargeDate date,
    PricePerDay INT,
    PRIMARY KEY (idAdmitRoom, idRoom),
    FOREIGN KEY (idNurse) REFERENCES nurse(idNurse),
    FOREIGN KEY(idRoom) REFERENCES room(idRoom)
);

CREATE TABLE IF NOT EXISTS clinicalroom (
	idClinicalRoom INT AUTO_INCREMENT,
    idRoom INT,
    Speciality VARCHAR(50),
    Equipment VARCHAR(50),
    PRIMARY KEY (idClinicalRoom, idRoom),
    FOREIGN KEY(idRoom) REFERENCES room(idRoom)
);
CREATE TABLE IF NOT EXISTS doctor (
    idDoctor INT AUTO_INCREMENT PRIMARY KEY,
    idStaff INT,
    idDepartment INT,
    idClinicalRoom INT,
    LicenseNumber VARCHAR(50),
    Specialization VARCHAR(50),
    Experience INT,
    ConsultationFee INT,
    FOREIGN KEY (idDepartment)
                REFERENCES department(idDepartment),
    FOREIGN KEY (idStaff)
        REFERENCES staff (idStaff),
    FOREIGN key(idClinicalRoom)
      REFERENCES clinicalroom(idClinicalRoom)
);


CREATE TABLE IF NOT EXISTS `billing` (
  idBilling INT AUTO_INCREMENT PRIMARY KEY,
  idPatient INT,
  PaymentMethod VARCHAR(50),
  Amount INT,
  BankID VARCHAR(50),
  BillStatus ENUM('Paid', 'Pending'),
  FOREIGN KEY (idPatient) REFERENCES patient(idPatient)
);

CREATE TABLE IF NOT EXISTS `admitpatient`(
  idAdmitPatient INT AUTO_INCREMENT,
  idPatient INT,
  idAdmitRoom INT,
  AdmissionReason VARCHAR(50),
  PRIMARY KEY(idAdmitPatient, idPatient),
  FOREIGN KEY(idAdmitRoom) REFERENCES admitroom(idAdmitRoom),
  FOREIGN KEY(idPatient) REFERENCES patient(idPatient)
);

CREATE TABLE IF NOT EXISTS `clinicalpatient`(
  idClinicalPatient INT AUTO_INCREMENT,
  idPatient INT,
  PRIMARY KEY(idClinicalPatient, idPatient),
  FOREIGN KEY (idPatient) REFERENCES patient(idPatient)
);

CREATE TABLE IF NOT EXISTS `visits`(
  idVisit INT AUTO_INCREMENT PRIMARY KEY,
  idPatient INT,
  idDoctor INT,
  VisitType VARCHAR(50),
  Symptoms VARCHAR(50),
  Prescriptions VARCHAR(50),
  VisitDate date,
  FOREIGN KEY (idPatient) REFERENCES patient(idPatient),
  FOREIGN KEY (idDoctor) REFERENCES doctor(idDoctor)

);

CREATE TABLE IF NOT EXISTS `appointment`(
  idAppointment INT AUTO_INCREMENT PRIMARY KEY,
  idPatient INT,
  idDoctor INT,
  AppointmentDate Date,
  Status ENUM ('Due', 'Done'),
    FOREIGN KEY (idPatient) REFERENCES patient(idPatient),
  FOREIGN KEY (idDoctor) REFERENCES doctor(idDoctor)

);

CREATE TABLE IF NOT EXISTS `patient_doctor`(
  idDoctor INT,
  idPatient INT,
  PRIMARY KEY(idDoctor, idPatient),
    FOREIGN KEY (idPatient) REFERENCES patient(idPatient),
  FOREIGN KEY (idDoctor) REFERENCES doctor(idDoctor)

)