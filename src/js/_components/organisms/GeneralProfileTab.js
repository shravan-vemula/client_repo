import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GeneralSettings from "js/_components/molecules/GeneralSettings";
import GeneralNotifications from "js/_components/molecules/GeneralNotifications";
import Divider from "@material-ui/core/Divider";
import { myTheme } from "theme";
import axios from "axios";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: myTheme.typography.fontFamily,
  },
}));

export default function GeneralProfileTab() {
  const [reminder, setReminder] = useState("");
  const [summary, setSummary] = useState("");
  const [useCalculator, setUseCalculator] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [defaultDate, setDefaultDate] = useState("");
  const [reminderForDueBills, setReminderForDueBills] = useState("");

  const [newBill, setNewBill] = useState("");
  const [notifyExceededExpense, setNotifyExceededExpense] = useState("");
  const [moneyTransaction, setMoneyTransaction] = useState("");
  const [exceedingGoalPeriod, setExceedingGoalPeriod] = useState("");
  const [reachGoal, setReachGoal] = useState("");
  const [recurringDueExpenses, setRecurringDueExpenses] = useState("");
  const [manageUncategorized, setManageUncategorized] = useState("");
  const [email, setEmail] = useState("");
  const [textMessages, setTextMessages] = useState("");

  const submitForm = () => {
    axios
      .put("https://bc3-json-mock.herokuapp.com/usernotifications/1", {
        id: 1,
        Daily_remind_adding_expenses_income: reminder,
        "Monthly_Weekly_summary ": summary,
        Use_calculator_to_enter_amount: useCalculator,
        Default_time_period: timePeriod,
        Default_date_of_month_starting: defaultDate,
        Remind_me_before_the_bills_are_dues: reminderForDueBills,
        Notify_me_when_expense_exceeds_70: notifyExceededExpense,
        When_new_bill_is_added: newBill,
        Amount_debited_credited_from_bank_account: moneyTransaction,
        Notify_me_when_I_am_exceeding_the_goal_period: exceedingGoalPeriod,
        Notify_me_when_I_reach_my_goal: reachGoal,
        Recurring_expenses_due: recurringDueExpenses,
        Manage_uncategorized: manageUncategorized,
        Email: email,
        Test_messages: textMessages,
      })
      .then(function (response) {
        console.log(response);
      });
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div>
            <GeneralSettings
              setReminder={setReminder}
              setSummary={setSummary}
              setUseCalculator={setUseCalculator}
              setTimePeriod={setTimePeriod}
              setDefaultDate={setDefaultDate}
              setReminderForDueBills={setReminderForDueBills}
              reminder={reminder}
              summary={summary}
              useCalculator={useCalculator}
              timePeriod={timePeriod}
              defaultDate={defaultDate}
              reminderForDueBills={reminderForDueBills}
            />
          </div>
          <Divider />
          <div style={{ paddingBottom: "20px" }}></div>
          <GeneralNotifications
            setNewBill={setNewBill}
            setNotifyExceededExpense={setNotifyExceededExpense}
            setMoneyTransaction={setMoneyTransaction}
            setExceedingGoalPeriod={setExceedingGoalPeriod}
            setReachGoal={setReachGoal}
            setRecurringDueExpenses={setRecurringDueExpenses}
            setManageUncategorized={setManageUncategorized}
            setEmail={setEmail}
            setTextMessages={setTextMessages}
            newBill={newBill}
            notifyExceededExpense={notifyExceededExpense}
            moneyTransaction={moneyTransaction}
            exceedingGoalPeriod={exceedingGoalPeriod}
            reachGoal={reachGoal}
            recurringDueExpenses={recurringDueExpenses}
            manageUncategorized={manageUncategorized}
            email={email}
            textMessages={textMessages}
          />
        </Grid>
        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="flex-end"
        >
          <div></div>
          <Button variant="contained" color="primary" onClick={submitForm}>
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
