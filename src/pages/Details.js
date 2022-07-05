import imagey from "../assets/image.jpeg";
import Weather from "../assets/a.png";
import Map from "../assets/map.png";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useState } from "react";

export default function Details() {
  let [name, setName] = useState("BrandeburgTor");
  let [rating, setRating] = useState("4/5");

  function createData(name, rating) {
    return { name, rating };
  }

  const rows = [
    createData(name, rating),
    createData(name, rating),
    createData(name, rating),
    createData(name, rating),
    createData(name, rating),
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
                <TableCell align="right"></TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">Rating</TableCell>
                <TableCell align="right"></TableCell>
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
                  style={{ width: "10%" }}
                ></TableCell>
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
                  style={{ width: "0%" }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  align="right"
                  padding="normal"
                  style={{ width: "10%" }}
                ></TableCell>
                <TableCell
                  align="right"
                  padding="normal"
                  style={{ width: "0%" }}
                ></TableCell>

                <TableCell align="right">{row.rating}</TableCell>
                <TableCell
                  align="left"
                  padding="normal"
                  style={{ width: "12%" }}
                ></TableCell>
                <TableCell
                  align="right"
                  padding="normal"
                  style={{ width: "0%" }}
                ></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <div className="Destination City">
      <header className="Destination City">
        <h1 style={{ textAlign: "center" }}>Destination City (BERLIN)</h1>
        <Paper
          color="default"
          variant="outlined"
          sx={{ padding: "2em", borderRadius: 2, display: "inline-block" }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            columnGap={1}
          >
            <img src={imagey} height={500} width={1300} />
            <h2>WHY GO TO BERLIN!!!</h2>
            <p>
              {" "}
              Tourists,Talents,Technology and Tolerance shape the rhythms of the
              city which is dynamic and welcoming ,tolerant and trendy,diverse
              and creative.A US magazine called Berlin “the place to be” and
              encapsulated the thing that fascinates both Berliners and
              visitors. No other city has such a moving history, no other city
              has changed this fast – and reinvents itself constantly.But
              exactly what is it that actually makes Berlin so attractive? It is
              the diversity, the contrasts and the sheer inexhaustible potential
              of this capital city to consistently fire the enthusiasm of its
              visitors from all over the world. People are excited by the
              mixture of history and Zeitgeist, the broad spectrum of art,
              culture, music, entertainment and shopping facilities.On average,
              500.000 guests visit Berlin each day. Half of them come to the
              German capital for a second or third time. And many who come as
              tourists think about moving here. Berlin has a magnetism over
              young, creative, well-trained, and productive people.visitBerlin
              launched the app „Going Local Berlin,“ especially for those Berlin
              visitors who come to the city yet again. For the first time in an
              app, all twelve Berlin districts and their unique highlights are
              the focus. The free app offers visitors tips for orientating
              themselves in the city’s many diverse neighbourhoods, together
              with tips for discovering new aspects of Berlin. Initially, 60
              neighbourhoods with more than 600 tips are presented. They were
              personally selected by visitBerlin staff and in cooperation with
              the districts themselves. In addition, the app offers a tour of
              each district that’s also available as a video and gives insight
              into the atmosphere and the highlights of that part of the city.
              The tips are organized into categories such as “Must See”, “Hidden
              Places” and “Eating and Drinking”.
            </p>
          </Grid>
        </Paper>

        <Paper elevation={0}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            columnGap={5}
          >
            <div></div>
            <Typography variant="h6" gutterBottom component="div">
              MAP
            </Typography>

            <div></div>
            <div></div>
            <div></div>
            <div></div>

            <Typography variant="h6" gutterBottom component="div">
              WEATHER
            </Typography>
            <div></div>
            <div></div>
          </Grid>
        </Paper>

        <Paper
          elevation={0}
          sx={{ padding: "1em", borderRadius: 1, display: "inline-block" }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            columnGap={13}
          >
            <img src={Map} height={350} width={600} />

            <img
              src={Weather}
              height={350}
              width={600}
              style={{
                justifyContent: "right",
                alignItems: "right",
              }}
            />
          </Grid>
        </Paper>

        <Paper elevation={0}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            columnGap={8}
          >
            <div></div>

            <h2>POI</h2>

            <div></div>
            <div></div>
          </Grid>
        </Paper>

        <Paper
          elevation={0}
          sx={{ padding: "1em", borderRadius: 2, display: "inline-block" }}
        >
          <div className="row">
            <BasicTable></BasicTable>
          </div>
        </Paper>
      </header>
    </div>
  );
}
