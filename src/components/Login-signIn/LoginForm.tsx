// LoginForm.tsx
import React from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';

interface LoginFormProps {
  onSubmit: (data: any) => void;
  switchToSignUp: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, switchToSignUp }) => {
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

export default LoginForm;
