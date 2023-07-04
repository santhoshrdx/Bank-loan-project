import React, { useRef ,useState} from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import {Button, Form,Row} from 'react-bootstrap';
import Card from '@mui/material/Card';
import Sidebar from '../component/Menubar/Sidebar';
export default function Owner() {

  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const submit = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

 

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const rows = [
    createData(<input value="test" type="checkbox" />,<Switch {...label} defaultChecked /> , '', '', '', ''),
    createData(<input value="test" type="checkbox" />,<Switch {...label} defaultChecked /> , '', '', '', ''),
    createData(<input value="test" type="checkbox" />,<Switch {...label} defaultChecked /> , '', '', '', ''),
    createData(<input value="test" type="checkbox" />,<Switch {...label} defaultChecked /> , '', '', '', ''),
    createData(<input value="test" type="checkbox" />,<Switch {...label} defaultChecked />, '', '', '', ''),

  ];
  const takeSnapshot = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

 

      // Set the canvas dimensions to match the video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

 

      // Draw the current video frame onto the canvas 
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

 

      // Access the image data from the canvas as a base64-encoded string
      const imageData = canvas.toDataURL('image/png');

 

      // Perform any additional operations with the captured image data
      console.log(imageData);
    }
  };
  const paperStyle={padding: 2, height: '195vh',width: '1100',margin: '10px ',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}
  return (

  <div style={{display:'flex',height:'100vh'}} >
      <Sidebar/>
  <div style={{flex: 1,overflow:'auto',paddingLeft:'1px',display:'flex'}}>
<br></br>
<br></br>
<Paper elevation={20} style={paperStyle}>
<Card sx={{ w:470,ml:1 , bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.1000',
          border: '10px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,margin:'10',
           fontSize:15,
           }}>
<br></br>
<h5>&nbsp;&nbsp;Owner</h5>
<br></br>

 

      
&nbsp;&nbsp;&nbsp;<Button onClick={toggleShow}>LAUNCH DEMO MODAL</Button>
<br></br>
<br></br>
<MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
<MDBModalDialog>
<MDBModalContent>
<MDBModalHeader>
<MDBModalTitle>Bank Account</MDBModalTitle>
<MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
</MDBModalHeader>
<form>
<Row className="mb-3">
&nbsp;&nbsp;&nbsp;&nbsp;<Form.Group controlId="formBasicEmail" className="col col-sm-6">
<Form.Label>Bank Name</Form.Label>
<input type="text" class="form-control" placeholder="Bank Name" aria-label="Username" aria-describedby="basic-addon1"/>
</Form.Group>
<Form.Group controlId="formBasicEmail" className="col col-sm-5">
<Form.Label>Address</Form.Label>
<input type="text" class="form-control" placeholder="Address" aria-label="Username" aria-describedby="basic-addon1"/>
</Form.Group>

</Row>

<Row className="mb-3">
&nbsp;&nbsp;&nbsp;&nbsp;<Form.Group controlId="formBasicEmail" className="col col-sm-6">
<Form.Label>Phone No</Form.Label>
<input type="text" class="form-control" placeholder="Phone No" aria-label="Username" aria-describedby="basic-addon1"/>
</Form.Group>
<Form.Group controlId="formBasicEmail" className="col col-sm-5">
<Form.Label>Repledge Date</Form.Label>
<input type="Date" class="form-control" placeholder="Repledge Date" aria-label="Username" aria-describedby="basic-addon1"/>
</Form.Group>


</Row>
<Row className="mb-3">
&nbsp;&nbsp;&nbsp;&nbsp;<Form.Group controlId="formBasicEmail" className="col col-sm-6">
<Form.Label>Packet No</Form.Label>
<input type="text" class="form-control" placeholder="Total Grams" aria-label="Username" aria-describedby="basic-addon1"/>
</Form.Group>
<Form.Group controlId="Count" className="col col-sm-5">
<Form.Label>Customer Name</Form.Label>
<input type="text" class="form-control" placeholder="Count" aria-label="Username" aria-describedby="basic-addon1"/>
</Form.Group>

</Row>
<Row className="mb-3">
&nbsp;&nbsp;&nbsp;&nbsp;<Form.Group controlId="formBasicEmail" className="col col-sm-6">
<Form.Label>Total Weight</Form.Label>
<input type="text" class="form-control" placeholder="Repledge Amount" aria-label="Username" aria-describedby="basic-addon1"/>
</Form.Group>
<Form.Group controlId="formBasicEmail" className="col col-sm-5">
<Form.Label>Interest Rate</Form.Label>
<input type="text" class="form-control" placeholder="Interest Rate" aria-label="Username" aria-describedby="basic-addon1"/>
</Form.Group>
</Row>
<Row className="mb-3">
&nbsp;&nbsp;&nbsp;&nbsp;<Form.Group controlId="formBasicEmail" className="col col-sm-6">
<button onClick={submit}>WebCamera</button>
<button onClick={takeSnapshot}>Snap</button>
<video ref={videoRef} style={{ width: '50%', height: 'auto' }} />
<canvas ref={canvasRef} style={{ display: 'none' }} />
</Form.Group>   
</Row>
<Row className="mb-3">
&nbsp;&nbsp;&nbsp;&nbsp;<Form.Group controlId="formBasicEmail" className="col col-sm-10">
<Form.Label>Remarks</Form.Label>
<input type="text" class="form-control" placeholder="Remarks" aria-label="Username" aria-describedby="basic-addon1"/>
</Form.Group>
</Row>
</form>
<MDBModalFooter>
<Button color='secondary' onClick={toggleShow}>
                Close
</Button>
<Button>Save changes</Button>
</MDBModalFooter>
</MDBModalContent>
</MDBModalDialog>
</MDBModal>
</Card>

<br></br>
<Card sx={{ w:470,ml:1 , bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.1000',
          border: '10px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,margin:'10',
           fontSize:15,
           }}>
<TableContainer component={Paper}>
<Table sx={{ minWidth: 700 }} aria-label="caption table">
<TableHead>
<TableRow>
<TableCell><input value="test" type="checkbox" /> All</TableCell>
<TableCell align="right"></TableCell>
<TableCell align="right">BANK NAME</TableCell>
<TableCell align="right">ADDRESS&nbsp;</TableCell>
<TableCell align="right">PHONE NO&nbsp;</TableCell>
<TableCell align="right">REPLEDGE DATE&nbsp;</TableCell>
<TableCell align="right">TOTAL WEIGHT</TableCell>
<TableCell align="right">COUNT</TableCell>
<TableCell align="right">REPLEDGE AMOUNT&nbsp;</TableCell>
<TableCell align="right">INTEREST&nbsp;</TableCell>
<TableCell align="right">LOCKER&nbsp;</TableCell>
</TableRow>
</TableHead>
<TableBody>
          {rows.map((row) => (
<TableRow key={row.name}>
<TableCell component="th" scope="row">
                {row.name}
</TableCell>
<TableCell align="right">{row.calories}</TableCell>
<TableCell align="right">{row.fat}</TableCell>
<TableCell align="right">{row.carbs}</TableCell>
<TableCell align="right">{row.protein}</TableCell>
<TableCell align="right">{row.fat}</TableCell>
<TableCell align="right">{row.fat}</TableCell>
<TableCell align="right">{row.carbs}</TableCell>
<TableCell align="right">{row.protein}</TableCell>
<TableCell align="right">{row.fat}</TableCell>
<TableCell align="right">{row.carbs}</TableCell>
<TableCell align="right">{row.protein}</TableCell>
</TableRow>
          ))}
</TableBody>
</Table>
</TableContainer>

</Card>
</Paper>




</div>

</div>
  );
}