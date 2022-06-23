import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import React from "react";

export default function Dashboard() {
  let navigate = useNavigate();

  const signInFunction = () => {
    navigate("/signin");
  };

  const signUpFunction = () => {
    navigate("/signup");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              columnGap={1}
              alignItems="center"
            >
              <DashboardIcon />
              <Typography
                variant="h6"
                component="div"
                sx={{ verticalAlign: "center" }}
              >
                Trip Dashboard
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              columnGap={2}
              alignItems="center"
            >
              <Button color="primary" size="large" onClick={signInFunction}>
                Sign in
              </Button>
              <Button
                color="primary"
                disableElevation
                variant="contained"
                size="large"
                onClick={signUpFunction}
              >
                Sign Up
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container justifyContent="center" direction="column">
        <Grid item height="15vh" />
        <Container>
          <Grid item>
            <BigHeader />
          </Grid>
        </Container>
        <Grid item height="8vh" />
        <Container>
          <Grid item component="div" style={{ textAlign: "center" }}>
            <SearchBar navigate={navigate} />
          </Grid>
        </Container>
      </Grid>
    </>
  );
}

function BigHeader() {
  return (
    <Typography variant="h3" align="center" color="primary">
      <Grid container justifyContent="center" direction="column">
        <Grid item>Search for flights from anywhere,</Grid>
        <Grid item>to anywhere, at any time!</Grid>
      </Grid>
    </Typography>
  );
}
