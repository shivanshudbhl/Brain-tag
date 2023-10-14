import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Model from "./components/Model/Model";
import Models from "./components/Models/Models";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import User from "./components/User/User";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";

function Router({
  image,
  setImageUrl,
  setImageModel,
  fetchImageData,
  user,
  loginUser,
  registerUser,
}) {
  if (user && user.isLoading) return <Loading />;
  // else if (user && user.error) return <Error error={user.error} />;
  const { isLoggedIn } = user;
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin">
        {isLoggedIn ? (
          <Redirect
            to={{
              pathname: "/models",
              state: { success: "Signin" },
            }}
          />
        ) : (
          <Signin error={String(user.error)} loginUser={loginUser} />
        )}
      </Route>
      <Route exact path="/signup">
        {isLoggedIn ? (
          <Redirect
            to={{
              pathname: "/models",
              state: { success: "Signup" },
            }}
          />
        ) : (
          <Signup error={String(user.error)} registerUser={registerUser} />
        )}
      </Route>
      <Route exact path="/user" render={() => <User user={user} />} />
      <Route exact path="/models" component={Models} />
      <Route
        path="/models/images/:model"
        render={(routeProps) => (
          <Model
            user={user.user}
            isLoggedIn={isLoggedIn}
            {...routeProps}
            setImageModel={setImageModel}
            image={image}
            setImageUrl={setImageUrl}
            fetchImageData={fetchImageData}
          />
        )}
      />
      <Route path="/" component={Error} />
    </Switch>
  );
}

export default Router;
