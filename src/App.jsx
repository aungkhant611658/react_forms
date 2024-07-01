import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, TextField } from "@mui/material";
import Signup from "./components/Signup";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }} mt={2}>
      <Grid container spacing={2}>
        <Grid item xs={0} sm={1} md={1.5} lg={2.5}></Grid>

        <Grid item xs={12} sm={10} md={9} lg={7}>
          <Signup />
        </Grid>

        <Grid item xs={0} sm={1} md={1.5} lg={2.5}></Grid>
      </Grid>
    </Box>
  );
}

export default App;
