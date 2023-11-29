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
import Show_AppointmentDoctor from './pages/Show_AppointmentDoctor';
import Show_HistoryPatient from './pages/Show_HistoryPatient';
import Show_BillingPatient from './pages/Show_BillingPatient';

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
    path: '/admin/add-doctor', // Define a new route for the Login page
    element: <Add_Doctor/>,
  },
  {
    path: '/admin/show-staff', // Define a new route for the Login page
    element: <Show_Staff/>,
  },
  {
    path: '/doctor/show-appointment', // Define a new route for the Login page
    element: <Show_AppointmentDoctor/>,
  },
  {
    path: '/patient/show-history', // Define a new route for the Login page
    element: <Show_HistoryPatient/>,
  },
  {
    path: '/patient/show-billing', // Define a new route for the Login page
    element: <Show_BillingPatient/>,
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
