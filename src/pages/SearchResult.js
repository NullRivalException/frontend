import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";

/* eslint-disable no-unused-expressions */

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

function bullAuto(props) {
  const colour = "red";

  if (props.price <= 500) {
    colour = "green";
  } else {
    if (props.price <= 800) {
      colour = "yellow";
    }

    return colour;
  }

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

  function getDateTime(props) {}

  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(1.8)",
      color: colour,
    }}
  >
    ◍
  </Box>;
}

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        Some Text
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

function priceColour(props) {
  const colour = "purple";

  if (props.price <= 800) {
    colour = "green";
  } else {
    if (props.price <= 900) {
      colour = "orange";
    } else {
      colour = "red";
    }
  }

  return (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        mx: "2px",
        transform: "scale(1.8)",
        color: colour,
      }}
    >
      ◍
    </Box>
  );
}

export default function SerchResult() {
  let [destination, setDestination] = useState("Johannesburg");
  let [departure, setDeparture] = useState("Munich");
  let [currency, setCurrency] = useState("€");
  let [departureDate, setDepartureDate] = useState("2022-06-30T20:00");
  let [username, setUserName] = useState("ruan.viljoen@tum.de");

  function createData(
    departure,
    destination,
    departureTime,
    arrivalTime,
    price
  ) {
    return { departure, destination, departureTime, arrivalTime, price };
  }

  const bull = (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        mx: "2px",
        transform: "scale(1.8)",
        color: "green",
      }}
    >
      ◍
    </Box>
  );

  const flightText = departure + " to " + destination;
  const rows = [
    createData(departure, destination, "20:00", "06:00", currency + 500),
    createData(departure, destination, "23:00", "09:00", currency + 1000),
    createData(departure, destination, "14:10", "05:10", currency + 700),
    createData(departure, destination, "15:50", "07:00", currency + 900),
    createData(departure, destination, "20:00", "14:00", currency + 800),
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
                <TableCell align="right">{row.price}</TableCell>
                <TableCell
                  align="left"
                  padding="normal"
                  style={{ width: "12%" }}
                >
                  <priceColour price={row.price}></priceColour>
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
              <AppBar position="static" color="">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 4 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 4 }}>
                    Flights
                  </Typography>
                  <Button color="inherit">Login</Button>
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
