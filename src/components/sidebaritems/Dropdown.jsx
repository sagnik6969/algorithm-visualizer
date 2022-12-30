import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown({setalgoidx,disabled}) {
  // const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setalgoidx(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <Select
          disabled = {disabled}
          defaultValue={'1'}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          
          <MenuItem value={1}>Bubble Sort</MenuItem>
          <MenuItem value={2}>Insertion Sort</MenuItem>
          <MenuItem value={3}>Selection Sort</MenuItem>
          <MenuItem value={4}>Marge Sort</MenuItem>
          <MenuItem value={5}>Quick Sort</MenuItem>
          <MenuItem value={6}>Heap Sort</MenuItem>

        </Select>
      </FormControl>
    </div>
  );
}