/*import React, { useState } from 'react';
import { TextField, Button, Grid, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

function AttendanceForm() {
  const [attendance, setAttendance] = useState({
    employeeName: '',
    employeeId: '',
    checkInTime: '',
    date: '',
    checkOutTime: '',
    employeeRole: '',
  });
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new attendance record
    const newAttendance = { ...attendance };
    // Add the new record to the existing records
    setAttendanceRecords((prevRecords) => [...prevRecords, newAttendance]);
    // Reset the form
    setAttendance({
      employeeName: '',
      employeeId: '',
      checkInTime: '',
      date: '',
      checkOutTime: '',
      employeeRole: '',
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ display: 'flex', justifyContent: 'flex-center', marginTop: '70px' }}>
    
    <span style={{marginRight:'0px'}}><b>Employee Details</b></span>
    
    <div>
      <br/><br/>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            Employee Name:
            <TextField
              label="Employee Name"
              name="employeeName"
              value={attendance.employeeName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            Employee ID:
            <TextField
              label="Employee ID"
              name="employeeId"
              value={attendance.employeeId}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            Check-in Time:
            <TextField
              label=""
              type="time"
              name="checkInTime"
              value={attendance.checkInTime}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            Employee Role:
            <TextField
              label="Employee Role"
              name="employeeRole"
              value={attendance.employeeRole}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            Check-out Time:
            <TextField
              label=""
              type="time"
              name="checkOutTime"
              value={attendance.checkOutTime}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            Date:
            <TextField
              label=""
              type="date"
              name="date"
              value={attendance.date}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>

      <Table>
        <TableHead>
        <TableRow>
            <TableCell>Employee Name</TableCell>
            <TableCell>Employee ID</TableCell>
            <TableCell>Check-in Time</TableCell>
            <TableCell>Employee Role</TableCell>
            <TableCell>Check-out Time</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>

          
          

        </TableHead>
        <TableBody>
          {attendanceRecords.map((record, index) => (
            <TableRow key={index}>
              <TableCell>{record.employeeName}</TableCell>
              <TableCell>{record.employeeId}</TableCell>
              <TableCell>{record.checkInTime}</TableCell>
              <TableCell>{record.employeeRole}</TableCell>
              <TableCell>{record.checkOutTime}</TableCell>
              <TableCell>{record.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </div>
    </div>
  );
}

export default AttendanceForm ;
*/