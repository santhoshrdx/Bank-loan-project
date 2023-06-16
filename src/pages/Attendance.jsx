import { Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Report.css';
import Card from '@mui/material/Card';
import {
    MDBCardBody,
      } from 'mdb-react-ui-kit';
      

function Attendance() {

  return (
    <form className="container-fluid">
    <br></br> 
    <h3>PayRoll</h3>      
    <Card sx={{ w:450,ml:30 ,bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.1000',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.400',
          borderRadius: 2,
          fontSize:15,
           }}>
        <MDBCardBody sx={{ ml:2}}> 
        <br></br>
       <h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Attendance Details</h3>
       <br></br>
       <Row className="mb-3">
       &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Employee Name</Form.Label>
            <input type="text" class="form-control" placeholder="Enter Name " aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="col col-sm-5">
            <Form.Label>Employee Role</Form.Label>
            <input type="text" class="form-control" placeholder="Enter Role" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
       
    </Row>
    <Row className="mb-3">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Employee ID</Form.Label>
            <input type="text" class="form-control" placeholder="Employee ID" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="col col-sm-5">
            <Form.Label>Deduction</Form.Label>
            <input type="text" class="form-control" placeholder="Enter Deduction" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
    </Row>
    
    <center> 
    <button type="submit" onClick="{submitButton}" className="me-4 btn btn-success btn-lg btn-block">Submit</button>
        </center>
<br></br>
      </MDBCardBody>
    </Card>
    <br></br>
    
            
    <br></br>
</form>


  );
}
export default Attendance;
