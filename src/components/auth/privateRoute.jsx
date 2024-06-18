import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const PrivateRoute=({component: Component, ...rest})=>{
const currentUser = useAuth();

return(
    <Routes>
    <Route {...rest} render={props => {
        currentUser ? <Component {...props} /> : <Navigate to="/login" />
    }} />
    </Routes>
)
}

export default PrivateRoute;
