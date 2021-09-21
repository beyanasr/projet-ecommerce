import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./../JS/actions/user";
import { useHistory } from "react-router-dom";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" >
          GoTunisia
          </Typography>
       
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
            
              onClose={handleClose}
            ></Menu>
            <MenuItem onClick={handleClose}>
              <Link className="Link" to="/">
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className="Link" to="/Blog">
                Blog
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {" "}
              <Link className="Link" to="/ContactUs">
                ContactUs
              </Link>
            </MenuItem>
         
         
          {isAuth ? (
            <  >
              
              <Button color="inherit" onClick={handleClick} className={classes.title}>
                {user && user.name}
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.title}
              >
                <MenuItem onClick={handleClose}>
                  <Link className="Link" to={`/profile/${user._id}`}>
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  {" "}
                  <Link
                    className="Link"
                    to="/"
                    onClick={() => {
                      dispatch(logout());
                      history.push("/");
                    }}
                  >
                    logout
                  </Link>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Link className="Link" to="/signup">
              Signin
            </Link>
          )}
          {user && user.isAdmin ? (
            <Link className="Link" to="/adminprofile">
              Admin profile
            </Link>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
