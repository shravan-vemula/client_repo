import React, { useEffect, useState } from "react";
import { fade, withStyles, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { Grid } from "@material-ui/core";
import AvatarIcon from "js/_components/atoms/AvatarIcon";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import ChangePassword from "js/_components/molecules/ChangePassword";
import DeleteAccount from "js/_components/molecules/DeleteAccount";
import { myTheme } from "theme";

const BasicProfileInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
      fontFamily: myTheme.typography.fontFamily.default,
    },
  },
  input: {
    fontFamily: myTheme.typography.fontFamily.default,
    borderRadius: 4,
    backgroundColor: myTheme.palette.background,
    border: "1px solid #ced4da",
    width: "300px",
    fontSize: 15,
    padding: "12px 18px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
     
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },

  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    
  },
  AvatarAlignment: {
    paddingLeft: "80px",
  },
  AvatarFontSize: {
    fontSize: "100px",
  },
  InputField: {
    fontFamily: "Inter,sans-serif",
  },
}));

export default function BasicProfileTab() {
  const [email, setEmailId] = useState("");
  const [phone, setPhoneNo] = useState("");
  const [country, setCountry] = useState("");
  useEffect(() => {
    async function innerFunction() {
      const response = await axios.get(
        "https://bc3-json-mock.herokuapp.com/users/1"
      );
      setEmailId(response.data.email);
      setPhoneNo(response.data.phone);
      setCountry(response.data.country);
    }
    innerFunction();
  }, []);

  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={8}>
            <div className={classes.paper}>
              <div className={classes.base}>
                <form className={classes.root} noValidate>
                  <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <FormControl className={classes.margin}>
                      <InputLabel
                        shrink
                        htmlFor="basicprofile-input"
                        className={classes.InputField}
                        style={{ fontSize: "16px" }}
                        style={{ fontWeight: "500" ,fontFamily: myTheme.typography.fontFamily.default}}

                      >
                        USERNAME
                      </InputLabel>
                      <BasicProfileInput
                        value={email}
                        id="username"
                        readOnly={true}
                        style={{fontFamily: myTheme.typography.fontFamily.default,}}
                      />
                    </FormControl>
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <FormControl className={classes.margin}>
                      <InputLabel
                        shrink
                        htmlFor="basicprofile-input"
                        style={{ fontSize: "16px",fontWeight:'500',fontFamily: myTheme.typography.fontFamily.default }}
                      >
                        MOBILE NUMBER
                      </InputLabel>
                      <BasicProfileInput
                        value={phone}
                        id="mobile-number"
                        readOnly={true}
                      />
                    </FormControl>
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <FormControl className={classes.margin}>
                      <InputLabel
                        shrink
                        htmlFor="basicprofile-input"
                        style={{ fontSize: "16px" }}
                      >
                        COUNTRY
                      </InputLabel>
                      <BasicProfileInput
                        value={country}
                        id="country"
                        readOnly={true}
                      />
                    </FormControl>
                  </Grid>
                </form>
              </div>
            </div>
            <div style={{ paddingBottom: "30px" }}></div>
          </Grid>

          <Grid item xs={4}>
            <div className={classes.AvatarAlignment}>
              <AvatarIcon props={{ spacing: 150 }} />
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <div style={{ paddingBottom: "30px" }}></div>
      <ChangePassword />
      <div style={{ paddingBottom: "30px" }}></div>
      <Divider />
      <div style={{ paddingTop: "40px" }}></div>
      <div>
        <DeleteAccount />
      </div>
    </div>
  );
}
