import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const LoginDialog = ({ open, onClose, onSubmit }) => {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (field) => (event) => {
    setValues({ ...values, [field]: event.target.value });
  };

  const handleSubmit = () => {
    onSubmit(values.email, values.password);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter your email and password:</DialogContentText>
        <TextField
          value={values.email}
          onChange={handleChange("email")}
          autoFocus
          label='Email address'
          margin='dense'
          fullWidth
          required
          type='email'
          id='email'
        />
        <TextField
          value={values.password}
          onChange={handleChange("password")}
          label='Passowrd'
          margin='dense'
          fullWidth
          required
          type='password'
          id='password'
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='secondary'>
          Close
        </Button>
        <Button onClick={handleSubmit}>Login</Button>
      </DialogActions>
    </Dialog>
  );
};
