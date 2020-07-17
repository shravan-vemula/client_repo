import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import AvatarIcon from "../atoms/AvatarIcon";
import Grid from "@material-ui/core/Grid";
import SettingsSideBar from "js/_components/organisms/SettingsSideBar";
import SettingsHeader from "js/_components/organisms/SettingsHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  base: {
    boxShadow: "0 2px 0 0 #eaedf3",
    backgroundColor: "#ffffff",
  },
  Alignment: {
    textAlign: "left",
  },
}));

export default function SettingsPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <SettingsHeader />
            <AvatarIcon props={{ spacing: 50 }} />
          </Toolbar>
        </AppBar>
        <div>
          <SettingsSideBar />
        </div>
      </Grid>
    </div>
  );
}
