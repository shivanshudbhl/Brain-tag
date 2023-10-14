import React from "react";
import { Container, CssBaseline, Box, Alert, AlertTitle } from "@mui/material";

function Error({ error }) {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          <strong>This is an error alert!</strong>
          <p> {JSON.stringify(error)} </p>
        </Alert>
      </Box>
    </Container>
  );
}

export default Error;
