import  React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function  State() {
  const [Statee, setStatee] = React.useState('');

  const handleChange = (event) => {
    setStatee(event.target.value);
  };

  return (
    <Box sx={{ minWidth:5 }}>
      <FormControl className="col col-sm-4">
        <InputLabel id="demo-simple-select-label">state</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Statee}
          label="statee"
          onChange={handleChange}
        >
          <MenuItem value="USA">tamilnadu</MenuItem>
          <MenuItem value="INDIA">karnataka</MenuItem>
          <MenuItem value="RUSSIA">andhrapradesh</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}