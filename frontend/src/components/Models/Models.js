import React from "react";
import Grid from "@mui/material/Grid";
import ModelCard from "./ModelCard";
import SuccessSnackBar from "../Snackbar/Success";

const models = [
  {
    name: "Food Detection",
    description:
      "Recognize more than 1,000 food items in images down to the ingredient level.",
    image:
      "https://blog.qburst.com/wp-content/uploads/2019/08/Food-Image-Detector.jpg",
    link: "/models/images/food",
  },
  {
    name: "Travel Image Detection",
    description:
      "Recognize specific features of residential, hotel, and travel-related properties.",
    image:
      "https://image.freepik.com/free-vector/travel-tourism-illustration-with-resort-sightseeing-elements_1284-30189.jpg",
    link: "/models/images/travel",
  },
  {
    name: "Wedding Image Detection",
    description:
      "  Recognize over 400 concepts related to weddings including bride, groom, flowers, and more.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1KYjitpCErtvG9koogOnO3LVrp-0P_lEIrpxbIPOtckhoYYzdtYmFnBE8k8ngADdGaY&usqp=CAU",
    link: "/models/images/wedding",
  },
];

function Models({ location }) {
  return (
    <Grid container spacing={2}>
      {location && location.state && location.state.success && (
        <SuccessSnackBar success={`${location.state.success} successful!`} />
      )}
      {models.map((model) => (
        <Grid key={model} item xs={12} md={6} lg={4}>
          <ModelCard {...model} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Models;
