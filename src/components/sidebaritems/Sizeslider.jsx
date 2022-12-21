import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
export default function Sizeslider({setsize,disabled}) {
  return (
    <Box width={300}>
      <Typography id="input-slider" gutterBottom>
        Range:
      </Typography>
      {/* <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      /> */}
      <Slider
        disabled = {disabled}
        defaultValue={25}
        min={20}
        max={70}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={(e) => setsize(e.target.value)}
      />
    </Box>
  );
}
