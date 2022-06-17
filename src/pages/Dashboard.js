import { Box } from "@mui/material";
import { AppBar } from "@mui/material";
import { Grid } from "@mui/material";
import { Toolbar } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import SearchBar from "../components/SearchBar";
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  let navigate = useNavigate();

  const signInFunction = () => {
    let path = 'signin';
    navigate(path);
  }

  const signUpFunction = () => {
    let path = 'signup';
    navigate(path);
  }
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
              <Typography variant="h6" component="div" sx={{ verticalAlign: "center" }}>
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
              <Button color="primary" size="large" onClick={signInFunction}>Sign in</Button>
              <Button color="primary" disableElevation variant="contained" size="large" onClick={signUpFunction}>Register</Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container justifyContent="center" direction="column" >
        <Grid item height="15vh" />
        <Container>
          <Grid item>
            <BigHeader />
          </Grid>
        </Container>
        <Grid item height="8vh" />
        <Container>
          <Grid item component="div" style={{ textAlign: "center" }}>
            <SearchBar />
          </Grid>
        </Container>
      </Grid>
    </>
  );
}

function BigHeader() {
  return <Typography variant="h3" align='center' color="primary">
    <Grid container justifyContent="center" direction="column">
      <Grid item>Search for flights from anywhere,</Grid>
      <Grid item>to anywhere, at any time!</Grid>
    </Grid>
  </Typography>
}