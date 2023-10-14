import React from "react";
import { AppBar, Toolbar, Typography, Button, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const styles = {
  link: {
    textDecoration: "none",
    color: "#fff",
  },
};

function Header(props) {
  const { user, logoutUser } = props;
  const { isLoggedIn, user: curUser } = user;
  const { firstName, lastName } = curUser;

  let initials = "";
  if (firstName) initials += firstName[0].toUpperCase();
  if (lastName) initials += lastName[0].toUpperCase();

  if (!initials) initials = "X";

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={styles.link}>
            BrainTag
          </Link>
        </Typography>
        <Link to="/models" style={styles.link}>
          <Button color="inherit">Models</Button>
        </Link>
        {!isLoggedIn && (
          <Link to="/signin" style={styles.link}>
            <Button color="inherit">Signin</Button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup" style={styles.link}>
            <Button color="inherit">Signup</Button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/" style={styles.link}>
            <Button color="inherit" onClick={logoutUser}>
              Logout
            </Button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/user" style={styles.link}>
            <Avatar sx={{ color: "#000", bgcolor: "#fff" }}>{initials} </Avatar>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
