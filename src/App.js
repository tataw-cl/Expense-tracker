import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/auth/context/AuthContext";
import SignUp from "./components/auth/signUp";
import Login from "./components/auth/Login";
import MainSite from "./components/mainSite";
import Charts from "./components/chart_example";
// import PrivateRoute from "./components/auth/privateRoute";

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                {/* <Route path="/" element={<PrivateRoute {...MainSite}></PrivateRoute>} /> */}
                    <Route path="/" element={<MainSite />} />
                    <Route path="/Expense-tracker" element={<SignUp />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/charts" element={<Charts/>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default App;