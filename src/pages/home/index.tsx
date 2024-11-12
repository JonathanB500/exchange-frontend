import { ChevronLeftOutlined } from "@mui/icons-material";
import { DialogTitle, Button, Drawer, IconButton, Box, Typography, TextField} from "@mui/material";
import React from "react";

type Props = {};

// Login Form Component
const LoginForm = ({ onSubmit, switchToSignUp }: { onSubmit: (data: any) => void, switchToSignUp: () => void }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    onSubmit({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <Box sx={{ padding: 2 }}>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Log In
      </Button>
      <Button variant="text" fullWidth onClick={() => alert('Redirect to password recovery')}>
        Forgot your password?
      </Button>
      <Typography variant="body2" textAlign="center" sx={{ marginTop: 2 }}>
        Don’t have an account?{' '}
        <Button variant="text" onClick={switchToSignUp}>
          Sign up here
        </Button>
      </Typography>
    </Box>
  );
};

// Sign-up Form Component
const SignUpForm = ({ onSubmit, switchToLogin }: { onSubmit: (data: any) => void, switchToLogin: () => void }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSignUp = () => {
    onSubmit({ name, email, password, confirmPassword });
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <Box sx={{ padding: 2 }}>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        margin="normal"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleSignUp}>
        Sign Up
      </Button>
      <Typography variant="body2" textAlign="center" sx={{ marginTop: 2 }}>
        Already have an account?{' '}
        <Button variant="text" onClick={switchToLogin}>
          Log in here
        </Button>
      </Typography>
    </Box>
  );
};

// Main Home Component
const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(true); // Toggle between login and sign-up

  // Functions to handle drawer open/close
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // Mock handlers for form submissions
  const handleLoginSubmit = (data: any) => {
    console.log('Login Data:', data);
    setOpen(false);
  };

  const handleSignUpSubmit = (data: any) => {
    console.log('Sign Up Data:', data);
    setOpen(false);
  };

  // Toggle between login and sign-up
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

      <Drawer open={open} onClose={toggleDrawer(false)}>
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

export default Home;