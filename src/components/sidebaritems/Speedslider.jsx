import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
export default function Speedslider({setspeed,disabled}) {
  return (
    <Box width={300}>
    <Typography id="input-slider" gutterBottom>
       Speed: 
    </Typography>
     
      <Slider disabled = {disabled} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" 
      onChange={(e) => {

        console.log((100 - e.target.value) / 100);
        
        setspeed((100 - e.target.value) / 100)
      }}/>
    </Box>
  );
}