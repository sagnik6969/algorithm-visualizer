import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
export default function Header() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Algorithm Visualizer
        </Typography>
        <IconButton
          color="inherit"
          onClick={() => window.open("https://github.com/sagnik6969/algorithm-visualizer/")}
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    // </Box>
  );
}
