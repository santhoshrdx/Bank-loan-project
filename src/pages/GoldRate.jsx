import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Form, Row } from 'react-bootstrap';
import Card from '@mui/material/Card';
export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
      
       
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Morning Gold Rate
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 6}}>
        <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-4">
            <Form.Label>22 Carat</Form.Label>
            <Form.Control type="name" name="first_name" value="Today GoldRate "required  onChange="{handleChange}" className="gold1" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="col col-sm-4">
            <Form.Label>24 Carat</Form.Label>
            <Form.Control type="name" name="last_name" value="Today GoldRate" required onChange="{handleChange}" className="gold2" />
        </Form.Group>
    </Row>
        </Typography>
      </Popover>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Evening Gold Rate
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 6}}>
        <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-4">
            <Form.Label>22 Carat</Form.Label>
            <Form.Control type="name" name="first_name" value="Today GoldRate "required  onChange="{handleChange}" className="gold1" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="col col-sm-4">
            <Form.Label>24 Carat</Form.Label>
            <Form.Control type="name" name="last_name" value="Today GoldRate" required onChange="{handleChange}" className="gold2" />
        </Form.Group>
    </Row>
        </Typography>
      </Popover>
      </Card>
    </div>
    
 
  );
}
