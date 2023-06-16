import  React from 'react';
import { Form, InputGroup, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Report.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBRadio,
    MDBTable, MDBTableHead, MDBTableBody ,MDBInput,
  } from 'mdb-react-ui-kit';
function AddCustomer() {
  function handleMobileNumberChange(event) {
    const input = event.target.value.replace(/\D/g, '');
    const maxLength = 10;
    const sanitizedInput = input.slice(0, maxLength); 
    event.target.value = sanitizedInput; 
  }
  const [Document, setDocument] = React.useState('');

  const handleChange = (event) => {
    setDocument(event.target.value);
  };
  
  return (
    
    <form className="container">
    <br></br>        
    <MDBCard>
        <MDBCardBody>
        <Row className="mb-3">
    
    <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
    </Row>
    <br></br>
    <Row className="mb-3">
        <Form.Group controlId="formcustomername" className="col col-sm-4">
            <Form.Label>Customer Name</Form.Label>
            <input type="text" class="form-control" placeholder="Customer name" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
        <Form.Group controlId="formcustomer-id" className="col col-sm-4">
            <Form.Label>Customer Id</Form.Label>
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formDate" className="col col-sm-4">
            <Form.Label>Date of Birth</Form.Label>
            <input type="date" class="form-control" placeholder="Date of Birth" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
    <Form.Group className=" col col-sm-4" controlId="formGridGender">
            <Form.Label>Gender</Form.Label>
            <br></br>  
      <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Male' inline />
      <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Female' inline />
      <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
      </Form.Group>
    </Row>    
    <Row className="mb-3">
    <Form.Label>Mobile Number</Form.Label>
        <Form.Group controlId="formBasicMobile" placeholder="Mobile No" className="col col-sm-4">
        <InputGroup>
    <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
    <Form.Control
      aria-label="Mobile Number"
      type="text"
      aria-describedby="basic-addon1"
      className="form-control"
      name="mobile"
      maxLength={10}
      pattern="[0-9]{10}"
      title="Mobile number should be 10 digits"
      required
      onChange={handleMobileNumberChange}
    />
  </InputGroup>   
        </Form.Group>
        <Form.Group controlId="formBasicPhoneno" className="col col-sm-4">
        <Box sx={{ m:1}}>
            <FormControl className="col col-sm-10">
            <Form.Label>Phone No</Form.Label>
            <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Document}
          label="Document"
          onChange={handleChange}
          style={{ minWidth: '150px', height: '38px' }}
        >
          <MenuItem value="Residence No">Residence No</MenuItem>
          <MenuItem value="Office No">Office No</MenuItem>
        </Select>
        </FormControl>
        </Box>       
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group className=" col col-sm-4" controlId="formGridAddress1">
            <Form.Label>Address Line1</Form.Label>
             <input type="text" class="form-control" placeholder="Address line1"  aria-describedby="basic-addon1"/>
        </Form.Group>
        <Form.Group className="col col-sm-4" controlId="formGridAddress2">
            <Form.Label>Address Line2</Form.Label>
             <input type="text" class="form-control" placeholder="Address line2"  aria-describedby="basic-addon1"/>
        </Form.Group>
    </Row>
    <Row className="mb-3">
    <Form.Group controlId="formCity" className="col col-sm-4">
            <Form.Label>City</Form.Label>
            <input type="text" class="form-control" placeholder="City" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
        <Form.Group controlId="formGridState" className="col col-sm-4">
            <Form.Label>State</Form.Label>
            <input type="text" class="form-control" placeholder="State" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
        
    </Row>
    <Row className="mb-3">
    <Form.Group controlId="formGridCountry" className="col col-sm-4">
    <Form.Label>Country</Form.Label>
            <Form.Select defaultValue="Choose..." className="form-control" name="country    " value="---country---"required onChange="{handleChange}">
                <option value="Choose...">Choose...</option>
                <option value="India">India</option> 
            </Form.Select>
         </Form.Group>
         <Form.Group controlId="formGridState" className="col col-sm-4">
            <Form.Label>Registration Date</Form.Label>
            <Form.Control type="date"  onChange="{handleChange}" className="form-control" />
        </Form.Group>        
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formGridC/O" className="col col-sm-2">
        <Box sx={{ mr:2}}>
            <FormControl className="col col-sm-9">
            <Form.Label>C/O</Form.Label>
            <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Document}
          label="Document"
          onChange={handleChange}
          style={{ minWidth: '120px', height: '38px' }}
        >
          <MenuItem value="Father">Father</MenuItem>
          <MenuItem value="Husband">Husband</MenuItem>
        </Select>
        </FormControl>
        </Box>
        </Form.Group>
        <Form.Group className="col col-sm-2" controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control className="form-control" name="name" value="Name" onChange="{handleChange}" type="text" />
        </Form.Group>
        <Form.Group controlId="formGridNominee" className="col col-sm-2">
        <Box sx={{ mr:2}}>
            <FormControl className="col col-sm-9">
            <Form.Group controlId="formGridNominee" className="col col-sm-4">
            <Form.Label>Nominee</Form.Label>
            <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Document}
          label="Document"
          onChange={handleChange}
          style={{ minWidth: '120px', height: '38px' }}
        >
          <MenuItem value="Father">Father</MenuItem>
          <MenuItem value="Husband">Husband</MenuItem>
          <MenuItem value="Son">Son</MenuItem>
          <MenuItem value="Daughter">Daughter</MenuItem>
        </Select>
        </Form.Group>
        </FormControl>
        </Box>
        </Form.Group>
        <Form.Group className="col col-sm-2" controlId="formGridName">
            <Form.Label>Nominee Name</Form.Label>
            <Form.Control className="form-control" name="address2" value="Enter Nominee Name" onChange="{handleChange}" type="text" />
        </Form.Group>
        
        </Row>
        
        </MDBCardBody>
        </MDBCard>
        <br></br>
        <MDBCard >
        <MDBCardBody>
   
        <MDBCardTitle>Id/Address Proof</MDBCardTitle>
        <MDBTable bordered >
      <MDBTableHead>
        <tr>
          <th scope='col'>DOCUMENT</th>
          <th scope='col'>Document Type</th>
          <th scope='col'>DOCUMENT COPY</th>
          <th scope='col'>EXPIRE DATE</th>
          <th scope='col'>DOCUMENT NO</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='col'>
          <Box sx={{ mr:1}}>
            <FormControl className="col col-sm-10">
            <Form.Group controlId="formGridNominee" className="col col-sm-3">
            <InputLabel id="demo-simple-select-label">Document</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Document}
          label="Document"
          onChange={handleChange}
          style={{ minWidth: '150px', height: '50px' }}
        >
          <MenuItem value="Aadhar Card">Aadhar card</MenuItem>
          <MenuItem value="Pan Card">Pan Card</MenuItem>
          <MenuItem value="Voter Id">Voter Id</MenuItem>
          <MenuItem value="Driving License">Driving License</MenuItem>
          <MenuItem value="Ration Card">Ration Card</MenuItem>
        </Select>
        </Form.Group>
        </FormControl>
        </Box>
            </th>
            <Box sx={{ mr:1}}>
            <FormControl className="col col-sm-10">
            <Form.Group controlId="formGridNominee" className="col col-sm-3">
            <InputLabel id="demo-simple-select-label">Document Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Document}
          label="Document"
          onChange={handleChange}
          style={{ minWidth: '150px', height: '50px' }}
        >
          <MenuItem value="ID">ID</MenuItem>
          <MenuItem value="Address">Address</MenuItem>
        </Select>
        </Form.Group>
        </FormControl>
        </Box>
          <td><input type="file" class="form-control-file" id="exampleFormControlFile1"></input></td>
          <td><input type="date" class="form-control-file" id="exampleFormControlFile1"></input></td>
          <td><MDBInput value='Document No' id='form1' type='text' /></td>  
        </tr>

      </MDBTableBody>
    </MDBTable>
    <Button variant="contained" endIcon={<AddIcon />}>Add</Button> 
      </MDBCardBody>
    </MDBCard>
    <br></br>
    <MDBCard>
      <MDBCardBody>
        
        <Row className="mb-3">
        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
            <br></br>
            <button type="submit" onClick="{submitButton}" className="me-4 btn btn-success btn-lg btn-block">Finish</button>
        </Form.Group>
    </Row>
        
      </MDBCardBody>
    </MDBCard>
    <br></br>
</form>

  );
}
    export default AddCustomer;
