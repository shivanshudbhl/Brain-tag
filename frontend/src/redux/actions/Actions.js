import {
  SET_USER,
  USER_LOADING,
  USER_LOGOUT,
  USER_ERROR,
  SET_IMAGE_URL,
  SET_IMAGE_MODEL,
  SET_IMAGE_DATA,
  IMAGE_DATA_LOADING,
  IMAGE_DATA_ERROR,
} from "./ActionTypes";
import axios from "../../axios/client";

export const setImageUrl = (url) => ({
  type: SET_IMAGE_URL,
  payload: url,
});

export const setImageModel = (model) => ({
  type: SET_IMAGE_MODEL,
  payload: model,
});

export const setImageData = (data) => ({
  type: SET_IMAGE_DATA,
  payload: data,
});

export const imageDataLoading = () => ({
  type: IMAGE_DATA_LOADING,
});

export const imageDataError = (err) => ({
  type: IMAGE_DATA_ERROR,
  payload: err,
});

export const fetchImageData =
  ({ user, model, imageUrl }) =>
  (dispatch) => {
    dispatch(imageDataLoading);

    const bearer = "bearer " + localStorage.getItem("token");

    axios
      .get(`/models/images/${model}?img=${imageUrl}`, {
        headers: {
          Authorization: bearer,
        },
      })
      .then((res) => {
        const updateUser = { ...user, imageModels: user.imageModels + 1 };
        if (updateUser.images.findIndex((img) => img === imageUrl) === -1)
          updateUser.images.push(imageUrl);

        dispatch(setImageData(res.data));
        dispatch(setUser(updateUser));
      })
      .catch((err) => dispatch(imageDataError(err)));
  };

export const userError = (err) => ({
  type: USER_ERROR,
  payload: err,
});

export const userLoading = () => ({
  type: USER_LOADING,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const loginUser = (user) => (dispatch) => {
  dispatch(userLoading);

  axios
    .post("/users/signin", user)
    .then((res) => {
      const { isLoggedIn, error, user, token } = res.data;
      if (error || !isLoggedIn) dispatch(userError(error));
      else {
        localStorage.setItem("token", token);
        dispatch(setUser(user));
      }
    })
    .catch((err) => {
      dispatch(userError(err));
    });
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  return {
    type: USER_LOGOUT,
  };
};

export const registerUser = (user) => (dispatch) => {
  dispatch(userLoading);

  axios
    .post("/users/signup", user)
    .then((res) => {
      const { isLoggedIn, error, user, token } = res.data;
      if (error || !isLoggedIn) dispatch(userError(error));
      else {
        localStorage.setItem("token", token);
        dispatch(setUser(user));
      }
    })
    .catch((err) => {
      dispatch(userError(err));
    });
};

export const fetchUser = () => (dispatch) => {
  dispatch(userLoading);

  const bearer = "bearer " + localStorage.getItem("token");
  axios
    .get("/users/isLoggedIn", {
      headers: {
        Authorization: bearer,
      },
    })
    .then((res) => {
      const { isLoggedIn, error, user } = res.data;
      if (error || !isLoggedIn) dispatch(userError(""));
      else dispatch(setUser(user));
    })
    .catch((err) => {
      dispatch(userError(err));
    });
};
