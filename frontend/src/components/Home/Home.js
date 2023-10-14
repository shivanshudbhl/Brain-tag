import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

function TopCard() {
  return (
    <Paper
      sx={{
        position: "relative",
        color: "#fff",
        m: 2,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(https://blog.qburst.com/wp-content/uploads/2019/08/Food-Image-Detector.jpg)`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.9)",
        }}
      />
      <Grid container>
        <Grid item md={3} />
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              textAlign: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              color="inherit"
              gutterBottom
            >
              AI + WEB
            </Typography>
            <Typography variant="p" color="inherit" paragraph>
              The easiest deep learning AI ecosystem for developers, data
              scientists, and no-code operators to run multiple see real time
              deep learning models
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

function Home() {
  return (
    <main>
      <TopCard />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
             BrainTag
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Create a account and Start using Deep Learning models on the Go on
            your favorite piece of data!
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" sx={{ pl: 4, pr: 4 }}>
              <Link
                to="/models"
                style={{ color: "white", textDecoration: "none" }}
              >
                Models
              </Link>
            </Button>
          </Stack>
        </Container>
      </Box>
    </main>
  );
}

export default Home;
