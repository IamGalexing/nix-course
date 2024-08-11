import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {closeLoginDialog, login, selectIsLoginDialogOpen} from "../userSlice.js";



export const LoginDialog = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const dispatch = useDispatch();
    const open = useSelector(selectIsLoginDialogOpen);


    const handleChange = field => event => {
        setValues({...values, [field]: event.target.value})
    }

    const handleSubmit = () => {
        const payload = {
            password: values.password
        }

        dispatch(login(payload))
    }

    const handleClose = () => {
        dispatch(closeLoginDialog())
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <DialogContentText>Enter you email and password</DialogContentText>
                <TextField
                    value={values.email}
                    onChange={handleChange("email")}
                    autoFocus
                    label="Email Address"
                    margin="dense"
                    fullWidth
                    required
                    type="email"
                    id="email"
                />
                <TextField
                    value={values.password}
                    onChange={handleChange("password")}
                    label="Password"
                    margin="dense"
                    fullWidth
                    required
                    type="password"
                    id="password"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">Close</Button>
                <Button onClick={handleSubmit}>Login</Button>
            </DialogActions>
        </Dialog>
    )
}
