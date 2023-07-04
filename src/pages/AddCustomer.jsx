import  React from 'react';
import { Form, InputGroup, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Report.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import{ useState} from "react";
import axios from 'axios';
import { Paper } from '@mui/material';
import Sidebar from '../component/Menubar/Sidebar';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBRadio,
    MDBTable, MDBTableHead, MDBTableBody ,MDBInput,
  } from 'mdb-react-ui-kit';
  const AddCustomer = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [customerData, setCustomerData] = useState({
      customer_name: '',
      date_of_birth: '',
      gender: '',
      mobile_number: '',
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
      Document:'',
      Document_type:'',
      Document_copy:'',
      Expire_data:'',
      Document_number:'',
      Document1:'',
      Document_type1:'',
      Document_copy1:'',
      Expire_date1:'',
      Document_number1:'',
    });
    
    const handleImageChange = (event) => {
      setSelectedImage(event.target.files[0]);
    };
    const handleChange = (event) => {
      setCustomerData({
        ...customerData,
        [event.target.name]: event.target.value
      });
      
    };
    const paperStyle={padding: 2, height: '195vh',width: '1400',margin: '10px ',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('customer_image', selectedImage);
      formData.append('customer_name', customerData.customer_name);
      formData.append('date_of_birth', customerData.date_of_birth);
      formData.append('gender', customerData.gender);
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
      formData.append('document', customerData.Document);
      formData.append('document_type', customerData.Document_type);
      formData.append('document_copy', customerData.Document_copy);
      formData.append('expire_date', customerData.Expire_date);
      formData.append('document_number', customerData.Document_number);
      formData.append('document', customerData.Document1);
      formData.append('document_type', customerData.Document_type1);
      formData.append('document_copy', customerData.Document_copy1);
      formData.append('expire_date', customerData.Expire_date1);
      formData.append('document_number', customerData.Document_number1);
      axios.post('http://localhost:8000/api//customer', formData)
        .then((response) => {
        })
        .catch((error) => {
        });
        const { name, value } = event.target;
        setCustomerData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };     
      const responsivePadding = {
        padding: '20px',
        '@media (max-width: 600px)': {
          padding: '10px',
        },
        '@media (max-width: 400px)': {
          padding: '5px',
        },
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
    <div style={{display:'flex',height:'100vh'}} >
      <Sidebar/>
    <div style={{flex: 1,overflow:'auto',paddingLeft:'1px',display:'flex'}}>
    <Paper elevation={20} style={{...paperStyle, ...responsivePadding}}>
    <form className="container" onsubmit={handleSubmit}>
    <br></br>        
    <MDBCard style={{ ...responsivePadding}}>
    <Form.Label className="mb"><b>Personal Details</b></Form.Label>
    <hr className='hori-col-3'></hr>
        <MDBCardBody>
        <Row className="mb-2">
    <div className="Container">
      
    </div>
    <input type="file" class="form-control-file" id="exampleFormControlFile1" accept="image/*" onChange={handleImageChange}></input>
    </Row>
    <br></br>
    <Row className="mb-2">
        <Form.Group controlId="formcustomername" className="col col-sm-4">
            <Form.Label>Customer Name</Form.Label>
            <input type="text" class="form-control" placeholder="Customer name" aria-label="Username" aria-describedby="basic-addon1" name="customer_name" value={customerData.customer_name} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formcustomer-id" className="col col-sm-4">
            <Form.Label>Customer Id</Form.Label>
            <input type="text" class="form-control" placeholder="Customer Id" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
    </Row>
    <Row className="mb-2">
        <Form.Group controlId="formDate" className="col col-sm-4">
            <Form.Label>Date of Birth</Form.Label>
            <input type="date" class="form-control" placeholder="Date of Birth" aria-label="Username" aria-describedby="basic-addon1" name="date_of_birth" value={customerData.date_of_birth} onChange={handleChange}/>
        </Form.Group>
    <Form.Group className=" col col-sm-4" controlId="formGridGender" name="gender" value={customerData.gender} onChange={handleChange}>
            <Form.Label>Gender</Form.Label>
            <br></br> 
      <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Male' inline />
      <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Female' inline />
      <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
      </Form.Group>
    </Row>    
    <Row className="mb-2">
    <Form.Label>Mobile Number</Form.Label>
        <Form.Group controlId="formBasicMobile" placeholder="Mobile Number" className="col col-sm-4" name="mobile_number" value={customerData.mobile_number} onChange={handleChange}>
        <InputGroup>
    <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
    <Form.Control/>
  </InputGroup>   
        </Form.Group>
            <FormControl className="col col-sm-3 m-2 pl-2">
            <Form.Label>Phone No</Form.Label>
            <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={customerData.Phoneno}
          onChange={handleChange}
          style={{ minWidth: '120px', height: '38px' }}
        >
          <MenuItem value="Residence No">Residence No</MenuItem>
          <MenuItem value="Office No">Office No</MenuItem>
        </Select>
        </FormControl>
       
    </Row>
    <Row className="mb-2">
        <Form.Group className=" col col-sm-4" controlId="formGridAddress1" >
            <Form.Label>Address Line1</Form.Label>
             <input type="text" class="form-control" placeholder="Address line1"  aria-describedby="basic-addon1" name="address_line_one" value={customerData.address_line_one} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="col col-sm-4" controlId="formGridAddress2" >
            <Form.Label>Address Line2</Form.Label>
             <input type="text" class="form-control" placeholder="Address line2"  aria-describedby="basic-addon1" name="address_line_two" value={customerData.address_line_two} onChange={handleChange}/>
        </Form.Group>
    </Row>
    <Row className="mb-2">
    <Form.Group controlId="formCity" className="col col-sm-4">
            <Form.Label>City</Form.Label>
            <input type="text" class="form-control" placeholder="City" aria-label="Username" aria-describedby="basic-addon1" name="city" value={customerData.city} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="formGridState" className="col col-sm-4">
            <Form.Label>State</Form.Label>
            <input type="text" class="form-control" placeholder="State" aria-label="Username" aria-describedby="basic-addon1" name="state" value={customerData.state} onChange={handleChange}/>
        </Form.Group>      
    </Row>
    <Row className="mb-2">
    <Form.Group controlId="formGridCountry" className="col col-sm-4">
    <Form.Label>Country</Form.Label>
            <Form.Select defaultValue="Choose..." className="form-control" name="country" value={customerData.country} onChange={handleChange}>
                <option value="Choose...">Choose...</option>
                <option value="India">India</option> 
            </Form.Select>
         </Form.Group>
         <Form.Group controlId="formGridState" className="col col-sm-4">
            <Form.Label>Registration Date</Form.Label>
            <Form.Control type="date" className="form-control" name="registration_date" value={customerData.registration_date} onChange={handleChange} placeholder="Registration Date"/>
        </Form.Group>        
    </Row>
    <Row className="mb-2">
        <Form.Group controlId="formGridC/O" className="col col-sm-2">
        <Box sx={{ mr:2}}>
            <FormControl className="col col-sm-9">
            <Form.Label>C/O</Form.Label>
            <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="care_of_type"
          value={customerData.care_of_type}
          label="Document"
          onChange={handleChange}
          style={{ minWidth: '135px', height: '38px' }}
        >
          <MenuItem value="Father">Father</MenuItem>
          <MenuItem value="Husband">Husband</MenuItem>
        </Select>
        </FormControl>
        </Box>
        </Form.Group>
        <Form.Group className="col col-sm-2" controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control className="form-control" type="text" name="care_of_name" value={customerData.care_of_name} onChange={handleChange} placeholder="Care Name" />
        </Form.Group>
        <Form.Group controlId="formGridNominee" className="col col-sm-2">
        <Box sx={{ mr:3}}>
            <FormControl className="col col-sm-9">
            <Form.Group controlId="formGridNominee" className="col col-sm-4">
            <Form.Label>Nominee</Form.Label>
            <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          id="demo-simple-select"
          name="nominee_type"
          value={customerData.nominee_type}
          placeholder="Nominee Type"
          onChange={handleChange}
          style={{ minWidth: '135px', height: '38px' }}
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
            <Form.Control className="form-control" type="text" name="nominee_name" value={customerData.nominee_name} onChange={handleChange} placeholder="Nominee Name" />
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
          <th scope='col'>DOCUMENT TYPE</th>
          <th scope='col'>DOCUMENT COPY</th>
          <th scope='col'>EXPIRE DATE</th>
          <th scope='col'>DOCUMENT NO</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='col'>
          <Box sx={{ mr:2}}>
            <FormControl className="col col-sm-10">
            <Form.Group controlId="formGridNominee" className="col col-sm-3">
            <InputLabel id="demo-simple-select-label">Document</InputLabel>
    
        <Select
          name="Document"
          id="demo-simple-select"
          value={customerData.Document}
          label="Document"
          onChange={handleChange}
          style={{ minWidth: '150px', height: '43px' }}
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
            <Box sx={{ mr:2}}>
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
          <td><input type="file" class="form-control-file" id="exampleFormControlFile1"></input></td>
          <td><input type="date" class="form-control-file" id="exampleFormControlFile1" placeholder="Expire_date" name="Expire_date" value={customerData.Expire_date} onchange={handleChange}></input></td>
          <td><MDBInput type='text' name="Document_number" value={customerData.Document_number} onChange={handleChange} placeholder="Document_numner" /></td>  
        </tr>
      </MDBTableBody>
    </MDBTable>
    <MDBCardTitle>Additional Id/Address Proof</MDBCardTitle>
    <div id="table-container">
        <MDBTable bordered >
      <MDBTableHead>
        <tr>
          <th scope='col'>DOCUMENT</th>
          <th scope='col'>DOCUMENT TYPE</th>
          <th scope='col'>DOCUMENT COPY</th>
          <th scope='col'>EXPIRE DATE</th>
          <th scope='col'>DOCUMENT NO</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='col'>
          <Box sx={{ mr:2}}>
            <FormControl className="col col-sm-10">
            <Form.Group controlId="formGridNominee" className="col col-sm-3">
            <InputLabel id="demo-simple-select-label">Document</InputLabel>
    
        <Select
          name="Document1"
          id="demo-simple-select"
          value={customerData.Document1}
          label="Document"
          onChange={handleChange}
          style={{ minWidth: '150px', height: '43px' }}
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
            <Box sx={{ mr:2}}>
            <FormControl className="col col-sm-10">
            <Form.Group controlId="formGridNominee" className="col col-sm-3">
            <InputLabel id="demo-simple-select-label">Document Type</InputLabel>
        <Select
          id="demo-simple-select"
          value={customerData.Document_type1}
          label="Document type"
          name="Document_type1"
          onChange={handleChange}
          style={{ minWidth: '150px', height: '38px' }}
        >
          <MenuItem value="ID">ID</MenuItem>
          <MenuItem value="Address">Address</MenuItem>
        </Select>
        </Form.Group>
        </FormControl>
        </Box>
          <td><input type="file" class="form-control-file" id="exampleFormControlFile1" accept="image/*" onChange={handleImageChange}></input></td>
          <td><input type="date" class="form-control" placeholder="Expire_date1" aria-label="Username" aria-describedby="basic-addon1" name="Expire_date1" value={customerData.Expire_date1} onChange={handleChange}/></td>
          <td><MDBInput type='text' name="Document_number1" value={customerData.Document_number1} onChange={handleChange} placeholder="Document_numner" /></td>  
        </tr>
      </MDBTableBody>
    </MDBTable>
    </div>
      </MDBCardBody>
    </MDBCard>
    <br></br>
    <MDBCard>
      <MDBCardBody>
        
        <Row className="mb-3">
        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
            <br></br>
            <button type="submit" className="me-4 btn btn-success btn-lg btn-block"><center>Finsh</center></button>
        </Form.Group>
    </Row>
        
      </MDBCardBody>
    </MDBCard>
    <br></br>
</form>
</Paper>
</div>
</div>
  );

}
    export default AddCustomer;
