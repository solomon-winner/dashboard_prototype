import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Layout from "./components/templates/mainLayout.js";
import Testimonies from './pages/testimonies.jsx';
import FirstWindow from './pages/firstWindow.jsx';
import Subscribers from './pages/subscribers.jsx';
import Song from './pages/songs.jsx';
import Information from './pages/information.jsx';
import Settings from './pages/settings.jsx';
import Posts from './pages/post.jsx';
import Login from './pages/login.jsx'; // Import your login component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children ? children : <Outlet />;
  };

  return (
    <div className="border border-red-100">
      <ToastContainer position="top-right" autoClose={5000} />
      <Router>
        <Routes>
          {/* Login Route */}
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Layout setIsAuthenticated={setIsAuthenticated} />}>
              <Route index element={<FirstWindow />} />
              <Route path='testimonies' element={<Testimonies />} />
              <Route path='subscribers' element={<Subscribers />} />
              <Route path='songs' element={<Song />} />
              <Route path='information' element={<Information />} />
              <Route path='posts' element={<Posts />} />
              <Route path='settings' element={<Settings />} />
            </Route>
          </Route>

          {/* Redirect to login for any unknown routes */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;