import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

const styles = {
  big:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height:200,
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    },
  
  box:{
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  }, 
  cl:{
   height:20,
   fontSize:10,
   
  },
};

export default function GoldRateUpdate() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  return (
    <div>
      <div>
    <Box sx={styles.big}>  
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
           <Button variant="contained" color="error" sx={styles.cl}>x</Button>
           </div>
           </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
        Today's Gold Rate     
      </div>
    </div>
    <Divider />
    <br/>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <div style={{ display: 'flex', justifyContent: 'flex-center', marginTop: '10px' }}>
    <Button onClick={handleOpen} variant="outlined" >
       Morning Gold Rate
      </Button>
      <span style={{ marginRight: '50px' }}></span>
      <Button onClick={handleOpen} variant="outlined">
       Evening Gold Rate
      </Button>
    </div> 
    </div>
    </Box>
      </div> 
         
  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={styles.box}>
        <Typography id="modal-modal-title" variant="h6" component="h5">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
           <Button variant="contained" color="error" sx={styles.cl}>x</Button>
           </div>
           </div>
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b>Gold Rate:</b>
          </Typography>
          <Divider />
          <br/>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <span style={{ marginRight: '10px' }}>22carat:</span>
          <TextField placeholder="Enter" variant="standard" />
            <span style={{ marginRight: '50px' }}></span>
            <span style={{ marginRight: '10px' }}>24carat:</span>
          <TextField placeholder="Enter" variant="standard" />
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h5">
            <br/>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
           <Button variant="contained" color="success" sx={styles.cl} style={{ marginRight: '10px'}}>submit</Button>
           <Button variant="contained" color="error" sx={styles.cl}>close</Button>
           </div>
           </div>
          </Typography>
        </Box>
    </Modal>   
    </div>
  );
}