
import React, { useMemo, useState, createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/auth/context/AuthContext";
import SignUp from "./components/auth/signUp";
import Login from "./components/auth/Login";
import MainSite from "./components/mainSite";
import Charts from "./components/chart_example";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = () => {
    const [mode, setMode] = useState('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        []
    );
    const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
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
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default App;