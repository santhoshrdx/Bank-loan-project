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
import {MDBTable, MDBTableHead, MDBTableBody ,MDBInput,
  } from 'mdb-react-ui-kit';
  const CustomerRegistration = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [customerData, setCustomerData] = useState({
      customer_name: '',
      new_loan_id:'',
      receipt_no: '',
      total_grams: '',
      count: '',
      today_gold_rate: '',
      settlement_amount: '',
      repledge_amount: '',
      previous_balance: '',
      payment_type: '',
      amount: '',
      additional_field: '',
      charges: '',
      additional_charges: '',
      final_amount: '',
      address:'',
      area:'',
      mobile_no:'',

    });
    const handleChange = (event) => {
      setCustomerData({
        ...customerData,
        [event.target.name]: event.target.value
      });
      
    };
    const paperStyle={padding:2,height:'300vh',width:1000, margin: '10px 300px' }
    
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('customer_image', selectedImage);
      formData.append('customer_name', customerData.customer_name);
      formData.append('new_loan_id', customerData.new_loan_id);
      formData.append('receipt_no', customerData.receipt_no);
      formData.append('total_grams', customerData.total_grams);
      formData.append('count', customerData.count);
      formData.append('today_gold_rate', customerData.today_gold_rate);
      formData.append('settlement_amount', customerData.settlement_amount);
      formData.append('repledge_amount', customerData.repledge_amount);
      formData.append('previous_balance', customerData.previous_balance);
      formData.append('payment_type', customerData.payment_type);
      formData.append('amount', customerData.amount);
      formData.append('additional_field', customerData.additional_field);
      formData.append('charges', customerData.charges);
      formData.append('additional_charges', customerData.additional_charges);
      formData.append('final_amount', customerData.final_amount);
      formData.append('address', customerData.address);
      formData.append('area', customerData.area);
      formData.append('mobile_no', customerData.mobile_no);
      axios.post('http://localhost:8000/api//customer', formData)
        .then(() => {
        })
        .catch(() => {
        });
        const { name, value } = event.target;
        setCustomerData(prevData => ({
          ...prevData,
          [name]: value
        }));
      }; 
  return (
    <div style={{display:'flex',height:'100vh'}} >
      <Sidebar />
      <div style={{flex: 1,overflow:'auto',paddingLeft:'1px',display:'flex'}}>
        <form>
        <Paper elevation={20} style={paperStyle}>
          <br></br>
       <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Customer</h5> 
       <br></br>
       <br></br>
      
       <Row className="mb-3">
    &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group  className="col col-sm-5">
            <Form.Label>Customer Name/Id</Form.Label>
            <input type="text" class="form-control" placeholder="Customer Name(ID)" aria-label="Username" aria-describedby="basic-addon1" name="customer_name" value={customerData.customer_name} onchange={handleChange}/>
        </Form.Group>
        <Form.Group  className="col col-sm-3">
            <Form.Label>New Loan ID</Form.Label>
            <input type="text" class="form-control" placeholder="New Loan ID" aria-label="Username" aria-describedby="basic-addon1" name="new_loan_id" value={customerData.new_loan_id}  onchange={handleChange}/>
        </Form.Group>
        <Form.Group  className="col col-sm-3">
            <Form.Label>Receipt No.</Form.Label>
            <input type="text" class="form-control" placeholder="Receipt No." aria-label="Username" aria-describedby="basic-addon1" name="receipt_no" value={customerData.receipt_no} onchange={handleChange} />
        </Form.Group>   
    </Row>
    <Row className="mb-3">
    &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group  className="col col-sm-5">
            <Form.Label>Total Grams</Form.Label>
            <input type="text" class="form-control" placeholder="Customer Name(ID)" aria-label="Username" aria-describedby="basic-addon1" name="total_grams" value={customerData.total_grams} onchange={handleChange}/>
        </Form.Group>
        <Form.Group  className="col col-sm-3">
            <Form.Label>Count </Form.Label>
            <input type="text" class="form-control" placeholder="Count" aria-label="Username" aria-describedby="basic-addon1" name="count" value={customerData.count} onchange={handleChange}/>
        </Form.Group>
        <Form.Group  className="col col-sm-3">
            <Form.Label>Today Gold Rate</Form.Label>
            <input type="text" class="form-control" placeholder="Today Gold Rate" aria-label="Username" aria-describedby="basic-addon1" name=" today_gold_rate" value={customerData. today_gold_rate} onchange={handleChange}/>
        </Form.Group>   
    </Row>
    <Row className="mb-3">
    &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group  className="col col-sm-5">
            <Form.Label>Settlement Amount</Form.Label>
            <input type="text" class="form-control" placeholder="Settlement Amount" aria-label="Username" aria-describedby="basic-addon1" name="settlement_amount" value={customerData.settlement_amount} onchange={handleChange}/>
        </Form.Group>
        <Form.Group  className="col col-sm-6">
            <Form.Label>Repledge Amount</Form.Label>
            <input type="text" class="form-control" placeholder="New Loan ID" aria-label="Username" aria-describedby="basic-addon1"name="repledge_amount" value={customerData.repledge_amount} onchange={handleChange} />
        </Form.Group>
    </Row>
    <Row className="mb-2">
    &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group className="col col-sm-3">
    <Form.Label>Previous Balance</Form.Label>
    <input type="text" className="form-control" placeholder="Previous Balance" aria-label="Previous Balance" aria-describedby="basic-addon1" name="previous_balance" value={customerData.previous_balance} onchange={handleChange} />
  </Form.Group>

  <Form.Group className="col col-sm-3">
    <Form.Label>Payment Type</Form.Label>
    <Select
      id="demo-simple-select"
      name="payment_type"
      value={customerData.payment_type}
      label="Payment Type"
      onChange={handleChange}
      style={{ minWidth: '160px', height: '38px' }}
    >
      <MenuItem value="Settlement">Settlement</MenuItem>
      <MenuItem value="Partpayment">Partpayment</MenuItem>
    </Select>
  </Form.Group>

  <Form.Group className="col col-sm-3">
    <Form.Label>Amount</Form.Label>
    <input type="text" className="form-control" placeholder="Amount" aria-label="Amount" aria-describedby="basic-addon1" name="amount" value={customerData.amount} onchange={handleChange}/>
  </Form.Group>

  <Form.Group className="col col-sm-2">
    <Form.Label>Additional Field</Form.Label>
    <input type="text" className="form-control" placeholder="Additional Field" aria-label="Additional Field" aria-describedby="basic-addon1" name="additional_field" value={customerData.additional_field} onchange={handleChange} />
  </Form.Group>
</Row>
<Row className="mb-3">
    &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group  className="col col-sm-5">
            <Form.Label>Charges</Form.Label>
            <input type="text" class="form-control" placeholder="Charges" aria-label="Username" aria-describedby="basic-addon1" name="charges" value={customerData.charges} onchange={handleChange}/>
        </Form.Group>
        <Form.Group  className="col col-sm-3">
            <Form.Label>Additional Charges </Form.Label>
            <input type="text" class="form-control" placeholder="Additional Charges" aria-label="Username" aria-describedby="basic-addon1" name="additional_charges" value={customerData.additional_charges} onchange={handleChange}/>
        </Form.Group>
        <Form.Group  className="col col-sm-3">
            <Form.Label>Final Amount</Form.Label>
            <input type="text" class="form-control" placeholder="Final Amount" aria-label="Username" aria-describedby="basic-addon1" name="final_amount" value={customerData.final_amount} onchange={handleChange}/>
        </Form.Group>   
    </Row>
    <Row className="mb-3">
  <Form.Group className="col col-sm-5 d-flex justify-content-end">
    <button onClick={handleSubmit} className="me-4 btn btn-success btn-lg">Submit</button>
  </Form.Group>
</Row>   

        <br></br>
       
          <br></br>
       <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Address Details</h5> 
       <br></br>
       <br></br>
      
       <Row className="mb-3">
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Form.Group  className="col col-sm-6">
            <Form.Label>C/O</Form.Label>
            <input type="text" class="form-control" placeholder="Employee Name" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
        <Form.Group  className="col col-sm-5">
            <Form.Label>Address</Form.Label>
            <input type="text" class="form-control" placeholder="Address" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
          
    </Row>
    <Row className="mb-3">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Form.Group  className="col col-sm-6">
            <Form.Label>Area</Form.Label>
            <input type="text" class="form-control" placeholder="Area" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
        <Form.Group  className="col col-sm-5">
            <Form.Label>Mobile No</Form.Label>
            <input type="text" class="form-control" placeholder="Mobile No" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
          
    </Row>
   
        <br></br>
        <br></br>
       
        &nbsp;&nbsp;&nbsp;&nbsp;<h4>Address Details</h4> 
        <hr></hr>
        <MDBTable bordered small> {/* Add the 'small' prop to reduce the size of the table */}
  <MDBTableHead>
    <tr>
      <th scope='col'>S.No</th>
      <th scope='col'>ID</th>
      <th scope='col'>ORNAMENTS TYPE</th>
      <th scope='col'>CARAT</th>
      <th scope='col'>Count</th>
      <th scope='col'>Weight</th>
      <th scope='col'>Loan Amount</th>
      <th scope='col'>Paid Amount</th>
      <th scope='col'>Paid Date</th>
    </tr>
  </MDBTableHead>
  <MDBTableBody>
    <tr>
      <th scope='col-col-w-2'>
        <Box sx={{ m: 1 }}>
          <FormControl className="col col-sm-2">
            <Form.Group controlId="formGridNominee" className="col col-sm-3">
              <td><input type="checkbox" className="form-control-file" id="exampleFormControlFile1" /></td>
            </Form.Group>
          </FormControl>
        </Box>
      </th>
      <td><MDBInput type='text' name="Document_number" value={customerData.Document_number} onChange={handleChange}  /> </td>
      <td>
        <Box sx={{ m: 1  }}>
          <FormControl className="col col-sm-2">
            <Form.Group controlId="formGridNominee" className="col col-sm-2">
              <InputLabel id="demo-simple-select-label">ORNAMENTS TYPE</InputLabel>
              <Select
                id="demo-simple-select"
                value={customerData.Document_type}
                label="Document type"
                name="Document_type"
                onChange={handleChange}
                style={{ minWidth: '50px', height: '20px' }}
              >
                <MenuItem value="Necklace">Necklace</MenuItem>
                <MenuItem value="Bracelet">Bracelet</MenuItem>
                <MenuItem value="Bangles">Bangles</MenuItem>
                <MenuItem value="Ring">Ring</MenuItem>
                <MenuItem value="Earning">Earning</MenuItem>
              </Select>
            </Form.Group>
          </FormControl>
        </Box>
      </td>
      <td><MDBInput type='text' name="Document_number" value={customerData.Document_number} onChange={handleChange}  /> </td>
      <td><MDBInput type='text' name="Document_number" value={customerData.Document_number} onChange={handleChange}  /></td>
    
      <td><MDBInput type='number' name="Document_number" value={customerData.Document_number} onChange={handleChange}  /></td>   
    
    
    
      <td><MDBInput type='number' name="Document_number" value={customerData.Document_number} onChange={handleChange} /></td> 
      <td><MDBInput type='number' name="Document_number" value={customerData.Document_number} onChange={handleChange}  /></td> 
      <td><input type="date" className="form-control-file" id="exampleFormControlFile1" placeholder="Document number" name="Expire_date" value={customerData.Expire_data} /></td>
    </tr>
  </MDBTableBody>
</MDBTable>
   
        &nbsp;&nbsp;&nbsp;&nbsp;<h3>  &nbsp;&nbsp;&nbsp;&nbsp;Approved Loan</h3>
            <hr></hr>
        <Row className="mb-3">
    &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group  className="col col-sm-5">
            <Form.Label>Customer Name/Id</Form.Label>
            <input type="text" class="form-control" placeholder="Customer Name(ID)" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
        <Form.Group  className="col col-sm-3">
            <Form.Label>New Loan ID</Form.Label>
            <input type="text" class="form-control" placeholder="Loan ID" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
        <Form.Group  className="col col-sm-3">
            <Form.Label>Receipt No.</Form.Label>
            <input type="text" class="form-control" placeholder="Receipt No." aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>   
    </Row>
    <Row className="mb-3">
    &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group  className="col col-sm-5">
            <Form.Label>Total Grams</Form.Label>
            <input type="text" class="form-control" placeholder="Total Grams" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
        <Form.Group  className="col col-sm-3">
            <Form.Label>Count</Form.Label>
            <input type="number" class="form-control" placeholder="Count" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
        <Form.Group  className="col col-sm-3">
            <Form.Label>Today Gold Rate</Form.Label>
            <input type="text" class="form-control" placeholder="Today Gold Rate" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>   
    </Row>
    <Row className="mb-3">
    &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group  className="col col-sm-5">
            <Form.Label>Settlement Amount</Form.Label>
            <input type="text" class="form-control" placeholder="Settlement Amount" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
        <Form.Group  className="col col-sm-5">
            <Form.Label>Repledge Amount</Form.Label>
            <input type="number" class="form-control" placeholder="Repledge Amount" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>  
    </Row>
    <Row className="mb-3">
    &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group  className="col col-sm-3">
            <Form.Label>Previous Balance</Form.Label>
            <input type="text" class="form-control" placeholder="Privious Balance" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
        <Form.Group className="col col-sm-3">
    <Form.Label>Payment Type</Form.Label>
    <Select
      id="demo-simple-select"
      name="care_of_type"
      value={customerData.care_of_type}
      label="Document"
      onChange={handleChange}
      style={{ minWidth: '160px', height: '38px' }}
    >
      <MenuItem value="Settlement">Settlement</MenuItem>
      <MenuItem value="Partpayment">Partpayment</MenuItem>
    </Select>
  </Form.Group>
  &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group  className="col col-sm-2">
            <Form.Label>Amount</Form.Label>
            <input type="number" class="form-control" placeholder="Amount" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
        &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group  className="col col-sm-2">
            <Form.Label>Receipt No.</Form.Label>
            <input type="text" class="form-control" placeholder="Receipt No." aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
    </Row>
    <Row className="mb-3">
    &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group  className="col col-sm-5">
            <Form.Label>Charges</Form.Label>
            <input type="text" class="form-control" placeholder="Charges" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
        <Form.Group  className="col col-sm-3">
            <Form.Label>Additional Charges</Form.Label>
            <input type="number" class="form-control" placeholder="Additional Charges" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
        <Form.Group  className="col col-sm-3">
            <Form.Label>Final Amount</Form.Label>
            <input type="number" class="form-control" placeholder="Final Amount" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>  
        </Row> 
        <Row className="mb-3">
        <Form.Group className="col col-sm-5 d-flex justify-content-end">
        <input type="checkbox" className="form-control-file" id="exampleFormControlFile1" />&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={handleSubmit} className="me-4 btn btn-success btn-lg">Approved</button><button
  onClick={handleSubmit}className="me-4 btn btn-success btn-lg"style={{ backgroundColor: 'red', color: 'white' }}>Rejected</button>
  </Form.Group>
  <Form.Group  className="col col-sm-3">
            <Form.Label>Remark</Form.Label>
            <input type="number" class="form-control" placeholder="Remark" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
        
  </Row>
  
        &nbsp;&nbsp;&nbsp;&nbsp;<h3>  &nbsp;&nbsp;&nbsp;&nbsp;Denominations</h3>
        <br></br>
        <Row className="mb-3">
    &nbsp;&nbsp;&nbsp;&nbsp;<Form.Group  className="col col-sm-6">
            <Form.Label>PayType</Form.Label><br></br>
            <Select
      id="demo-simple-select"
      name="care_of_type"
      value={customerData.care_of_type}
      label="Document"
      onChange={handleChange}
      style={{ minWidth: '160px', height: '38px' }}
    >
      <MenuItem value="Cash">Cash</MenuItem>
      <MenuItem value="Cheque">Cheque</MenuItem>
    </Select>
        </Form.Group>


        <Form.Group  className="col col-sm-5">
            <Form.Label>Total Amount</Form.Label>
            <input type="text" class="form-control" placeholder="Total Amount" aria-label="Username" aria-describedby="basic-addon1"/>
        </Form.Group>
        </Row>
      
       
        </Paper>
        </form>
    </div> 
    </div>
  );

}
    export default CustomerRegistration;