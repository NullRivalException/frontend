import DashboardIcon from "@mui/icons-material/Dashboard";
import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  let navigate = useNavigate();
  const handleLogin = () => navigate("/signin");
  const handleSignUp = () => navigate("/signup");
  return (
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
            <Button color="primary" size="large" onClick={handleLogin}>
              Login
            </Button>
            <Button
              color="primary"
              disableElevation
              variant="contained"
              size="large"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
