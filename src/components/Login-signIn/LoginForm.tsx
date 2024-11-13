import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

type LoginFormProps = {
  onSubmit: (data: {username:string , token: string}) => void;
  switchToSignUp: () => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, switchToSignUp}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
        username,
        password,
      });
      const { token, username: user } = response.data;
      // Save the token in localStorage or sessionStorage
      localStorage.setItem('authToken', token);
      localStorage.setItem('username', user);
      alert('Login successful!');
      onSubmit({
        token: token,
        username: user
      }); // To close the drawer after successful login
    } catch (error) {
      if (error instanceof Error) {
        alert('Error during login: Incorrect username or password' );
      } else {
        alert('An unknown error occurred');
      }
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <TextField
        label="Username"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
      <Typography variant="body2" textAlign="center" sx={{ marginTop: 2 }}>
        Don’t have an account?{' '}
        <Button variant="text" onClick={switchToSignUp}>
          Sign up here
        </Button>
      </Typography>
    </Box>
  );
};

export default LoginForm;