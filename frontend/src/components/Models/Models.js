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
  {
    name: "Apparel Detection",
    description:
      "Recognize specific apparel worn by men and women",
    image:
      "https://media.istockphoto.com/id/864505242/photo/mens-clothing-and-personal-accessories.jpg?s=612x612&w=0&k=20&c=TaJuW3UY9IZMijRrj1IdJRwd6iWzXBlrZyQd1uyBzEY=",
    link: "/models/images/apparel",
  },
  {
    name: "General Detection",
    description:
    "Recognize general tags in images from our day-to-day life.",
    image:
      "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/flickr/9197295814_2c4ecb3af7_o.jpg?fit=4928%2C3264&ssl=1",
    link: "/models/images/general",
  },
  {
    name: "Moderation Detection",
    description:
    "Detect potential risks and ensure a secure online environment, swiftly categorizing content into gore, drug-related, or safe categories.",
    image:
      "https://thumbs.dreamstime.com/z/kid-friendly-emblem-sticker-child-cafe-play-zone-area-geotag-sign-picture-happy-unhappy-vector-badges-icon-208479989.jpg",
    link: "/models/images/x",
  }
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
