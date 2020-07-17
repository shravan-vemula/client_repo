import React from "react";
import {
  Typography,
  makeStyles,
  Card,
  CardContent,
} from "@material-ui/core";
import AddIcon from "images/add-icon.png";
import { myTheme } from 'theme'

const useStyles = makeStyles(() => ({
  topCard: {
    width: "296px",
    height: "152px",
    borderRadius: "14px",
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  icon: {
    margin: "28px 0 0 100px",
  },
  heading: {
    width: "101px",
    height: "28px",
    fontSize: "18px",
    color:myTheme.palette.default.main,
    margin: "15px 0 0 86px",
  },
}));

const AddBudgetCard = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.topCard} elevation={2}>
        <CardContent>
          <img src={AddIcon} className={classes.icon} />
          <Typography className={classes.heading}>Add budget</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddBudgetCard;
