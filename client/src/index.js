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

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

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
