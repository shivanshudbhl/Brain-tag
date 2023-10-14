import React, { useEffect } from "react";
import {
  Button,
  TextField,
  Box,
  Container,
  CssBaseline,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

function Model(props) {
  const {
    user,
    isLoggedIn,
    history,
    match,
    image,
    setImageUrl,
    setImageModel,
    fetchImageData,
  } = props;
  const { showImage, imageUrl, isLoading, error, data } = image;

  if (!isLoggedIn) history.push("/signin");

  useEffect(() => {
    setImageModel(match.params.model);
  }, []);

  const handleSubmit = () => fetchImageData({ ...image, user });
  const handleChange = (e) => setImageUrl(e.target.value);

  if (isLoading) <Loading />;
  else if (error) <Error error={error} />;
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
        <TextField
          margin="normal"
          required
          fullWidth
          id="imageUrl"
          label="Image URL"
          name="imageUrl"
          value={imageUrl}
          onChange={handleChange}
          autoFocus
        />
        <Button
          onClick={handleSubmit}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Detect
        </Button>
        {showImage && data && (
          <Card sx={{ mt: 2, mb: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="350"
                image={imageUrl}
                alt={imageUrl}
              />
              <CardContent>
                {data.length && (
                  <Typography gutterBottom variant="h5" component="div">
                    {data[0].name.toUpperCase()}
                  </Typography>
                )}
                {data.length &&
                  data.map(({ name, value }) => (
                    <Button
                      key={name}
                      variant="contained"
                      sx={{ m: 1 }}
                    >{`${name} - ${
                      Math.round(value * 10000, 4) / 100
                    }%`}</Button>
                  ))}
              </CardContent>
            </CardActionArea>
          </Card>
        )}
      </Box>
    </Container>
  );
}

export default Model;
