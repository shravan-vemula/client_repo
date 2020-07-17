import React, { useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { myTheme } from "theme";
import Typography from "@material-ui/core/Typography";
import { userNotificationSettings } from "js/services/userDetails";

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
    minWidth: 120,
  },
  selectField: {
    height: "30px",
  },
  notificationsPadding: {
    paddingTop: "20px",
  },
  InputField: {
    fontFamily: myTheme.typography.fontFamily.default,
    fontSize:'15px',
  },
  wrapper:{
    fontFamily: myTheme.typography.fontFamily.default,
  }
}));
export default function GeneralNotifications({
  setNewBill,
  setNotifyExceededExpense,
  setMoneyTransaction,
  setExceedingGoalPeriod,
  setReachGoal,
  setRecurringDueExpenses,
  setManageUncategorized,
  setEmail,
  setTextMessages,
  newBill,
  notifyExceededExpense,
  moneyTransaction,
  exceedingGoalPeriod,
  reachGoal,
  recurringDueExpenses,
  manageUncategorized,
  email,
  textMessages,
}) {
  useEffect(() => {
    async function innerFunction() {
      let response;
      await userNotificationSettings().then((res) => {
        response = res;
      });

      setNotifyExceededExpense(response.data.Notify_me_when_expense_exceeds_70);
      setNewBill(response.data.When_new_bill_is_added);
      setMoneyTransaction(
        response.data.Amount_debited_credited_from_bank_account
      );
      setExceedingGoalPeriod(
        response.data.Notify_me_when_I_am_exceeding_the_goal_period
      );
      setReachGoal(response.data.Notify_me_when_I_reach_my_goal);
      setRecurringDueExpenses(response.data.Recurring_expenses_due);
      setManageUncategorized(response.data.Manage_uncategorized);
      setEmail(response.data.Email);
      setTextMessages(response.data.Test_messages);

      return response;
    }

    innerFunction();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root} data-testid="form1">
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item xs={8}>
          <FormControl component="fieldset" className={classes.FormControl}>
            <FormLabel style={{fontSize:'14px',fontFamily: myTheme.typography.fontFamily.default, paddingBottom:'10px'}}>NOTIFICATIONS</FormLabel>
            <FormGroup aria-label="position" row>
              <Grid item xs={12}>
                <FormControlLabel
                  value="start"
                  control={
                    <div style={{ paddingLeft: "189px" }}>
                      <Checkbox
                        color="primary"
                        checked={notifyExceededExpense}
                        onClick={() => {
                          setNotifyExceededExpense(!notifyExceededExpense);
                        }}
                      />
                    </div>
                  }
                  label={
                    <Typography className={classes.InputField}>
                      Notify me when expense exceeds 70%
                    </Typography>
                  }
                  labelPlacement="start"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  value="start"
                  control={
                    <div style={{ paddingLeft: "309px" }}>
                      <Checkbox
                        color="primary"
                        checked={newBill}
                        onClick={() => {
                          setNewBill(!newBill);
                        }}
                      />
                    </div>
                  }
                  label={
                    <Typography className={classes.InputField}>
                      When new bill is added
                    </Typography>
                  }
                  labelPlacement="start"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  value="start"
                  control={
                    <div style={{ paddingLeft: "147px" }}>
                      <Checkbox
                        color="primary"
                        checked={moneyTransaction}
                        onClick={() => {
                          setMoneyTransaction(!moneyTransaction);
                        }}
                      />
                    </div>
                  }
                  label={
                    <Typography className={classes.InputField}>
                      Amount debited/credited from bank account
                    </Typography>
                  }
                  labelPlacement="start"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  value="start"
                  control={
                    <div style={{ paddingLeft: "124px" }}>
                      <Checkbox
                        color="primary"
                        checked={exceedingGoalPeriod}
                        onClick={() => {
                          setExceedingGoalPeriod(!exceedingGoalPeriod);
                        }}
                      />
                    </div>
                  }
                  label={
                    <Typography className={classes.InputField}>
                      Notify me when I am exceeding the goal period
                    </Typography>
                  }
                  labelPlacement="start"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  value="start"
                  control={
                    <div style={{ paddingLeft: "244px" }}>
                      <Checkbox
                        color="primary"
                        checked={reachGoal}
                        onClick={() => {
                          setReachGoal(!reachGoal);
                        }}
                      />
                    </div>
                  }
                  label={
                    <Typography className={classes.InputField}>
                      Notify me when I reach my goal
                    </Typography>
                  }
                  labelPlacement="start"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  value="start"
                  control={
                    <div style={{ paddingLeft: "305px" }}>
                      <Checkbox
                        color="primary"
                        checked={recurringDueExpenses}
                        onClick={() => {
                          setRecurringDueExpenses(!recurringDueExpenses);
                        }}
                      />
                    </div>
                  }
                  label={
                    <Typography className={classes.InputField}>
                      Recurring expenses due
                    </Typography>
                  }
                  labelPlacement="start"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  value="start"
                  control={
                    <div style={{ paddingLeft: "316px" }}>
                      <Checkbox
                        color="primary"
                        checked={manageUncategorized}
                        onClick={() => {
                          setManageUncategorized(!manageUncategorized);
                        }}
                      />
                    </div>
                  }
                  label={
                    <Typography className={classes.InputField}>
                      Manage uncategorized
                    </Typography>
                  }
                  labelPlacement="start"
                />
              </Grid>
              <FormHelperText className={classes.InputField}>
                to add missing categories to expenses and income
              </FormHelperText>
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl component="fieldset" className={classes.FormControl}>
            <FormLabel style={{fontSize:'14px', paddingBottom:'10px',fontFamily: myTheme.typography.fontFamily.default}}>Messages</FormLabel>
            <FormGroup aria-label="position" row>
              <Grid item xs={12}>
                <FormControlLabel
                  value="end"
                  control={
                    <Checkbox
                      color="primary"
                      checked={email}
                      onClick={() => {
                        setEmail(!email);
                      }}
                    />
                  }
                  label={
                    <Typography className={classes.InputField}>
                      Email
                    </Typography>
                  }
                  labelPlacement="end"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  value="end"
                  control={
                    <Checkbox
                      color="primary"
                      checked={textMessages}
                      onClick={() => {
                        setTextMessages(!textMessages);
                      }}
                    />
                  }
                  label={
                    <Typography className={classes.InputField}>
                      Text messages
                    </Typography>
                  }
                  labelPlacement="end"
                />
              </Grid>
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
      <div></div>
    </div>
  );
}
