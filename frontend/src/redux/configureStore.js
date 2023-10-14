import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { User } from "./user";
import { Image } from "./image";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      user: User,
      image: Image,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
