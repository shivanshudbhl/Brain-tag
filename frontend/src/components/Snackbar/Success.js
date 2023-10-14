import React from "react";
import { Snackbar, Alert, Slide } from "@mui/material";

function SuccessSnackBar({ success }) {
  const [open, setOpen] = React.useState(true);
  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
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
        severity="success"
        sx={{ width: "100%" }}
      >
        {`Success: ${success}`}
      </Alert>
    </Snackbar>
  );
}

export default SuccessSnackBar;
