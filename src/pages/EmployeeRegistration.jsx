import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Form,
  InputGroup,
  Row,
} from 'react-bootstrap';
import {
  Grid,
  Paper,
  Typography,
  MenuItem,
  Select,
  Stepper,
  Step,
  StepLabel,
  Button,
} from '@mui/material';
import React, { useState } from 'react';
import Sidebar from '../component/Menubar/Sidebar';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBInput,
} from 'mdb-react-ui-kit';

function EmployeeRegistration() {
  const [customerData, setCustomerData] = useState({
    customer_name: '',
    date_of_birth: '',
    email: '',
    mobile_number: '',
    address_line_one: '',
    address_line_two: '',
    city: '',
    state: '',
    country: '',
    Pincode: '',
    care_of_type: '',
    care_of_name: '',
    nominee_type: '',
    nominee_name: '',
    Document: '',
    Document_type: '',
    Document_copy: '',
    Expire_data: '',
    Document_number: '',
  });

  const handleChange = (event) => {
    setCustomerData({
      ...customerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('customer_name', customerData.customer_name);
    formData.append('date_of_birth', customerData.date_of_birth);
    formData.append('email', customerData.email);
    formData.append('mobile_number', customerData.mobile_number);
    formData.append('address_line_one', customerData.address_line_one);
    formData.append('address_line_two', customerData.address_line_two);
    formData.append('city', customerData.city);
    formData.append('state', customerData.state);
    formData.append('country', customerData.country);
    formData.append('Pincode', customerData.Pincode);
    axios
      .post('http://localhost:8000/api//customer', formData)
      .then((response) => {})
      .catch((error) => {});
    const { name, value } = event.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Personal details', 'Employee details', 'Login details', 'Education Quality'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const paperStyle = {padding: 2, height: '140vh', width: '1100', margin: '10px ', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',};
  const responsivePadding = {
    padding: '20px',
    '@media (max-width: 600px)': {
      padding: '10px',
    },
    '@media (max-width: 400px)': {
      padding: '5px',
    },
  };
  const mdbCardStyle = {
    ...responsivePadding,
    width: '100%',
  };
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, overflow: 'auto', paddingLeft: '1px', display: 'center' }}>
        <form>
          <Paper elevation={20} style={{ ...paperStyle, ...responsivePadding }}>
            <Grid container justifyContent="space-between">
              <MDBCard style={mdbCardStyle}>
                <Typography variant="h5">Employee Registration</Typography>
                <hr style={{ border: 'none', borderBottom: '1px solid black', marginBottom: '1rem' }} />
                <Stepper style={{ width: '100%', padding: 2 }} activeStep={activeStep} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <hr className="hori-col-3" />
                <Form.Label className="mb">
                  <b>Personal Details</b>
                </Form.Label>
                <MDBCardBody>
                  <Row className="mb-2">
                    <Form.Group controlId="formcustomername" className="col-sm-4">
                      <Form.Label>Customer Name</Form.Label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Customer name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name="customer_name"
                        value={customerData.customer_name}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicMobile" className="col-sm-4" name="mobile_number" value={customerData.mobile_number} onChange={handleChange}>
                      <Form.Label>Mobile Number</Form.Label>
                      <InputGroup>
                        <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                        <Form.Control />
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row className="mb-2">
                    <Form.Group controlId="formDate" className="col-sm-4">
                      <Form.Label>Date of Birth</Form.Label>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="Date of Birth"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name="date_of_birth"
                        value={customerData.date_of_birth}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className="col-sm-4">
                      <Form.Label>Email address</Form.Label>
                      <input 
                        type="email" 
                        name="email"       
                        class="form-control"         
                        value={customerData.email}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={handleChange}
                        placeholder="Email Address"
                      ></input>
                    </Form.Group>
                  </Row>
                  <Row className="mb-2">
                    <Form.Group controlId="formGridAddress1" className="col-sm-4">
                      <Form.Label>Address Line1</Form.Label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Address line1"
                        aria-describedby="basic-addon1"
                        name="address_line_one"
                        value={customerData.address_line_one}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formGridAddress2" className="col-sm-4">
                      <Form.Label>Address Line2</Form.Label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Address line2"
                        aria-describedby="basic-addon1"
                        name="address_line_two"
                        value={customerData.address_line_two}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-2">
                    <Form.Group controlId="formGridCity" className="col-sm-4">
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <Form.Group controlId="formGridState" className="col-sm-4">
                      <Form.Label>State</Form.Label>
                      <Form.Control as="select">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>
                  </Row>
                  <Row className="mb-2">
                    <Form.Group controlId="formGridCountry" className="col-sm-4">
                      <Form.Label>Country</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <Form.Group controlId="formGridRegistrationDate" className="col-sm-4">
                      <Form.Label>Pincode</Form.Label>
                      <Form.Control type="text" placeholder='Pincode' />
                    </Form.Group>
                  </Row>
                </MDBCardBody>
                <br></br>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle>Id/Address Proof</MDBCardTitle>
                    <MDBTable bordered>
                      <MDBTableHead>
                        <tr>
                          <th scope="col">DOCUMENT</th>
                          <th scope="col">DOCUMENT TYPE</th>
                          <th scope="col">DOCUMENT COPY</th>
                          <th scope="col">EXPIRE DATE</th>
                          <th scope="col">DOCUMENT NO</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        <tr>
                          <th scope="col">
                            <Box sx={{ mr: 2 }}>
                              <FormControl className="col col-sm-10">
                                <Form.Group controlId="formGridNominee" className="col col-sm-3">
                                  <InputLabel id="demo-simple-select-label">Document</InputLabel>

                                  <Select
                                    name="Document"
                                    id="demo-simple-select"
                                    value={customerData.Document}
                                    label="Document"
                                    onChange={handleChange}
                                    style={{ minWidth: '150px', height: '38px' }}
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
                          <Box sx={{ mr: 2 }}>
                            <FormControl className="col col-sm-10">
                              <Form.Group controlId="formGridNominee" className="col col-sm-3">
                                <InputLabel id="demo-simple-select-label">Document Type</InputLabel>
                                <Select
                                  id="demo-simple-select"
                                  value={customerData.Document_type}
                                  label="Document type"
                                  name="Document_type"
                                  onChange={handleChange}
                                  style={{ minWidth: '150px', height: '38px' }}
                                >
                                  <MenuItem value="ID">ID</MenuItem>
                                  <MenuItem value="Address">Address</MenuItem>
                                </Select>
                              </Form.Group>
                            </FormControl>
                          </Box>
                          <td>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                          </td>
                          <td>
                            <input type="date" class="form-control" placeholder="Expire date" aria-label="Username" aria-describedby="basic-addon1" />
                          </td>
                          <td>
                            <input type="text" class="form-control" placeholder="Document number" aria-label="Username" aria-describedby="basic-addon1" />
                          </td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                  </MDBCardBody>
                </MDBCard>
              <br></br>
              <hr className="hori-col-3" />
              <Stack direction="row" spacing={115}>
                <Button variant="contained" color="primary" disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Stack>
              </MDBCard>
            </Grid>
          </Paper>
        </form>
      </div>
    </div>
  );
}

export default EmployeeRegistration;
