import React, { useState } from 'react';
import { TextField, Button, Grid, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { Paper } from '@mui/material';
//import Sidebar from '../component/Menubar/Sidebar';

function CustomerList() {
  const [register, setRegister] = useState({
    CustomerName: '',
    CustomerId: '',
    MobileNumber: '',
    Area: '',
    Status: '',
  });
  const [registerRecords, setRegisterRecords] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegister((prevRegister) => ({
      ...prevRegister,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRegister = { ...register };
    setRegisterRecords((prevRecords) => [...prevRecords, newRegister]);
    setRegister({
      CustomerName: '',
      CustomerId: '',
      MobileNumber: '',
      Area: '',
      Status: '',
    });
  };

  const responsivePadding = {
    padding: '50px',
    '@media (max-width: 600px)': {
      padding: '10px',
    },
    '@media (max-width: 400px)': {
      padding: '5px',
    },
  };

  const paperStyle = {
    padding: 2,
    height: '90vh',
    width: 1100,
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      
      <div style={{ flex: 5, overflow: 'auto', paddingLeft: '1px', display: 'flex' }}>
        <Paper elevation={20} style={{ ...paperStyle, ...responsivePadding }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                Customer Name:
                <TextField
                  label="Customer Name"
                  name="CustomerName"
                  value={register.CustomerName}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Customer ID:
                <TextField
                  label="Customer ID"
                  name="CustomerId"
                  value={register.CustomerId}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Mobile Number:
                <TextField
                  label="Mobile Number"
                  name="MobileNumber"
                  value={register.MobileNumber}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Area:
                <TextField
                  label="Area"
                  name="Area"
                  value={register.Area}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Status:
                <TextField
                  label="Status"
                  name="Status"
                  value={register.Status}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Add Customer
                </Button>
              </Grid>
            </Grid>
          </form>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Customer Name</TableCell>
                <TableCell>Customer ID</TableCell>
                <TableCell>Mobile Number</TableCell>
                <TableCell>Area</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {registerRecords.map((record, index) => (
                <TableRow key={index}>
                  <TableCell>{record.CustomerName}</TableCell>
                  <TableCell>{record.CustomerId}</TableCell>
                  <TableCell>{record.MobileNumber}</TableCell>
                  <TableCell>{record.Area}</TableCell>
                  <TableCell>{record.Status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </div>
  );
}

export default CustomerList;