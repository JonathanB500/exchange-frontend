import React, { useState } from 'react';
import { ChevronLeftOutlined } from '@mui/icons-material';
import { DialogTitle, Button, Drawer, IconButton, Box } from '@mui/material';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const AuthDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and sign-up

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleLoginSubmit = (data: any) => {
    console.log('Login Data:', data);
    setOpen(false); // Close the drawer after login
  };

  const handleSignUpSubmit = (data: any) => {
    console.log('Sign Up Data:', data);
    setOpen(false); // Close the drawer after sign-up
  };

  const switchToSignUp = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <div>
      <Button onClick={() => { setIsLogin(true); handleDrawerOpen(); }}>
        Open Login
      </Button>
      <Button onClick={() => { setIsLogin(false); handleDrawerOpen(); }}>
        Open Sign Up
      </Button>

      <Drawer open={open} onClose={handleDrawerClose}>
        <Box sx={{ width: 300 }}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftOutlined />
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
