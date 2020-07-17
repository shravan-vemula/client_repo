import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Typography, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { myTheme } from "theme";
import SelectList from "../molecules/_select-list";
import CloseIcon from "@material-ui/icons/Close";
import BTButton from "js/_components/atoms/_btbutton";
import BTCheckbox from "js/_components/atoms/_btcheckbox";
import AmountField from "../atoms/_amount-field";
import ToastMessage from "js/_components/atoms/_toast-message";

const useStyles = makeStyles((theme) => ({
  heading: {
    width: "173px",
    height: "44px",
    fontSize: "30px",
    color: myTheme.palette.default.main,
    margin: "18px 0px 0px 22px",
  },
  selectHeading: {
    width: "76px",
    height: "18px",
    fontSize: "12px",
    fontWeight: 600,
    color: myTheme.palette.secondary.main,
    fontFamily: myTheme.typography.fontFamily.default,
  },
  timePeriodHead: {
    width: "138px",
    height: "34px",
    fontSize: "12px",
    fontWeight: 600,
    color: myTheme.palette.secondary.main,
    fontFamily: myTheme.typography.fontFamily.default,
    marginTop: "40px",
  },
  checkboxText: {
    width: "200px",
    height: "22px",
    fontSize: "14px",
    fontFamily: myTheme.typography.fontFamily.default,
    color: myTheme.palette.default.main,
  },
  closeIcon: {
    float: "right",
    margin: "-35px 0 0 550px",
    cursor: "pointer",
  },
}));

const AddBudgetDialogBox = ({
  open,
  handleClose,
  fetchData,
  totalBudget,
  totalInflow,
}) => {
  const classes = useStyles();
  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const yearsList = [
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
  ];
  const frequencyList = ["Monthly", "Quarterly", "Half-Yearly", "Yearly"];
  const [monthValue, setMonthValue] = React.useState(
    monthNames[date.getMonth()]
  );
  const [yearValue, setYearValue] = React.useState(date.getFullYear());
  const [categoryValue, setCategoryValue] = React.useState("All Categories");
  const [budgetValue, setBudgetValue] = React.useState("");
  const [frequency, setFrequency] = React.useState(frequencyList[0]);
  const [categoryList, setCategoryList] = React.useState([]);
  const [openToastSuccess, setOpenToastSuccess] = React.useState(false);
  React.useEffect(() => {
    fetch("https://bc3-json-mock.herokuapp.com/categories", {
      method: "GET",
    })
      .then((response) => {
        response.json().then((result) => {
          console.log("categories ", result);
          let temporaryList = ["All Categories"];
          result.map((object) => {
            temporaryList.push(object.name);
          });
          setCategoryList(temporaryList);
        });
      })
      .catch((err) => {});
  }, []);

  const handleAddClick = (event) => {
    event.preventDefault();
    if (localStorage.getItem("budgetId") !== null) {
      if (totalBudget + budgetValue * 1 > totalInflow) {
        handleClose();
        setOpenToastSuccess(true);
      } else {
        const budgetObj = {
          budgetId: localStorage.getItem("budgetId"),
          createdBy: 1,
          category: categoryValue,
          currency: budgetValue,
          frequency: frequency,
          isActive: true,
          isDeleted: false,
          createdAt: new Date(),
        };
        fetch(
          "https://bc3-json-mock.herokuapp.com/budgets/1/budgetComponents",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(budgetObj),
          }
        )
          .then((response) => {
            response.json().then((result) => {
              handleClose();
              setBudgetValue("");
              setCategoryValue(categoryList[0]);
              setMonthValue(monthNames[date.getMonth()]);
              setYearValue(date.getFullYear());
              setFrequency(frequencyList[0]);
              fetchData();
            });
          })
          .catch((err) => {});
      }
    }
  };

  const handleToastClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenToastSuccess(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Grid container>
          <Typography className={classes.heading}>
            <Box fontWeight="fontWeightBold">Add Budget</Box>
          </Typography>
          <CloseIcon className={classes.closeIcon} onClick={handleClose} />
        </Grid>
        <DialogContent>
          <AmountField
            setBudgetValue={setBudgetValue}
            label="Enter Amount"
            budgetValue={budgetValue}
          />
          <p className={classes.selectHeading}>CATEGORIES</p>
          <SelectList
            heading="CATEGORIES"
            styleClass="category"
            optionsList={categoryList}
            inputLabel="All Categories"
            setValue={setCategoryValue}
            testId="categorySelect"
          />
          <p className={classes.selectHeading}>STARTS</p>
          <Grid container spacing={2}>
            <Grid item>
              <SelectList
                styleClass="month"
                optionsList={monthNames}
                inputLabel="Month"
                value={monthValue}
                setValue={setMonthValue}
              />
            </Grid>
            <Grid item>
              <SelectList
                styleClass="month"
                optionsList={yearsList}
                inputLabel="Year"
                value={yearValue}
                setValue={setYearValue}
              />
            </Grid>
          </Grid>
          <br></br>
          <p className={classes.timePeriodHead}>TIME PERIOD</p>
          <Grid container>
            <Grid item>
              <SelectList
                styleClass="month"
                optionsList={frequencyList}
                inputLabel="Frequency"
                setValue={setFrequency}
                value={frequency}
              />
            </Grid>
            <Grid item>
              <BTCheckbox />
            </Grid>
            <Grid item>
              <p className={classes.checkboxText}>Recurring the time period</p>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <BTButton
            disabled={budgetValue.length > 0 ? false : true}
            handleAddClick={handleAddClick}
            value="ADD"
          />
        </DialogActions>
      </Dialog>

      <ToastMessage
        openToastSuccess={openToastSuccess}
        message="Budget cannot be added.Your total budget cannot be greater than your income"
        handleToastClose={handleToastClose}
      />
    </div>
  );
};

export default AddBudgetDialogBox;
