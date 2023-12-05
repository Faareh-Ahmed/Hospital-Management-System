// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPage from '../src/pages/LandingPage';
import LoginPage from '../src/pages/LoginPage'; // Import the Login component
import DomainPage from '../src/pages/DomainPage';
import DoctorPage from './pages/DoctorPage';
import AdminPage from './pages/AdminPage';
import EmployeePage from './pages/EmployeePage';
import PateintPage from './pages/PateintPage';
import Add_Appointment from './pages/employee/Add_Appointment';
import Show_Appointment from './pages/employee/Show_Appointment';
import Show_Room from './pages/employee/Show_Room';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Add_Doctor from './pages/admin/Add_Doctor';
import Show_Staff from './pages/admin/Show_Staff';
import Show_HistoryPatient from './pages/patient/Show_HistoryPatient';
import Add_NurseAdmin from './pages/admin/Add_NurseAdmin';
import Add_EmployeeAdmin from './pages/admin/Add_EmployeeAdmin';
import All_AppointmentDoctor from './pages/doctor/All_AppointmentDoctor';
import InfoDoctor from './pages/doctor/InfoDoctor';
import UpcomingAppointment from './pages/doctor/UpcomingAppointmentDoctor';
import UpcomingAppointmentDoctor from './pages/doctor/UpcomingAppointmentDoctor';
import HistoryDoctor from './pages/doctor/HistoryDoctor';
import UpcomingAppointmentPatient from './pages/patient/UpcomingAppointmentPatient';
import DoctorAssignedPatient from './pages/patient/DoctorAssignedPatient';
import InfoPatient from './pages/patient/InfoPatient';
import InfoEmployee from './pages/employee/InfoEmployee';
import ShowDoctorsEmployee from './pages/employee/ShowDoctorsEmployee';
import InfoAdmin from './pages/admin/InfoAdmin';
import AddRoomAdmin from './pages/admin/AddRoomAdmin';
import HistoryAdmin from './pages/admin/HistoryAdmin';
import LoginAdmin from './components/LoginAdmin';
import LoginPatient from './components/LoginPatient';
import LoginDoctor from './components/LoginDoctor';
import LoginReceptionist from './components/LoginStaff';
import LoginNurse from './components/LoginNurse';
import InfoNurse from './pages/nurse/InfoNurse';
import AssignedRoomNurse from './pages/nurse/AssignedRoomNurse';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login', // Define a new route for the Login page
    element: <LoginPage/>,
  },
  {
    path: '/domain', // Define a new route for the Login page
    element: <DomainPage/>,
  },
  {
    path: '/doctor', // Define a new route for the Login page
    element: <LoginDoctor/>,
  },
  {
    path: '/admin', // Define a new route for the Login page
    element: <LoginAdmin/>,
  },
  {
    path: '/employee', // Define a new route for the Login page
    element: <LoginReceptionist/>,
  },
  {
    path: '/patient', // Define a new route for the Login page
    element: <LoginPatient/>,
  },
  {
    path: '/employee/add-appointment', // Define a new route for the Login page
    element: <Add_Appointment/>,
  },
  {
    path: '/employee/show-appointment', // Define a new route for the Login page
    element: <Show_Appointment/>,
  },
  {
    path: '/employee/show-room', // Define a new route for the Login page
    element: <Show_Room/>,
  },
  {
    path: '/employee/info', // Define a new route for the Login page
    element: <InfoEmployee/>,
  },
  {
    path: '/employee/available-doctor', // Define a new route for the Login page
    element: <ShowDoctorsEmployee/>,
  },
  {
    path: '/admin/add-doctor', // Define a new route for the Login page
    element: <Add_Doctor/>,
  },
  {
    path: '/admin/show-staff', // Define a new route for the Login page
    element: <Show_Staff/>,
  },
  {
    path: '/admin/info', // Define a new route for the Login page
    element: <InfoAdmin/>,
  },
  {
    path: '/admin/add-room', // Define a new route for the Login page
    element: <AddRoomAdmin/>,
  },
  {
    path: '/admin/history', // Define a new route for the Login page
    element: <HistoryAdmin/>,
  },
  {
    path: '/doctor/all-appointment', // Define a new route for the Login page
    element: <All_AppointmentDoctor/>,
  },
  {
    path: '/patient/show-history', // Define a new route for the Login page
    element: <Show_HistoryPatient/>,
  },
  {
    path: '/patient/upcoming-appointment', // Define a new route for the Login page
    element: <UpcomingAppointmentPatient/>,
  },
  {
    path: '/patient/doctor-assigned', // Define a new route for the Login page
    element: <DoctorAssignedPatient/>,
  },
  {
    path: '/patient/info', // Define a new route for the Login page
    element: <InfoPatient/>,
  },
  {
    path: '/admin/add-nurse', // Define a new route for the Login page
    element: <Add_NurseAdmin/>,
  },
  {
    path: '/admin/add-employee', // Define a new route for the Login page
    element: <Add_EmployeeAdmin/>,
  },
  {
    path: '/doctor/info', // Define a new route for the Login page
    element: <InfoDoctor/>,
  },
  {
    path: '/doctor/upcoming-appointment', // Define a new route for the Login page
    element: <UpcomingAppointmentDoctor/>,
  },
  {
    path: '/doctor/all-appointment', // Define a new route for the Login page
    element: <UpcomingAppointment/>,
  },
  {
    path: '/doctor/history', // Define a new route for the Login page
    element: <HistoryDoctor/>,
  },
  {
    path: '/nurse', // Define a new route for the Login page
    element: <LoginNurse/>,
  },
  {
    path: '/nurse/info', // Define a new route for the Login page
    element: <InfoNurse/>,
  },
  {
    path: '/nurse/assigned-room', // Define a new route for the Login page
    element: <AssignedRoomNurse/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Route path="/*" element={<App />} />
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
