import React, { useContext } from "react";
import { useAuth } from "./auth/context/AuthContext";
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../App';

export const Header = ({ title }) => {
  const navigate = useNavigate();
  const { currentUser, logOut } = useAuth();
  async function signOUT() {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }
  const colorMode = useContext(ColorModeContext);
  return (
    <AppBar position="static" color="primary" sx={{ mb: 3 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {colorMode && colorMode.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        {currentUser && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ bgcolor: 'secondary.main' }}>
              {currentUser.email ? currentUser.email[0].toUpperCase() : '?'}
            </Avatar>
            <Typography variant="body1">{currentUser.email}</Typography>
            <Button color="inherit" onClick={signOUT} variant="outlined">Log Out</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
