import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
  const currentUser = useAuth();

  return (
    <Routes>
      <Route {...rest} element={currentUser ? children : <Navigate to="/login" />} />
    </Routes>
  );
};

export default PrivateRoute;
