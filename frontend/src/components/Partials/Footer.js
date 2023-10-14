import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography>
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/ivaibhavjindal/smart-brain/"
        underline="none"
      >
        {`BrainTag ${new Date().getFullYear()}`}
      </Link>
    </Typography>
  );
}

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: "auto",
        textAlign: "center",
        backgroundColor: "#1976d2",
        color: "white",
      }}
    >
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
