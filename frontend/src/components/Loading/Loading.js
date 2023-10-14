import React from "react";
import { Container, CssBaseline, Box, CircularProgress } from "@mui/material";

function Loading() {
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
        <CircularProgress />
      </Box>
    </Container>
  );
}

export default Loading;
