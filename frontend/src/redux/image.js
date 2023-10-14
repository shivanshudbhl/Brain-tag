import {
  SET_IMAGE_URL,
  SET_IMAGE_MODEL,
  SET_IMAGE_DATA,
  IMAGE_DATA_ERROR,
  IMAGE_DATA_LOADING,
} from "./actions/ActionTypes";

export const Image = (
  state = {
    imageUrl: "",
    model: "",
    showImage: false,
    data: "",
    isLoading: false,
    error: "",
  },
  action
) => {
  switch (action.type) {
    case SET_IMAGE_URL:
      return { ...state, showImage: false, imageUrl: action.payload };

    case SET_IMAGE_MODEL:
      return { ...state, model: action.payload };

    case IMAGE_DATA_LOADING:
      return { ...state, isLoading: true };

    case IMAGE_DATA_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case SET_IMAGE_DATA:
      return {
        ...state,
        showImage: true,
        isLoading: false,
        error: "",
        data: action.payload,
      };

    default:
      return state;
  }
};
