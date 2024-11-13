import React, { useState, useEffect } from 'react';
import { AccountCircle, ChevronLeftOutlined, Close } from '@mui/icons-material';
import { DialogTitle, Button, Drawer, IconButton, Box, Typography, Menu, MenuItem } from '@mui/material';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const AuthDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and sign-up
  const [isLoggedIn, setIsLoggedIn] = useState(false); // User session state
  const [username, setUsername] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Check user session on component mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const storedUsername = localStorage.getItem('username');
    if (token && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleLoginSubmit = (data: {username:string , token: string}) => {
    console.log('Login Data:', data);
    setIsLoggedIn(true);
    setUsername(data.username);
    setOpen(false); // Close the drawer after login
  };
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername(null);
    setAnchorEl(null); // Close the drawer after login
  };

  const handleSignUpSubmit = (data: any) => {
    console.log('Sign Up Data:', data);
    switchToLogin(); // Close the drawer after sign-up
  };
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const switchToSignUp = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <div>
      {!isLoggedIn ? (
        <>
      <Button sx={{ color: "#fff"  }} onClick={() => { setIsLogin(true); handleDrawerOpen(); }}>
        Login
      </Button>
      <Button sx={{ color: "#fff" }} onClick={() => { setIsLogin(false); handleDrawerOpen(); }}>
        Sign Up
      </Button>
      </>
    ) : (
      <>
        <IconButton sx={{ color: '#fff' }} onClick={handleMenuClick}>
          <AccountCircle />
        </IconButton>
        <Typography variant="body1" sx={{ color: '#fff', display: 'inline', marginLeft: '10px' }}>
          {username}
        </Typography>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </>
    )}
      <Drawer open={open} onClose={handleDrawerClose} anchor='right'>
        <Box sx={{ width: 300 }}>
          <IconButton onClick={handleDrawerClose}>
            <Close/>
          </IconButton>
          <DialogTitle>{isLogin ? 'Login' : 'Sign Up'}</DialogTitle>
          {isLogin ? (
            <LoginForm onSubmit={handleLoginSubmit} switchToSignUp={switchToSignUp} />
          ) : (
            <SignUpForm onSubmit={handleSignUpSubmit} switchToLogin={switchToLogin} />
          )}
        </Box>
      </Drawer>
    </div>
  );
};

export default AuthDrawer;
