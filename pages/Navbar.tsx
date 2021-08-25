import React, { SyntheticEvent, useEffect, useState } from "react";
import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  makeStyles,
  Modal,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import RoomIcon from "@material-ui/icons/Room";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import axiosFetch from "../services/axios";
import { User } from "../models/User";
import useStyles from "../styles/UseStyles";

function Navbar() {
  useEffect(() => {
    return () => {};
  }, []);
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };

  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [token, setToken] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const logout = (event: React.MouseEvent) => {
    event.preventDefault();
    setToken(!token);
  };
  const login = (event: React.MouseEvent) => {
    event.preventDefault();

    axiosFetch(user)
      .then((result) => {
        setToken(!token);
        openModal();
      })
      .catch(console.log);
  };

  const body = (
    <div className={classes.modal}>
      <div>
        <Typography>Login</Typography>
      </div>
      <TextField
        label="Usuario"
        name="email"
        value={user.email}
        onChange={handleChange}
        className={classes.textfield}
      />
      <br />
      <br />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={user.password}
        onChange={handleChange}
        className={classes.textfield}
      />
      <br />
      <br />
      <div>
        <Button type="submit" color="primary" onClick={login}>
          Login
        </Button>
        <Button onClick={() => openModal()}>Cancelar</Button>
      </div>
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Busca lo que quieras bb"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.root}></div>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <RoomIcon />
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <NotificationsIcon />
            </IconButton>
            {token ? (
              <IconButton
                edge="end"
                aria-label="account of current user"
                color="inherit"
                onClick={logout}
              >
                <ExitToAppIcon />
              </IconButton>
            ) : (
              <IconButton
                edge="end"
                aria-label="account of current user"
                color="inherit"
                onClick={() => openModal()}
              >
                <PersonIcon />
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Modal open={modal} onClose={openModal}>
        {body}
      </Modal>
      <div className={classes.offset}></div>
    </div>
  );
}

export default Navbar;
