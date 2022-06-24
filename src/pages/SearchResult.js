import MenuIcon from "@mui/icons-material/Menu";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";

/* eslint-disable no-unused-expressions */

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

  function saveFavouriteFlight(props) {
    /**execute query:
     * INSERT INTO tblFavouriteFlights (username, flightid)
       VALUES (username, props.flightId)
     */
  }

  function removeFavouriteFlight(props) {
    /**execute query:
     * DELETE FROM tblFavouriteFlights
     * WHERE username = username
     * AND flightId = props.flightId
     *
     */
  }

  function getDateTime(props) {
    /**Substring of DateTime to display only time
     * 
     */
  }


export default function SerchResult(props) {
  let navigate = useNavigate();
  let [destination, setDestination] = useState("Johannesburg");
  let [departure, setDeparture] = useState("Munich");
  let [currency, setCurrency] = useState("€");
  let [departureDateTime, setDepartureDateTime] = useState("2022-06-30T20:00");
  let [username, setUserName] = useState("ruan.viljoen@tum.de");

  const signInFunction = () => {
    navigate("/signin");
  };
  
  const signUpFunction = () => {
    navigate("/signup");
  };
  
  function createData(
    departure,
    destination,
    departureTime,
    arrivalTime,
    price
  ) {
    return { departure, destination, departureTime, arrivalTime, price };
  }

  function PriceColour(props) {
    
    var colour = "grey"
    console.log(props.price);

    if(props.price <= 600) {
      colour = "green"
    }
    else {
      if(props.price <= 900) {
        colour = "orange"
      }
      else {
        colour = "red"
      }
    }
  return ( 
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1.8)', color: colour }}
  >
    ◍
  </Box>
);}

  const flightText = departure + " to " + destination;
  const rows = [
    createData(departure, destination, "20:00", "06:00", 500),
    createData(departure, destination, "23:00", "09:00", 1000),
    createData(departure, destination, "14:10", "05:10", 700),
    createData(departure, destination, "15:50", "07:00", 900),
    createData(departure, destination, "20:00", "14:00", 800),
  ];

  function BasicTable() {

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            {
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">From</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">To</TableCell>
                <TableCell align="right">Departing</TableCell>
                <TableCell align="right">Arriving</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            }
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  padding="normal"
                  align="right"
                  style={{ width: "12%" }}
                >
                  {
                    <IconButton>
                      <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                      />
                      <Icon color="secondary">favorite_border</Icon>
                    </IconButton>
                  }
                </TableCell>
                <TableCell
                  align="right"
                  padding="normal"
                  style={{ width: "5%" }}
                >
                  {
                    <IconButton>
                      <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                      />
                      <Icon color="primary">info</Icon>
                    </IconButton>
                  }
                </TableCell>
                <TableCell
                  align="right"
                  padding="normal"
                  style={{ width: "10%" }}
                >
                  {row.departure}
                </TableCell>
                <TableCell
                  align="right"
                  padding="normal"
                  style={{ width: "0%" }}
                >
                  -
                </TableCell>
                <TableCell
                  align="right"
                  padding="normal"
                  style={{ width: "10%" }}
                >
                  {row.destination}
                </TableCell>
                <TableCell
                  align="right"
                  padding="normal"
                  style={{ width: "0%" }}
                >
                  {row.departureTime}
                </TableCell>
                <TableCell align="right">{row.arrivalTime}</TableCell>
                <TableCell align="right"> {currency}{row.price}</TableCell>
                <TableCell
                  align="left"
                  padding="normal"
                  style={{ width: "12%" }}
                >
                  <PriceColour price={row.price}></PriceColour>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <header>
        <Box sx={{ width: "100%" }}>
          <Stack spacing={4}>
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

            <div className="row">
              <BasicTable></BasicTable>
            </div>
          </Stack>
        </Box>
      </header>
    </div>
  );
}
