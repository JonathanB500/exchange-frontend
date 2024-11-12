// SignUpForm.tsx
import React from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';

interface SignUpFormProps {
  onSubmit: (data: any) => void;
  switchToLogin: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit, switchToLogin }) => {
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

export default SignUpForm;
