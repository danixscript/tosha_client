import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





export default function TablePlaceOrder(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"><img src={row.productimg} alt="" className="img maxxhh" /></TableCell>

              <TableCell align="right"><p className="pnow">{row.itemname}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.price}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.amount}</p></TableCell>
              <TableCell align="right"><p className="pnow">{row.protein}</p></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
