import React from 'react';
import { Box, Card, CardActions, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TextField, InputAdornment, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const rows = [
  createData('', '', '', '', '', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', '', '', '', '', ''),
];

function createData(sno, loanno, customer, scheme, loandate, loanamount, status, goldrate, duedate, principal, action) {
  return { sno, loanno, customer, scheme, loandate, loanamount, status, goldrate, duedate, principal, action };
}

const OutlinedCard = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', border:'5px',borderColor:'black', marginTop:'20px' ,borderRadius:'20px'}}>
      <Card variant="outlined" sx={{ width: '75%',borderRadius:'20px' }}>
        <CardContent>
          <Typography variant="h5" component="div" align="center" gutterBottom>
            Loan
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
            <TextField
              placeholder="Search..."
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)'  }}>S.No</TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Loan No</TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' , borderRight: '1px solid rgba(224, 224, 224, 1)'}}>Customer Name/Id</TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' , borderRight: '1px solid rgba(224, 224, 224, 1)'}}>Scheme</TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' , borderRight: '1px solid rgba(224, 224, 224, 1)'}}>Loan Date</TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Loan Amount</TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Status</TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Gold Weight</TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' , borderRight: '1px solid rgba(224, 224, 224, 1)'}}>Due Date</TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' , borderRight: '1px solid rgba(224, 224, 224, 1)'}}>Principal</TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.sno}</TableCell>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' , borderRight: '1px solid rgba(224, 224, 224, 1)'}}>{row.loanno}</TableCell>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.customer}</TableCell>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.scheme}</TableCell>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' , borderRight: '1px solid rgba(224, 224, 224, 1)'}}>{row.loandate}</TableCell>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' , borderRight: '1px solid rgba(224, 224, 224, 1)'}}>{row.loanamount}</TableCell>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.status}</TableCell>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.goldrate}</TableCell>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' , borderRight: '1px solid rgba(224, 224, 224, 1)'}}>{row.duedate}</TableCell>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' , borderRight: '1px solid rgba(224, 224, 224, 1)'}}>{row.principal}</TableCell>
                    <TableCell align="center" sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>{row.action}</TableCell>
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