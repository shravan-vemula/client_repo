import React, { useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Select } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import { myTheme } from "theme";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
  spacing: {
    paddingLeft: "300px",
  },
  innerFormControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectField: {
    height: "50px",
  },
  notificationsPadding: {
    paddingTop: "20px",
  },
  InputField: {
    fontFamily: myTheme.typography.fontFamily.default,
    fontSize:'15px'
  },
}));
export default function GeneralSettings({
  setReminder,
  setSummary,
  setUseCalculator,
  setTimePeriod,
  setDefaultDate,
  setReminderForDueBills,
  reminder,
  summary,
  useCalculator,
  timePeriod,
  defaultDate,
  reminderForDueBills,
}) {
  useEffect(() => {
    async function innerFunction() {
      const response = await axios.get(
        "https://bc3-json-mock.herokuapp.com/usernotifications/1"
      );
      setReminder(response.data.Daily_remind_adding_expenses_income);
      setSummary(response.data.Monthly_Weekly_summary);
      setUseCalculator(response.data.Use_calculator_to_enter_amount);
      setTimePeriod(response.data.Default_time_period);
      setDefaultDate(response.data.Default_date_of_month_starting);
      setReminderForDueBills(response.data.Remind_me_before_the_bills_are_dues);
      console.log(response);
    }
    innerFunction();
  }, []);

  const classes = useStyles();

  const handleChange = (event) => {
    setTimePeriod(event.target.value);
  };
  const handleChange1 = (event) => {
    setDefaultDate(event.target.value);
  };
  const handleChange2 = (event) => {
    setReminderForDueBills(event.target.value);
  };
  return (
    <div className={classes.root}>
      <Grid
        id="form"
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <FormControl component="fieldset">
          <FormLabel style={{fontSize:'14px', paddingBottom:'10px',fontFamily: myTheme.typography.fontFamily.default}}>SETTINGS</FormLabel>
          <FormGroup aria-label="position" row>
            <Grid item xs={12}>
              <FormControlLabel
                value="start"
                control={
                  <div style={{ paddingLeft: "188px" }}>
                    <Checkbox
                      color="primary"
                      id="checkTrial"
                      checked={reminder}
                      onClick={() => {
                        setReminder(!reminder);
                      }}
                    />
                  </div>
                }
                label={
                  <Typography className={classes.InputField}>
                    Daily remind adding Expenses Income
                  </Typography>
                }
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                value="start"
                control={
                  <div style={{ paddingLeft: "284px" }}>
                    <Checkbox
                      color="primary"
                      checked={summary}
                      onClick={() => {
                        setSummary(!summary);
                      }}
                    />
                  </div>
                }
                label={
                  <Typography className={classes.InputField}>
                    Monthly/Weekly summary{" "}
                  </Typography>
                }
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                value="start"
                control={
                  <div style={{ paddingLeft: "245px" }}>
                    <Checkbox
                      color="primary"
                      checked={useCalculator}
                      onClick={() => {
                        setUseCalculator(!useCalculator);
                      }}
                    />
                  </div>
                }
                label={
                  <Typography className={classes.InputField}>
                    Use calculator to enter amount
                  </Typography>
                }
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                value="start"
                control={
                  <div style={{ paddingLeft: "337px" }}>
                    <FormControl
                      variant="outlined"
                      className={classes.innerFormControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Month
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={timePeriod}
                        onChange={handleChange}
                        label="Month"
                        className={classes.selectField}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"January"}>January</MenuItem>
                        <MenuItem value={"February"}>February</MenuItem>
                        <MenuItem value={"March"}>March</MenuItem>
                        <MenuItem value={"April"}>April</MenuItem>
                        <MenuItem value={"May"}>May</MenuItem>
                        <MenuItem value={"June"}>June</MenuItem>
                        <MenuItem value={"July"}>July</MenuItem>
                        <MenuItem value={"August"}>August</MenuItem>
                        <MenuItem value={"September"}>September</MenuItem>
                        <MenuItem value={"October"}>October</MenuItem>
                        <MenuItem value={"November"}>November</MenuItem>
                        <MenuItem value={"December"}>December</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                }
                label={
                  <Typography className={classes.InputField}>
                    Default time period
                  </Typography>
                }
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                value="start"
                control={
                  <div style={{ paddingLeft: "252px" }}>
                    <FormControl
                      variant="outlined"
                      className={classes.innerFormControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Date
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={defaultDate}
                        onChange={handleChange1}
                        label="DefaultDate"
                        className={classes.selectField}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                }
                label={
                  <Typography className={classes.InputField}>
                    Default date of month starting
                  </Typography>
                }
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                value="start"
                control={
                  <div style={{ paddingLeft: "209px" }}>
                    <FormControl
                      variant="outlined"
                      className={classes.innerFormControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Reminder
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={reminderForDueBills}
                        onChange={handleChange2}
                        label="reminder"
                        className={classes.selectField}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"1 day"}>1 day</MenuItem>
                        <MenuItem value={"1 week"}>1 week</MenuItem>
                        <MenuItem value={"10 days"}>10 days</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                }
                label={
                  <Typography className={classes.InputField}>
                    Remind me before the bills are dues
                  </Typography>
                }
                labelPlacement="start"
              />
              <div style={{ paddingBottom: "15px" }}></div>
            </Grid>
          </FormGroup>
        </FormControl>
      </Grid>
    </div>
  );
}
