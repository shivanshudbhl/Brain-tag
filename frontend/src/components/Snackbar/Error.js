import React from "react";
import { Snackbar, Alert, Slide } from "@mui/material";
import { connect } from "react-redux";
import { userError } from "../../redux/actions/Actions";

const mapDispatchToProps = (dispatch) => ({
  userError: (error) => dispatch(userError(error)),
});

function ErrorSnackBar({ error, userError }) {
  const [open, setOpen] = React.useState(true);
  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    console.log("hello");
    userError("");
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      sx={{ mb: 8, pl: 3, pr: 3 }}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      onClose={handleClose}
      TransitionComponent={(props) => <Slide {...props} direction="up" />}
    >
      <Alert
        onClose={handleClose}
        variant="filled"
        severity="error"
        sx={{ width: "100%" }}
      >
        {`Error: ${error}`}
      </Alert>
    </Snackbar>
  );
}

export default connect(null, mapDispatchToProps)(ErrorSnackBar);
