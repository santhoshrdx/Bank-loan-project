import  React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function  BasicSelect() {
  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Box sx={{ minWidth:5 }}>
      <FormControl className="col col-sm-4">
        <InputLabel id="demo-simple-select-label">city</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="city"
          onChange={handleChange}
        >
          <MenuItem value="tenkasi">tenkasi</MenuItem>
          <MenuItem value="madurai">madurai</MenuItem>
          <MenuItem value="kerala">thirunalveli</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}




//<Box sx={{ minWidth:5 }}>
//<FormControl className="col col-sm-4">