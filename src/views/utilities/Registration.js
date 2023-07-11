import React from 'react';

import { Link } from 'react-router-dom';

import { Form, InputGroup, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import InputLabel from '@mui/material/InputLabel';

import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';

import Box from '@mui/material/Box';

import Select from '@mui/material/Select';

import { useState } from 'react';

import axios from 'axios';

import { Paper, Container, Grid } from '@mui/material';

import { MDBCardBody, MDBCardTitle, MDBRadio, MDBTable, MDBTableHead, MDBTableBody, MDBInput } from 'mdb-react-ui-kit';

const AddCustomer = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);

  const [customerData, setCustomerData] = useState({
    customer_name: '',

    date_of_birth: '',

    gender: '',
    phonenumber: '',
    phonenumber_type: '',

    mobile_number: '',

    number: '',

    address_line_one: '',

    address_line_two: '',

    city: '',

    state: '',

    country: '',

    registration_date: '',

    care_of_type: '',

    care_of_name: '',

    nominee_type: '',

    nominee_name: '',
    document1: '',
    document_type1: '',
    document_copy1: '',
    expire_date1: '',
    document_number1: '',
    document2: '',
    document_type2: '',
    document_copy2: '',
    expire_date2: '',
    document_number2: ''
  });

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  const handleImageChange1 = (event) => {
    setSelectedImage1(event.target.files[0]);
  };

  const handleImageChange2 = (event) => {
    setSelectedImage2(event.target.files[0]);
  };

  const handleChange = (event) => {
    setCustomerData({
      ...customerData,

      [event.target.name]: event.target.value
    });
  };

  // const paperStyle = {
  //   height: '195vh',
  //   width: '1400',
  //   margin: '5px ',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('customer_image', selectedImage);

    formData.append('customer_name', customerData.customer_name);

    formData.append('date_of_birth', customerData.date_of_birth);

    formData.append('gender', customerData.gender);
    formData.append('phonenumber', customerData.phonenumber);
    formData.append('phonenumber_type', customerData.phonenumber_type);

    formData.append('mobile_number', customerData.mobile_number);

    formData.append('address_line_one', customerData.address_line_one);

    formData.append('address_line_two', customerData.address_line_two);

    formData.append('city', customerData.city);

    formData.append('state', customerData.state);

    formData.append('country', customerData.country);

    formData.append('registration_date', customerData.registration_date);

    formData.append('care_of_type', customerData.care_of_type);

    formData.append('care_of_name', customerData.care_of_name);

    formData.append('nominee_type', customerData.nominee_type);

    formData.append('nominee_name', customerData.nominee_name);

    formData.append('document1', customerData.document1);

    formData.append('document_type1', customerData.document_type1);

    formData.append('document_copy1', selectedImage1);

    formData.append('expire_date1', customerData.expire_date1);

    formData.append('document_number1', customerData.document_number1);

    formData.append('document2', customerData.document2);

    formData.append('document_type2', customerData.document_type2);

    formData.append('document_copy2', selectedImage2);

    formData.append('expire_date2', customerData.expire_date2);

    formData.append('document_number2', customerData.document_number2);

    axios
      .post('http://localhost:8000/api/customer', formData)

      .then((response) => {})

      .catch((error) => {});

    const { name, value } = event.target;

    setCustomerData((prevData) => ({
      ...prevData,

      [name]: value
    }));
  };

  const responsivePadding = {
    padding: '20px',

    '@media (max-width: 600px)': {
      padding: '10px'
    },

    '@media (max-width: 400px)': {
      padding: '5px'
    }
  };

  /*

      var tableContainer = document.getElementById('table-container');

      var table = tableContainer.querySelector('table');

      var lastRow = table.querySelector('tbody tr:last-child');

 

      var newRow = lastRow.cloneNode(true);

   

      var inputFields = newRow.querySelectorAll('input');

      inputFields.forEach(function (input) {

        input.value = '';

      });

      table.querySelector('tbody').appendChild(newRow);

    */

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, overflow: 'auto', paddingLeft: '1px', display: 'flex' }}>
        <form className="container" onSubmit={handleSubmit}>
          <Paper elevation={20} style={{ width: '100%', height: '1300px', marginTop: '04rem', ...responsivePadding }}>
            <Container maxWidth="lg">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Form.Label className="mb">
                    <br></br>
                    <h3><b>Personal Details</b></h3>
                  </Form.Label>

                  <hr className="hori-col-3" />

                  <MDBCardBody>
                    <input
                      type="file"
                      className="form-control-file"
                      id="exampleFormControlFile1"
                      accept="image/*"
                      onChange={handleImageChange}
                      required
                    />

                    <br />

                    <Row className="mb-2">
                      <Form.Group controlId="formcustomername" className="col col-sm-6">
                        <Form.Label>
                          Customer Name<span style={{ color: 'red' }}>*</span>
                        </Form.Label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Customer name"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          name="customer_name"
                          value={customerData.customer_name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="formDate" className="col col-sm-6">
                        <Form.Label>
                          Date of Birth<span style={{ color: 'red' }}>*</span>
                        </Form.Label>

                        <input
                          type="date"
                          className="form-control"
                          placeholder="Date of Birth"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          name="date_of_birth"
                          value={customerData.date_of_birth}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Row>

                    <Row className="mb-2">
                      <Form.Group controlId="formGridgender" className="col col-sm-6">
                        <Form.Label>
                          Gender<span style={{ color: 'red' }}>*</span>
                        </Form.Label>

                        <Form.Select
                          defaultValue="Choose..."
                          className="form-control"
                          name="gender"
                          value={customerData.gender}
                          onChange={handleChange}
                          required 
                        >
                               <option value="Choose"></option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="col col-sm-6" controlId="formGridName">
                        <Form.Label>Mobile Number<span style={{ color: 'red' }}>*</span></Form.Label>

                        <InputGroup>
                          <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>

                          <Form.Control
                            className="form-control"
                            type="text"
                            name="mobile_number"
                            value={customerData.mobile_number}
                            onChange={handleChange}required
                            placeholder="Mobile Number"
                          />
                        </InputGroup>
                      </Form.Group>
                    </Row>

                    <Row className="mb-2">
                      <Form.Group controlId="formGridgender" className="col col-sm-6">
                        <Form.Label>Phone Number Type<span style={{ color: 'red' }}>*</span></Form.Label>

                        <Form.Select
                          defaultValue="Choose..."
                          className="form-control"
                          name="phonenumber_type"
                          value={customerData.phonenumber_type}
                          onChange={handleChange}required
                        >     <option value="Choose"></option>
                          <option value="Office no">Office no</option>
                          <option value="Residence no">Residence no</option>
                          <option value=" None">None</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="col col-sm-6" controlId="formGridName">
                        <Form.Label>Phone Number<span style={{ color: 'red' }}>*</span></Form.Label>

                        <InputGroup>
                          <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>

                          <Form.Control
                            className="form-control"
                            type="text"
                            name="phonenumber"
                            value={customerData.phonenumber}
                            onChange={handleChange}required
                            placeholder="Mobile Number"
                          />
                        </InputGroup>
                      </Form.Group>
                    </Row>

                    <Row className="mb-2">
                      <Form.Group controlId="formGridAddress1" className="col col-sm-6">
                        <Form.Label>Address Line1<span style={{ color: 'red' }}>*</span></Form.Label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address line1"
                          aria-describedby="basic-addon1"
                          name="address_line_one"
                          value={customerData.address_line_one}
                          onChange={handleChange}required
                        />
                      </Form.Group>

                      <Form.Group controlId="formGridAddress2" className="col col-sm-6">
                        <Form.Label>Address Line2<span style={{ color: 'red' }}>*</span></Form.Label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address line2"
                          aria-describedby="basic-addon1"
                          name="address_line_two"
                          value={customerData.address_line_two}
                          onChange={handleChange}required
                        />
                      </Form.Group>
                    </Row>

                    <Row className="mb-2">
                      <Form.Group controlId="formCity" className="col col-sm-6">
                        <Form.Label>City<span style={{ color: 'red' }}>*</span></Form.Label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="City"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          name="city"
                          value={customerData.city}
                          onChange={handleChange}required
                        />
                      </Form.Group>

                      <Form.Group controlId="formGridState" className="col col-sm-6">
                        <Form.Label>State<span style={{ color: 'red' }}>*</span></Form.Label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="State"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          name="state"
                          value={customerData.state}
                          onChange={handleChange}required
                        />
                      </Form.Group>
                    </Row>

                    <Row className="mb-2">
                      <Form.Group controlId="formGridCountry" className="col col-sm-6">
                        <Form.Label>Country<span style={{ color: 'red' }}>*</span></Form.Label>

                        <Form.Select
                          defaultValue="Choose..."
                          className="form-control"
                          name="country"
                          value={customerData.country}
                          onChange={handleChange}required
                        >
                          <option value="Choose..."></option>

                          <option value="India">India</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group controlId="formGridState" className="col col-sm-6">
                        <Form.Label>Registration Date<span style={{ color: 'red' }}>*</span></Form.Label>

                        <Form.Control
                          type="date"
                          className="form-control"
                          name="registration_date"
                          value={customerData.registration_date}
                          onChange={handleChange}required
                          placeholder="Registration Date"
                        />
                      </Form.Group>
                    </Row>

                    <Row className="mb-2">
                      <Form.Group controlId="formGridC/O" className="col col-sm-3">
                        <Form.Label>C/O<span style={{ color: 'red' }}>*</span></Form.Label>

                        <Form.Select
                          defaultValue="Choose..."
                          className="form-control"
                          name="care_of_type"
                          value={customerData.care_of_type}
                          onChange={handleChange}required
                        >
                             <option value="Choose"></option>
                          <option value="Father">Father</option>
                          <option value="Mother">Mother</option>
                          <option value="Husband">Husband</option>

                          <option value="Wife">Wife</option>
                          <option value=" None">None</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group controlId="formGridName" className="col col-sm-3">
                        <Form.Label>Name<span style={{ color: 'red' }}>*</span></Form.Label>

                        <Form.Control
                          type="text"
                          name="care_of_name"
                          value={customerData.care_of_name}
                          onChange={handleChange}required
                          placeholder="Care Name"
                        />
                      </Form.Group>

                      <Form.Group controlId="formGridC/O" className="col col-sm-3">
                        <Form.Label>Nominee<span style={{ color: 'red' }}>*</span></Form.Label>

                        <Form.Select
                          defaultValue="Choose..."
                          className="form-control"
                          name="nominee_type"
                          value={customerData.nominee_type}
                          onChange={handleChange}required
                        >
                         
                         <option value="Choose"></option>
                          <option value="Father">Father</option>
                          <option value="Mother">Mother</option>
                          <option value="Husband">Husband</option>
                          <option value="Wife">Wife</option>
                          <option value=" None">None</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group controlId="formGridName" className="col col-sm-3">
                        <Form.Label>Name<span style={{ color: 'red' }}>*</span></Form.Label>

                        <Form.Control
                          type="text"
                          name="nominee_name"
                          value={customerData.nominee_name}
                          onChange={handleChange}required
                          placeholder="Nominee Name"
                        />
                      </Form.Group>
                    </Row>
                  </MDBCardBody>
                </Grid>

                <Grid item xs={12}>
                  <br></br>

                  <MDBCardBody>
                    <MDBCardTitle>Id/Address Proof<span style={{ color: 'red' }}>*</span></MDBCardTitle>
                    <br></br>
                    <MDBTable component={Paper}>
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
                                    name="document1"
                                    id="demo-simple-select"
                                    value={customerData.document1}
                                    label="Document"
                                    onChange={handleChange}required
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
                                  value={customerData.document_type1}
                                  label="Document type"
                                  name="document_type1"
                                  onChange={handleChange}required
                                  style={{ minWidth: '150px', height: '38px' }}
                                >
                                  <MenuItem value="ID">ID</MenuItem>

                                  <MenuItem value="Address">Address</MenuItem>
                                </Select>
                              </Form.Group>
                            </FormControl>
                          </Box>

                          <td>
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              accept="image/*"
                              name="document_copy1"
                              onChange={handleImageChange1}required
                            />
                          </td>

                          <td>
                            <input
                              type="date"
                              class="form-control"
                              placeholder="Expire_date1"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              name="expire_date1"
                              value={customerData.expire_date1}
                              onChange={handleChange}required
                            />
                          </td>

                          <td>
                            <MDBInput
                              type="text"
                              name="document_number1"
                              value={customerData.document_number1}
                              onChange={handleChange}required
                              placeholder="document_number1"
                            />
                          </td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>

                    <MDBCardTitle>Additional Id/Address Proof<span style={{ color: 'red' }}>*</span></MDBCardTitle>
                    <br></br>
                    <div id="table-container">
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
                                      name="document2"
                                      id="demo-simple-select"
                                      value={customerData.document2}
                                      label="Document"
                                      onChange={handleChange}required
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
                                    value={customerData.document_type2}
                                    label="Document type"
                                    name="document_type2"
                                    onChange={handleChange}required
                                    style={{ minWidth: '150px', height: '38px' }}
                                  >
                                    <MenuItem value="ID">ID</MenuItem>

                                    <MenuItem value="Address">Address</MenuItem>
                                  </Select>
                                </Form.Group>
                              </FormControl>
                            </Box>

                            <td>
                              <input
                                type="file"
                                class="form-control-file"
                                id="exampleFormControlFile1"
                                accept="image/*"
                                name="document_copy2"
                                onChange={handleImageChange2}required
                              ></input>
                            </td>

                            <td>
                              <input
                                type="date"
                                class="form-control"
                                placeholder="Expire_date1"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                name="expire_date2"
                                value={customerData.expire_date2}
                                onChange={handleChange}required
                              />
                            </td>

                            <td>
                              <MDBInput
                                type="text"
                                name="document_number2"
                                value={customerData.document_number2}
                                onChange={handleChange}required
                                placeholder="Document_numner"
                              />
                            </td>
                          </tr>
                        </MDBTableBody>
                      </MDBTable>
                    </div>
                  </MDBCardBody>

                  <br></br>

                  <MDBCardBody>
                    <Row className="mb-3">
                      <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
                        <br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="submit" className="me-4 btn btn-success btn-lg btn-block mx-auto d-block my-50">
                          <center>Submit</center>
                        </button>
                      </Form.Group>
                    </Row>
                  </MDBCardBody>
                </Grid>
              </Grid>
            </Container>
          </Paper>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
