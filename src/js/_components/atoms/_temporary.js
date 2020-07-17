import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    position:'absolute',
    left:'40%',
    top:'20%',
  },
}));
const Temporary = () => {
  const classes = useStyles();
  return (
    <div className={classes.heading}>
      <h1>Screen is yet to be designed</h1>
    </div>
  );
};

export default Temporary;
