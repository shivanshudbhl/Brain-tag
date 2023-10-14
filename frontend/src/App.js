import React, { useEffect } from "react";
import Footer from "./components/Partials/Footer";
import Header from "./components/Partials/Header";
import Router from "./Router";
import { Box } from "@mui/material";
import { connect } from "react-redux";
import {
  fetchUser,
  fetchImageData,
  setImageUrl,
  setImageModel,
  registerUser,
  loginUser,
  logoutUser,
} from "./redux/actions/Actions";

const mapDispatchToProps = (dispatch) => ({
  setImageUrl: (url) => dispatch(setImageUrl(url)),
  setImageModel: (model) => dispatch(setImageModel(model)),
  fetchImageData: (image) => {
    dispatch(fetchImageData(image));
  },
  fetchUser: () => {
    dispatch(fetchUser());
  },
  registerUser: (user) => dispatch(registerUser(user)),
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser()),
});

const mapStateToProps = (state) => state;

function App({
  user,
  image,
  fetchUser,
  setImageUrl,
  setImageModel,
  fetchImageData,
  registerUser,
  loginUser,
  logoutUser,
}) {
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header user={user} logoutUser={logoutUser} />
      <Router
        fetchImageData={fetchImageData}
        setImageUrl={setImageUrl}
        setImageModel={setImageModel}
        registerUser={registerUser}
        loginUser={loginUser}
        user={user}
        image={image}
      />
      <Footer />
    </Box>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
