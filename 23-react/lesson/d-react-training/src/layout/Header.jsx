import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {Home} from "@mui/icons-material";
import {usePageTitle} from "../context/PageTitle.jsx";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout, openLoginDialog} from "../features/user/userSlice.js";


export function Header() {
    const titleContext = usePageTitle();
    const navigate = useNavigate();

    const title = titleContext.title;

    const handleHome = () => {
        navigate('/product-list')
    }

    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(openLoginDialog())
    }
    const handleLogout = () => {
        dispatch(logout())
    }


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{mr: 2}}
                        onClick={handleHome}
                    >
                        <Home/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {title}
                    </Typography>
                    {isLoggedIn ? (
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    ) : (
                        <Button color="inherit" onClick={handleLogin}>Login</Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    )
}
