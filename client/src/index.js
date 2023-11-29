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
import Add_Appointment from './pages/Add_Appointment';
import Show_Appointment from './pages/Show_Appointment';
import Show_Room from './pages/Show_Room';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Add_Doctor from './pages/Add_Doctor';
import Show_Staff from './pages/Show_Staff';
import Show_HistoryPatient from './pages/Show_HistoryPatient';
import Show_BillingPatient from './pages/Show_BillingPatient';
import Add_NurseAdmin from './pages/Add_NurseAdmin';
import Add_EmployeeAdmin from './pages/Add_EmployeeAdmin';
import All_AppointmentDoctor from './pages/All_AppointmentDoctor';
import InfoDoctor from './pages/InfoDoctor';
import UpcomingAppointment from './pages/UpcomingAppointmentDoctor';
import UpcomingAppointmentDoctor from './pages/UpcomingAppointmentDoctor';
import HistoryDoctor from './pages/HistoryDoctor';
import UpcomingAppointmentPatient from './pages/UpcomingAppointmentPatient';
import DoctorAssignedPatient from './pages/DoctorAssignedPatient';
import InfoPatient from './pages/InfoPatient';
import InfoEmployee from './pages/InfoEmployee';
import ShowDoctorsEmployee from './pages/ShowDoctorsEmployee';
import InfoAdmin from './pages/InfoAdmin';
import AddRoomAdmin from './pages/AddRoomAdmin';
import HistoryAdmin from './pages/HistoryAdmin';

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
    element: <DoctorPage/>,
  },
  {
    path: '/admin', // Define a new route for the Login page
    element: <AdminPage/>,
  },
  {
    path: '/employee', // Define a new route for the Login page
    element: <EmployeePage/>,
  },
  {
    path: '/patient', // Define a new route for the Login page
    element: <PateintPage/>,
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
