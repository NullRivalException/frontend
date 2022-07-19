import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(name,location,rating) {
  return {name,location,rating};
}

// let [rating, setRating] = useState(5)

const rows = [
  createData('Golden Hotel', <a href='www.google.com'>Turkei</a>, 5),
  createData('Kuanzhaixiangzi',<a href='www.google.com'>Chengdu</a>, 4),
];

export default function App() {

  return (
    <div>
    <div className="title">
    {"Hello User，this is your favourite POI list!"}
  </div>
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">location</TableCell>
            <TableCell align="right">rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div className="Comment-text">
    {"For more information,please check our"} <a href="www.google.com">webstite</a>
  </div>
  </div>
  );
}
