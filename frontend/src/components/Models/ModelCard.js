import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const styles = {
  card: {
    margin: "2rem",
  },
  link: {
    textDecoration: "none",
  },
  button: {
    color: "#1976d2",
    fontWeight: "bold",
  },
};

function ModelCard({ name, link, image, description }) {
  return (
    <Card sx={{ maxWidth: 345 }} style={styles.card}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={link} style={styles.link}>
          <Button size="small" color="primary" style={styles.button}>
            Open
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default ModelCard;
