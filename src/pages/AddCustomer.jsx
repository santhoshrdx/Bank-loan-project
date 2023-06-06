import { Form, InputGroup, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Report.css';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBRadio,
    MDBTable, MDBTableHead, MDBTableBody ,MDBCheckbox,MDBInput,  } from 'mdb-react-ui-kit';
function AddCustomer() {

  return (
   
    <form className="container" >
    <br></br>        
    <MDBCard >
        <MDBCardBody>
        <Row className="mb-3">
    
    <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
    </Row>
    <br></br>
    <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-4">
            <Form.Label>Customer Name</Form.Label>
            <input type="text" class="form-control" placeholder="customer name" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="col col-sm-4">
            <Form.Label>Customer Id</Form.Label>
            <Form.Control type="name" name="last_name" value="Customer Id" required onChange="{handleChange}" className="form-control" />
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formDate" className="col col-sm-4">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date"  onChange="{handleChange}" className="form-control" />
        </Form.Group>
    <Form.Group className=" col col-sm-4" controlId="formGridAddress1">
            <Form.Label>Gender</Form.Label>
            <br></br>  
      <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Male' inline />
      <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Female' inline />
      <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
      </Form.Group>
    </Row>    
    <Row className="mb-3">
        <Form.Group controlId="formBasicMobile" className="col col-sm-4">
            <Form.Label>Mobile Number</Form.Label>
            <InputGroup>
                <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                <Form.Control aria-label="Mobile Number" type="mobile" aria-describedby="basic-addon1" className="form-control" name="mobile" value="Mobile no" required onChange="{handleChange}" />
            </InputGroup>
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="col col-sm-4">
            <Form.Label>Email</Form.Label>
            <InputGroup>
                <Form.Control aria-label="Recipient's username" aria-describedby="basic-addon2" type="email" name="email" value="Enter email " onChange="{handleChange}" />
                <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
            </InputGroup>
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group className=" col col-sm-4" controlId="formGridAddress1">
            <Form.Label>Address Line1</Form.Label>
            <Form.Control className="form-control" type="text" name="address1" value="Enter address1"required onChange="{handleChange}" />
        </Form.Group>
        <Form.Group className="col col-sm-4" controlId="formGridAddress2">
            <Form.Label>Address Line2</Form.Label>
            <Form.Control className="form-control" name="address2" value=" Enter address2" onChange="{handleChange}" type="text" />
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formGridCity" className="col col-sm-4">
            <Form.Label>City</Form.Label>
            <Form.Select defaultValue="Choose..." className="form-control" name="city" value="enter city"required onChange="{handleChange}">
                <option value="Choose...">Choose...</option>
                <option value="tenkasi">Tenkasi</option>
                <option value="ayukudi">Ayukudi</option>
               
            </Form.Select>
        </Form.Group>
        <Form.Group controlId="formGridState" className="col col-sm-4">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose..." className="form-control" name="a_state" value="enter state"required onChange="{handleChange}">
                <option value="Choose...">Choose...</option>
                <option value="Delhi">TamilNadu</option>
                <option value="Bombay">Bommbay</option>
                <option value="New York">New York</option>
                <option value="Kashmir">Kashmir</option>
            </Form.Select>
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
            <Form.Label>C/O</Form.Label>
            <Form.Select defaultValue="Choose..." className="form-control"  onChange="{handleChange}">
               
                <option value="husband">Husband</option>
                <option value="father">Father</option>
               
            </Form.Select>
        </Form.Group>
        <Form.Group className="col col-sm-2" controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control className="form-control" name="name" value="Name" onChange="{handleChange}" type="text" />
        </Form.Group>
        <Form.Group controlId="formGridNominee" className="col col-sm-2">
            <Form.Label>Nominee</Form.Label>
            <Form.Select defaultValue="Choose..." className="form-control"  onChange="{handleChange}">
                <option value="husband">Husband</option>
                <option value="father">Father</option>
                <option value="son">Son</option>
                <option value="daughter">Daughter</option>
                <option value="mother">Mother</option>
               
            </Form.Select>
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
          <th scope='col'>ID</th>
          <th scope='col'>ADDRESS</th>
          <th scope='col'>DOCUMENT COPY</th>
          <th scope='col'>EXPIRE DATE</th>
          <th scope='col'>DOCUMENT NO</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='col'>Aadhar card</th>
          <td><MDBCheckbox name='flexCheck' value='' id='flexCheckDefault'  /></td>
          <td><MDBCheckbox name='flexCheck' value='' id='flexCheckDefault'  /></td>
          <td><input type="file" class="form-control-file" id="exampleFormControlFile1"></input></td>
          <td><input type="date" class="form-control-file" id="exampleFormControlFile1"></input></td>
          <td><MDBInput value='Document No' id='form1' type='text' /></td>
          
        </tr>
        <tr>
          <th scope='row'>Pan Card</th>
          <td><MDBCheckbox name='flexCheck' value='' id='flexCheckDefault'  /></td>
          <td><MDBCheckbox name='flexCheck' value='' id='flexCheckDefault'  /></td>
          <td><input type="file" class="form-control-file" id="exampleFormControlFile1"></input></td>
          <td><input type="date" class="form-control-file" id="exampleFormControlFile1"></input></td>
          <td><MDBInput value='Document No' id='form1' type='text' /></td>
        </tr>
        <tr>
          <th scope='row'>Voter Id</th>
          <td><MDBCheckbox name='flexCheck' value='' id='flexCheckDefault'  /></td>
          <td><MDBCheckbox name='flexCheck' value='' id='flexCheckDefault'  /></td>
          <td><input type="file" class="form-control-file" id="exampleFormControlFile1"></input></td>
          <td><input type="date" class="form-control-file" id="exampleFormControlFile1"></input></td>
          <td><MDBInput value='Document No' id='form1' type='text' /></td>
        </tr>
        <tr>
          <th scope='row'>Driving License</th>
          <td><MDBCheckbox name='flexCheck' value='' id='flexCheckDefault'  /></td>
          <td><MDBCheckbox name='flexCheck' value='' id='flexCheckDefault'  /></td>
          <td><input type="file" class="form-control-file" id="exampleFormControlFile1"></input></td>
          <td><input type="date" class="form-control-file" id="exampleFormControlFile1"></input></td>
          <td><MDBInput value='Document No' id='form1' type='text' /></td>
        </tr>
        <tr>
          <th scope='row'>Ration Card</th>
          <td><MDBCheckbox name='flexCheck' value='' id='flexCheckDefault'  /></td>
          <td><MDBCheckbox name='flexCheck' value='' id='flexCheckDefault'  /></td>
          <td><input type="file" class="form-control-file" id="exampleFormControlFile1"></input></td>
          <td><input type="date" class="form-control-file" id="exampleFormControlFile1"></input></td>
          <td><MDBInput value='Document No' id='form1' type='text' /></td>
        </tr>
      </MDBTableBody>
    </MDBTable>
        
      </MDBCardBody>
    </MDBCard>
    <br></br>
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Employee details</MDBCardTitle>
        <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Employed' inline />
        <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Business' inline />
        <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Unemployed' inline />
        <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='House Wife' inline />
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