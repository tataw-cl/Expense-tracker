import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/auth/context/AuthContext";
import SignUp from "./components/auth/signUp";
import Login from "./components/auth/Login";
import MainSite from "./components/mainSite";
import PrivateRoute from "./components/auth/privateRoute";

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/*" element={<PrivateRoute component={MainSite} />} />
                    {/* <Route path="/Homepage" element={<MainSite />} /> */}
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login/>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default App;