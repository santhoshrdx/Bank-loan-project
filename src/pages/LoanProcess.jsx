import 'bootstrap/dist/css/bootstrap.min.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Grid, Paper, TextField, Typography,MenuItem,Select } from '@mui/material';
import React from 'react';
import Sidebar from '../component/Menubar/Sidebar';




function Loan() {
  const [selectedOption, setSelectedOption] = React.useState('');
  const [selectedPurity, setSelectedPurity] = React.useState('');
  const [selectedpayment, setSelectedpayment] = React.useState('');
  const [selectedscheme, setSelectedscheme] = React.useState('');



  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlePurityChange = (event) => {
    setSelectedPurity(event.target.value);
  };
  const handlepaymentChange = (event) => {
    setSelectedpayment(event.target.value);
  };
  
  const handleChange1 = (event) => {
    setSelectedscheme(event.target.value);
  };

  
  const paperStyle={padding:20,height:'50vh',width:1000, margin:"10px 300px "}

  const paperStyle1={padding:20,height:'90vh',width:1000, margin:"10px 300px "}

  const paperStyle2={padding:20,height:'178vh',width:1000, margin:"10px 300px "}

  const paperStyle3={padding:20,height:'125vh',width:1000, margin:"10px 300px "}
  
  


  return (
    
    <div style={{display:'flex',height:'100vh'}}>
         <Sidebar/>
    <div style={{flex: 1,overflow:'auto',paddingLeft:'1px',display:'flex'}}>
       
   <form>
      <Grid container justifyContent="center">
      <Paper elevation={20} style={paperStyle3}>
        <Typography variant="h6">Loan Details</Typography>
        <hr style={{ border: 'none', borderBottom: '1px solid black', marginBottom: '1rem' }} />
        <Grid item style={{ marginTop: '0.4in' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Typography  style={{ marginBottom: '0.5rem' }} > Customer Name(Id) </Typography>
              <TextField
                fullWidth
               placeholder="Customer"
                inputProps={{ style: { textAlign: 'left' } }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
            <Typography style={{ marginBottom: '0.5rem' }}>Loan No</Typography>
              <TextField
                fullWidth
               placeholder="Address"
                inputProps={{ style: { textAlign: 'left' } }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
            <Typography style={{ marginBottom: '0.5rem' }}> Receipt No. </Typography>
              <TextField
                fullWidth
                
                
                placeholder="Receipt No."
                inputProps={{ style: { textAlign: 'left' } }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
      <Typography style={{ marginBottom: '0.5rem' }}>Scheme</Typography>
      <Select
        fullWidth
       
        value={selectedOption}
        onChange={handleChange}
        displayEmpty
        inputProps={{ style: { textAlign: 'left' } }}
      >
        <MenuItem value="" disabled>
          Select an option
        </MenuItem>
        <MenuItem value="option1">Compounding</MenuItem>
        <MenuItem value="option2">Compounding</MenuItem>
        <MenuItem value="option3">Compounding</MenuItem>
        <MenuItem value="option4">Compounding</MenuItem>
        <MenuItem value="option5">Compounding</MenuItem>
        <MenuItem value="option6">Compounding</MenuItem>
        <MenuItem value="option7">Standard</MenuItem>
        <MenuItem value="option8">Standard</MenuItem>
        <MenuItem value="option9">Standard</MenuItem>
        <MenuItem value="option10">Standard</MenuItem>
        <MenuItem value="option11">Standard</MenuItem>
        
      </Select>
    </Grid>
    <Grid item xs={12} sm={4}>
        <Typography >Loan Date</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Loan Date" />
      </DemoContainer>
    </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Typography style={{ marginBottom: '0.5rem' }}> Today Gold Rate</Typography>
              <TextField
                fullWidth
               
                
                placeholder="Today Gold Rate"
                inputProps={{ style: { textAlign: 'left' } }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
            <Typography style={{ marginBottom: '0.5rem' }}> Loan Amount</Typography>
              <TextField
                fullWidth
                
                
                placeholder="Loan Amount"
                inputProps={{ style: { textAlign: 'left' } }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
            <Typography style={{ marginBottom: '0.5rem' }}>Charges</Typography>
              <TextField
                fullWidth
                
               
                placeholder="Charges"
                inputProps={{ style: { textAlign: 'left' } }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
            <Typography style={{ marginBottom: '0.5rem' }}>Additional Charges</Typography>
              <TextField
                fullWidth
               
                
                placeholder="Additional Charges"
                inputProps={{ style: { textAlign: 'left' } }}
              />
            </Grid>
           
            <Grid item xs={12} sm={4}>
            <Typography style={{ marginBottom: '0.5rem' }}> Payment Type </Typography>
            <Select
                
                value={selectedPurity}
                onChange={handlePurityChange}
               
                fullWidth
                margin='normal'
                inputProps={{ style: { textAlign: 'left' } }}
              >
                <MenuItem value="option1">Part Payment</MenuItem>
                <MenuItem value="option2">Settlement</MenuItem>
                
                
              </Select>
            </Grid>
            <Grid item xs={12} sm={3}>
            <Typography style={{ marginBottom: '0.5rem' }}>Amount</Typography>
              <TextField
                fullWidth
                
                
                placeholder="Amount"
                inputProps={{ style: { textAlign: 'left' } }}
              />
            </Grid>
             <Grid item xs={12} sm={3}>
            <Typography style={{ marginBottom: '0.5rem' }}>Receipt No.</Typography>
              <TextField
                fullWidth
                
                
                placeholder="Receipt No."
                inputProps={{ style: { textAlign: 'left' } }}
              />
            </Grid>
            <Grid item xs={12} sm={10}>
            <Typography style={{ marginBottom: '0.5rem' }}>Final Amount</Typography>
              <TextField
                fullWidth
                 placeholder="Final Amount"
                inputProps={{ style: { textAlign: 'left' } }}
              />
            </Grid>
            
        <Grid item xs={12} sm={4}>
            <Typography style={{ marginBottom: '0.5rem' }}> Due Days </Typography>
            <Select
                
                value={selectedPurity}
                onChange={handlePurityChange}
               
                fullWidth
                margin='normal'
                inputProps={{ style: { textAlign: 'left' } }}
              >
                <MenuItem value="option1">3 Month</MenuItem>
                <MenuItem value="option2">6 Month</MenuItem>
                <MenuItem value="option3">1 Year</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={4}>
        <Typography >Date</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Choose Date" />
      </DemoContainer>
    </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography style={{ marginBottom: '0.5rem' }}> Remarks</Typography>
          <TextField
            fullWidth
           
            placeholder="Remarks"
            inputProps={{ style: { textAlign: 'left' } }}
          />
        </Grid>


          </Grid>
        </Grid>
      </Paper>
    </Grid>

      </form>
      <form>
      <Grid container justifyContent="center">
      <Paper elevation={20} style={paperStyle}>
        <Typography variant="h6">Address Details</Typography>
        <hr style={{ border: 'none', borderBottom: '1px solid black', marginBottom: '1rem' }} />
        <Grid item style={{ marginTop: '0.4in' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography  style={{ marginBottom: '0.5rem' }} > C/O </Typography>
              <TextField
                fullWidth
                
                
                placeholder="Employee Name"
                inputProps={{ style: { textAlign: 'left' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography style={{ marginBottom: '0.5rem' }}> Address </Typography>
              <TextField
                fullWidth
                
                
                placeholder="Address"
                inputProps={{ style: { textAlign: 'left' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography style={{ marginBottom: '0.5rem' }}> Area </Typography>
              <TextField
                fullWidth
                
                placeholder="Area"
                inputProps={{ style: { textAlign: 'left' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography style={{ marginBottom: '0.5rem' }}> Mobile No </Typography>
              <TextField
                fullWidth
                type='number'
                
                placeholder="Mobile No"
                inputProps={{ style: { textAlign: 'left' } }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>

      </form>

      <form>
      <Grid container justifyContent="center">
      <Paper elevation={20} style={paperStyle1}>
        <Typography variant="h6">Jewels Details</Typography>
        <hr style={{ border: 'none', borderBottom: '1px solid black', marginBottom: '1rem' }} />
        <Grid item style={{ marginTop: '0.4in' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography  style={{ marginBottom: '0.5rem' }} > Jewel Type </Typography>
              <Select
                
                value={selectedOption}
                onChange={handleChange}
                
                fullWidth
                margin='normal'
                inputProps={{ style: { textAlign: 'left' } }}
              >
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography style={{ marginBottom: '0.5rem' }}> Purity </Typography>
            <Select
                
                value={selectedPurity}
                onChange={handlePurityChange}
                
                fullWidth
                margin='normal'
                inputProps={{ style: { textAlign: 'left' } }}
              >
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography style={{ marginBottom: '0.5rem' }}> Count </Typography>
              <TextField
                fullWidth
                
                placeholder="Count"
                inputProps={{ style: { textAlign: 'left' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography style={{ marginBottom: '0.5rem' }}> Mobile No </Typography>
              <TextField
                fullWidth
                type='number'
                label="Mobile No"
                
                placeholder="Mobile No"
                inputProps={{ style: { textAlign: 'left' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography style={{ marginBottom: '0.5rem' }}> Stone Weight </Typography>
              <TextField
                fullWidth
                
               
                placeholder="Area"
                inputProps={{ style: { textAlign: 'left' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography style={{ marginBottom: '0.5rem' }}> Wastage </Typography>
              <TextField
                fullWidth
                label="Wastage"
                
                placeholder="Wastage"
                inputProps={{ style: { textAlign: 'left' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography style={{ marginBottom: '0.5rem' }}> Net Weight </Typography>
              <TextField
                fullWidth
                
                
                placeholder="Net Weight"
                inputProps={{ style: { textAlign: 'left' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography style={{ marginBottom: '0.5rem' }}> Image  </Typography>
            
              <TextField
                fullWidth
                
               
                placeholder="Image"
                inputProps={{ style: { textAlign: 'left' } }}
              />
              
           </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>

      </form>

      <form>
      <Grid container justifyContent="center">
  <Paper elevation={20} style={paperStyle2}>
    <Typography variant="h6">Approved Loan</Typography>
    <hr style={{ border: 'none', borderBottom: '1px solid black', marginBottom: '1rem' }} />

    <Grid item style={{ marginTop: '0.4in' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography style={{ marginBottom: '0.5rem' }}>Customer Name(Id)</Typography>
          <TextField
            fullWidth
            
            placeholder="Customer"
            inputProps={{ style: { textAlign: 'left' } }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography style={{ marginBottom: '0.5rem' }}>Loan No</Typography>
          <TextField
            fullWidth
            
            placeholder="Loan No"
            inputProps={{ style: { textAlign: 'left' } }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography style={{ marginBottom: '0.5rem' }}>Receipt No</Typography>
          <TextField
            fullWidth
           
            placeholder="Receipt No."
            inputProps={{ style: { textAlign: 'left' } }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
      <Typography style={{ marginBottom: '0.5rem' }}>Scheme</Typography>
      <Select
        fullWidth
        value={selectedscheme}
        onChange={handleChange1}
        displayEmpty
        inputProps={{ style: { textAlign: 'left' } }}
      >
        <MenuItem value="" disabled>
          Select an option
        </MenuItem>
        <MenuItem value="option1">Compounding</MenuItem>
        <MenuItem value="option2">Compounding</MenuItem>
        <MenuItem value="option3">Compounding</MenuItem>
        <MenuItem value="option4">Compounding</MenuItem>
        <MenuItem value="option5">Compounding</MenuItem>
        <MenuItem value="option6">Compounding</MenuItem>
        <MenuItem value="option7">Standard</MenuItem>
        <MenuItem value="option8">Standard</MenuItem>
        <MenuItem value="option9">Standard</MenuItem>
        <MenuItem value="option10">Standard</MenuItem>
        <MenuItem value="option11">Standard</MenuItem>
        
      </Select>
    </Grid>
        <Grid item xs={12} sm={4}>
        <Typography >Date</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Choose Date" />
      </DemoContainer>
    </LocalizationProvider>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography style={{ marginBottom: '0.5rem' }}>Today Gold Rate</Typography>
          <TextField
            fullWidth
            
            placeholder="Today Gold Rate"
            inputProps={{ style: { textAlign: 'left' } }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography style={{ marginBottom: '0.5rem' }}>Loan Amount</Typography>
          <TextField
            fullWidth
            
            placeholder="Loan Amount"
            inputProps={{ style: { textAlign: 'left' } }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography style={{ marginBottom: '0.5rem' }}>Charges</Typography>
          <TextField
            fullWidth
            
            placeholder="Charges"
            inputProps={{ style: { textAlign: 'left' } }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography style={{ marginBottom: '0.5rem' }}>Additional Charges</Typography>
          <TextField
            fullWidth
          
            placeholder="Additional Charges"
            inputProps={{ style: { textAlign: 'left' } }}
          />
        </Grid>
       
        <Grid item xs={12} sm={6}>
            <Typography style={{ marginBottom: '0.5rem' }}> Payment Type </Typography>
            <Select
                
                value={selectedpayment}
                onChange={handlepaymentChange}
               
                fullWidth
                margin='normal'
                inputProps={{ style: { textAlign: 'left' } }}
              >
                <MenuItem value="option1">Part Payment</MenuItem>
                <MenuItem value="option2">Settlement</MenuItem>
                
                
              </Select>
            </Grid>
        <Grid item xs={12} sm={4}>
          <Typography style={{ marginBottom: '0.5rem' }}>Amount</Typography>
          <TextField
            fullWidth
           
            placeholder="Amount"
            inputProps={{ style: { textAlign: 'left' } }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography style={{ marginBottom: '0.4rem' }}>Receipt No</Typography>
          <TextField
            fullWidth

            placeholder="Receipt No."
            inputProps={{ style: { textAlign: 'left' } }}
          />
        </Grid>

        <Grid item xs={12} sm={10} >
          <Typography style={{ marginBottom: '0.4rem' }}>Final Amount</Typography>
          <TextField
            
            fullWidth
           
            placeholder="Final Amount" 
            inputProps={{ style: { textAlign: 'left' } }}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Typography style={{ marginBottom: '0.5rem' }}>Due Dates</Typography>
          <TextField
            fullWidth
            
            placeholder="Days"
            inputProps={{ style: { textAlign: 'left' } }}
          />
        </Grid>
        <Grid item xs={11} sm={6}>
          <Typography>Date</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Choose Date" />
      </DemoContainer>
    </LocalizationProvider>
    
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography style={{ marginBottom: '0.5rem' }}> Stone</Typography>
          <TextField
            fullWidth
            
            placeholder="stone"
            inputProps={{ style: { textAlign: 'left' } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography style={{ marginBottom: '0.5rem' }}> Remarks</Typography>
          <TextField
            fullWidth
            
            placeholder="Remarks"
            inputProps={{ style: { textAlign: 'left' } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography style={{ marginBottom: '0.5rem' }}> Wastage</Typography>
          <TextField
            fullWidth
            
            placeholder="Wastage"
            inputProps={{ style: { textAlign: 'left' } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography style={{ marginBottom: '0.5rem' }}> Count </Typography>
          <TextField
            fullWidth
           
            placeholder="Count"
            inputProps={{ style: { textAlign: 'left' } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography style={{ marginBottom: '0.5rem' }}> Cross Weight </Typography>
          <TextField
            fullWidth
            
            placeholder="Cross Weight"
            inputProps={{ style: { textAlign: 'left' } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography style={{ marginBottom: '0.5rem' }}> Net Weight </Typography>
          <TextField
            fullWidth
            
            placeholder="Net Weight"
            inputProps={{ style: { textAlign: 'left' } }}
          />
        </Grid>
        
    
        

      </Grid>
    </Grid>
  </Paper>
</Grid>

      </form>


      </div>
      </div>
   
  );
}

export default Loan;