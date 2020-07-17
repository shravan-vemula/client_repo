import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ToastMessage = ({ handleToastClose, openToastSuccess, message }) => {
  return (
    <Snackbar
      open={openToastSuccess}
      autoHideDuration={10000}
      onClose={handleToastClose}
    >
      <Alert onClose={handleToastClose} severity="error">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ToastMessage;
