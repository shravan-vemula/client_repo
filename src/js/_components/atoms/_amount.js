import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  amount: {
    padding: "15%",
    width: "147px",
    height: "50px",
    fontFamily: "Inter,sans-serif",
    fontSize: "40px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.39",
    letterSpacing: "normal",
    color: "#344563",
  },
}));

const Amount = (props) => {
  const classes = useStyles();
  return (
    <div  className={classes.amount} >
          <p>₹{props.value}</p>
      </div>
  );
};

export default Amount;
