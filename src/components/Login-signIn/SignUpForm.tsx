import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

type SignUpFormProps = {
  onSubmit: (data: any) => void;
  switchToLogin: () => void;
};

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit, switchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/signup/', {
        username: name,
        email,
        password,
      });
      alert('User created successfully!');
      onSubmit(response.data); // Close the drawer after success
    } catch (error) {
      if (error instanceof Error) {
        alert('Error during sign up: ' + error.message);
      } else {
        alert('An unknown error occurred');
      }
    }
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

export default SignUpForm;
