import React, { useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import Card from '@mui/material/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../component/Menubar/Sidebar';
import { TextField, Button, Paper,Grid, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
function Attendance() {
    const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [attendance, setAttendance] = useState({
    employeeName: '',
    employeeId: '',
    checkInTime: '',
    date: '',
    checkOutTime: '',
    employeeRole: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
 
    const newAttendance = { ...attendance };

    setAttendanceRecords((prevRecords) => [...prevRecords, newAttendance]);
  
    setAttendance({
      employeeName: '',
      employeeId: '',
      checkInTime: '',
      date: '',
      checkOutTime: '',
      employeeRole: '',
    });
  };
  const paperStyle1={padding: 2, height: '105vh',width: '100%',margin: '10px ',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}
  const responsivePadding = {
    padding: '20px',
        '@media (max-width: 600px)': {
          padding: '10px',
        },
        '@media (max-width: 400px)': {
          padding: '5px',
        },
  };

  return (

    <div style={{display:'flex',height:'100vh'}} >
    <Sidebar/>
  <div style={{flex: 1,overflow:'auto',paddingLeft:'20px',display:'flex'}}>
     
      <br/><br/>
      <Paper elevation={20} style={{...paperStyle1, ...responsivePadding }}>
     
      <Card sx={{ maxWidth: '100%' , display: 'flex', flexDirection: 'column', ml:5 ,bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.1000',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.400',
          borderRadius: 2,
          fontSize:15,
           }}>
             <form  onSubmit={handleSubmit}>
            <br></br>
            <h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Attendance Details</h3>
            <hr></hr>
           
            <Row>
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group controlId="formBasicEmail" className="col col-sm-6">
          <Form.Label>Employee Name</Form.Label>
            <TextField
              label="Employee Name"
              name="employeeName"
              value={attendance.employeeName}
              onChange={handleChange}
              fullWidth
            />
          </Form.Group>
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group controlId="formBasicEmail" className="col col-sm-5">
          <Form.Label>Employee Role</Form.Label>
          <TextField
              label=""
              type="text"
              name="employeeRole"
              value={attendance.employeeRole}
              onChange={handleChange}
              fullWidth
            />
          </Form.Group>
          </Row>
         
          <Row>
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group controlId="formBasicEmail" className="col col-sm-6">
          <Form.Label>Employee Id</Form.Label>
            <TextField
              label="Employee Id"
              name="employeeId"
              value={attendance.employeeId}
              onChange={handleChange}
              fullWidth
            />
          </Form.Group>
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group controlId="formBasicEmail" className="col col-sm-5">
          <Form.Label>Date</Form.Label>
          <TextField
              label=""
              type="date"
              name="date"
              value={attendance.date}
              onChange={handleChange}
              fullWidth
            />
          </Form.Group>
          </Row>
          <Row>
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group controlId="formBasicEmail" className="col col-sm-6">
          <Form.Label>Check-In-Time</Form.Label>
            <TextField
              label=""
              type="time"
              name="CheckInTime"
              value={attendance.checkInTime}
              onChange={handleChange}
              fullWidth
            />
          </Form.Group>
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group controlId="formBasicEmail" className="col col-sm-5">
          <Form.Label>Check-Out-Time</Form.Label>
          <TextField
              label=""
              type="time"
              name="CheckOutTime"
              value={attendance.checkOutTime}
              onChange={handleChange}
              fullWidth
            />
          </Form.Group>
          </Row>
         <center>
    <Grid item xs={12}>
      <br></br>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>

          </Grid>
          </center>
          <br></br>
          </form>
       </Card>
      
      <br></br>
      <br></br>
      <Card sx={{ w:450,ml:5,bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.1000',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.400',
          borderRadius: 2,
          fontSize:15,
           }}>
            <br></br>
            <h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Attendance Details</h5>
      <Table style={{ ml:'5', border: '1px solid black',}}>
        <TableHead>
        <TableRow>
          <TableCell >All</TableCell>
        <TableCell>Date</TableCell>
            <TableCell>Employee Name</TableCell>
            <TableCell>Employee Role</TableCell>
            <TableCell>Employee ID</TableCell>
            <TableCell>Check-in Time</TableCell>
            <TableCell>Check-out Time</TableCell>
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
      </Card>
      </Paper>
    </div>
    </div>
   
  );
}

export default Attendance ;