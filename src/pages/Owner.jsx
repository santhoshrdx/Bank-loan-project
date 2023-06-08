import React, { useState } from 'react';
import { Box, Card, CardActions,Switch, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

const initialRows = [
  createData('', '', '', '', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', '', '', '', ''),
];

function createData(all, bankname, address, phoneno, repledgedate, totalweight, count, repledgeamount, interest, locker) {
  return { all, bankname, address, phoneno, repledgedate, totalweight, count, repledgeamount, interest, locker };
}

const OutlinedCard = () => {
  const [rows, setRows] = useState(initialRows);

  const handleCheckboxChange = (event, index) => {
    const updatedRows = [...rows];
    updatedRows[index].all = event.target.checked;
  
    setRows(updatedRows);
  };
 
    const [checked, setChecked] = React.useState(true);
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
 
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', border: '5px', borderColor: 'black', marginTop: '20px', borderRadius: '20px' }}>
      <Card variant="outlined" sx={{ width: '75%', borderRadius: '20px' }}>
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                    <Checkbox // Checkbox for select all
                      checked={rows.every((row) => row.all)}
                      onChange={(event) => {
                        const newRows = rows.map((row) => {
                          return { ...row, all: event.target.checked };
                        });
                        setRows(newRows);
                      }}
                     
                    />
                     <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  </TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>BANK NAME</TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>ADDRESS</TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>PHONE NO</TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>REPLEDGE DATE</TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>TOTAL WEIGHT</TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>COUNT</TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>REPLEDGE AMOUNT</TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>INTEREST</TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>LOCKER</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      <Checkbox // Individual row checkbox
                        checked={row.all}
                        onChange={(event) => handleCheckboxChange(event, index)}
                      />
                    </TableCell>
                   
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.bankname}</TableCell>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.address}</TableCell>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.phoneno}</TableCell>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.repledgedate}</TableCell>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.totalweight}</TableCell>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.count}</TableCell>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.repledgeamount}</TableCell>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.interest}</TableCell>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.locker}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          {/* Add card actions here */}
        </CardActions>
      </Card>
    </Box>
  );
};

export default OutlinedCard;
