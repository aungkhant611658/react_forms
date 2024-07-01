import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card } from "@mui/material";

export default function Signup() {
  return (
    <Card sx={{ padding: 3 }}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
        textAlign={"center"}
      >
        <div>
          <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            size="small"
          />
        </div>
        <div>
          <TextField
            error
            id="filled-error"
            label="Error"
            defaultValue="Hello World"
            variant="filled"
            size="small"
          />
          <TextField
            error
            id="filled-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="filled"
            size="small"
          />
        </div>
      </Box>
    </Card>
  );
}
