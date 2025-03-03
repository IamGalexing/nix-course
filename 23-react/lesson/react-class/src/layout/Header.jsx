import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import { useContext } from "react";
import { PageTitleContext, usePageTitle } from "../context/PageTitle";
import { UserContext } from "../context/User";

export function Header() {
  const titleContext = usePageTitle();
  const { isLoggedIn, login, logout } = useContext(UserContext);

  const title = titleContext.title;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' sx={{ mr: 2 }}>
            <Home />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {isLoggedIn ? (
            <Button color='inherit' onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button color='inherit' onClick={login}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
