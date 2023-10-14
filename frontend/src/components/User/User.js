import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

function User(props) {
  const { isLoggedIn, error, isLoading, user } = props.user;

  if (!isLoggedIn) return <Error error={"Not Logged in!"} />;
  else if (isLoading) return <Loading />;
  else if (!user || error) return <Error error={error} />;

  const { firstName, lastName, imageModels, textModels, images } = user;
  const cards = [
    { text: "Image Classification/Predictions", count: imageModels },
    { text: "Text Classification/Predictions", count: textModels },
  ];
  const name = `${firstName} ${lastName}`;
  return (
    <main>
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
            {name}
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.text} xs={12} sm={6}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {`${card.text}: ${card.count}`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container sx={{ py: 4 }} maxWidth="lg">
        {images && images.length && (
          <Typography
            component="h3"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{ mb: 4 }}
          >
            Images
          </Typography>
        )}
        <Grid container spacing={4}>
          {images &&
            images.length &&
            images.map((img) => (
              <Grid item key={img} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250px"
                    image={img}
                    alt="random"
                  />
                  <CardActions sx={{ margin: "auto" }}>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => navigator.clipboard.writeText(img)}
                    >
                      Copy
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </main>
  );
}

export default User;
