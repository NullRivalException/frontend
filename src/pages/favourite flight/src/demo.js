import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import AirlinesIcon from '@mui/icons-material/Airlines';


function createData(flight,departure,destination,takeofftime, arrivaltime, price) {
  return {flight,departure,destination,takeofftime, arrivaltime, price};
}

const rows = [
  createData('A021', 'Munich', 'Iceland', '10:00', '12:00',300),
  createData('BB34', 'Berlin', 'Shanghai', '21:00', '23:00',970),
  createData('KF90', 'Regensburg', 'Turkei', '21:00', '23:00',70),
  createData('PP09', 'Igolstadt', 'Marta', '21:00', '23:00',23),
  createData('XYZ1', 'Munich', 'Japan', '22:00', '23:00',99),
  createData('80807', 'Munich', 'Mars', '1:00', '7:00',91),
  createData('C300', 'Hamburg', 'Herz', '10:00', '23:00',80),
  createData('B3EE', 'ISel', 'Chengdu', '10:00', '14:20',187),
  createData('KF32', 'Badenbaden', 'New Yourk', '21:00', '23:00',288),


];

export default function App() {
  return (
    <div>
    <div className="title">
    {"Hello User，this is your favourite flight list!"}
  </div>
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><img src={AirlinesIcon}/>flight</TableCell>
            <TableCell align="right"><img src={FlightTakeoffIcon}/>departure</TableCell>
            <TableCell align="right"><img src={FlightLandIcon}/>destination</TableCell>
            <TableCell align="right">takeofftime</TableCell>
            <TableCell align="right">arrivaltime</TableCell>
            <TableCell align="right">price&nbsp;(euro)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.flight}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.flight}
              </TableCell>
              <TableCell align="right">{row.departure}</TableCell>
              <TableCell align="right">{row.destination}</TableCell>
              <TableCell align="right">{row.takeofftime}</TableCell>
              <TableCell align="right">{row.arrivaltime}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div className="Comment-text">
    {"For more information,please check our website!"}
  </div>
  </div>
  );
}
