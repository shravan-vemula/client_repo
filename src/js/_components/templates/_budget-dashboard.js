import React from "react";
import { Typography, makeStyles, Grid, Box } from "@material-ui/core";
import BudgetMetricsCard from "js/_components/organisms/_budget-metrics-card";
import BudgetExpensesCard from "js/_components/organisms/_budget-expenses-card";
import AddBudgetCard from "js/_components/molecules/_add-budget-card";
import { myTheme } from "theme";
import AddBudgetDialogBox from "../organisms/_add-budget-dialog-box";
import ToastMessage from 'js/_components/atoms/_toast-message';

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: myTheme.typography.fontFamily.default,
    backgroundColor: myTheme.palette.background.default,
    height: "850px",
  
    ["@media (min-width:1024px)"]: {
      width: "1440px",
      marginLeft:'8%',
    },
    ["@media (max-width:768px)"]: {
      width: "768px",
    },
  },
  date: {
    margin: "80px 0 0 60px",
  },
  month: {
    width: "64px",
    height: "44px",
    fontSize: "30px",
    color: myTheme.palette.default.main,
  },
  year: {
    width: "74px",
    height: "44px",
    fontSize: "30px",
    color: myTheme.palette.secondary.main,
  },
  cards: {
    margin: "52px 0 0 40px",
  },
  subHeading: {
    marginTop: "30px",
    width: "171px",
    height: "30px",
    fontSize: "20px",
    color: myTheme.palette.default.main,
  },
  expenseCards: {
    marginTop: "18px",
  },
}));

const BudgetDashboard = () => {
  const classes = useStyles();
  const [budgetList, setBudgetList] = React.useState([]);
  const [dialogBoxOpen, setDialogBoxOpen] = React.useState(false);
  const [transactionsList, setTransactionsList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const metrics = ["Budget", "Spent", "Remaining", "Inflow"];
  const [openToastSuccess, setOpenToastSuccess] = React.useState(false);
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
  const d = new Date();
  const month = monthNames[d.getMonth()];
  const year = d.getFullYear();


  React.useEffect(() => {
    if (localStorage.getItem("budgetId") == null) {
      const budgetObj = {
        userId: 1,
        createdBy: 1,
        deleted: false,
        active: true,
      };
      fetch("https://bc3-json-mock.herokuapp.com/budgets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(budgetObj),
      })
        .then((response) => {
          response.json().then((result) => {
            localStorage.setItem("budgetId", result.id);
            fetchData();
          });
        })
        .catch((err) => {});
    } else if (localStorage.getItem("budgetId") != null) {
      fetchData();
    }
  }, []);

  const fetchData = () => {
    fetch(
      "https://bc3-json-mock.herokuapp.com/budgets/1/budgetComponents",
      {
        method: "GET",
      }
    )
      .then((response) => {
        response.json().then((result) => {
          setBudgetList(result.reverse());
        });
      })
      .catch((err) => {});

    fetch("https://bc3-json-mock.herokuapp.com/expenses", {
      method: "GET",
    })
      .then((response) => {
        response.json().then((result) => {
          setTransactionsList(
            result.filter((transaction) => transaction.type === "credit")
          );
          setLoading(false);
        });
      })
      .catch((err) => {});
  };

  let budgetExpenseCards = null;
  let totalBudget = 0;
  budgetList.map((budget) => (totalBudget = totalBudget + budget.currency * 1));

  let totalInflow = 0;
  transactionsList.map(
    (transaction) => (totalInflow = totalInflow + transaction.amount * 1)
  );

  budgetExpenseCards = budgetList.map((budget, key) => (
    <Grid item>
      <BudgetExpensesCard
        key={budget.id}
        category={budget.category}
        budget={budget.currency}
        spent="0"
        remaining={budget.currency}
        inflow={totalInflow}
      />
    </Grid>
  ));

  const handleAddBudgetClick = () => {
    if(totalBudget >= totalInflow){
        setOpenToastSuccess(true);
    }
    else{
      setDialogBoxOpen(true);
    }
  };
  const handleDialogBoxClose = () => {
    setDialogBoxOpen(false);
  };

  const handleToastClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenToastSuccess(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.date}>
        <Typography>
          <span className={classes.month}>{month + " "}</span>
          <span className={classes.year}>{year}</span>
        </Typography>
      </div>
      <div className={classes.cards}>
        <Grid container spacing={3} xs={12}>
          {metrics.map((metric, index) => {
            index += 1;
            return (
              <Grid item>
                <BudgetMetricsCard
                  key={index}
                  heading={metric}
                  value={totalBudget}
                  inflow={totalInflow}
                />
              </Grid>
            );
          })}
        </Grid>
        <Typography className={classes.subHeading}>
          <Box fontWeight="fontWeightBold">Budget expenses</Box>
        </Typography>
        <div className={classes.expenseCards}>
          {!loading && (
            <Grid container spacing={3} xs={12}>
              <Grid
                item
                onClick={handleAddBudgetClick}
                style={{ cursor: "pointer" }}
              >
                <AddBudgetCard />
              </Grid>
              <AddBudgetDialogBox
                open={dialogBoxOpen}
                handleClose={handleDialogBoxClose}
                fetchData={fetchData}
                totalBudget={totalBudget}
                totalInflow={totalInflow}
              />
              {budgetExpenseCards}
              <ToastMessage openToastSuccess={openToastSuccess} message="Budget cannot be added.Your total budget cannot be greater than your income" handleToastClose={handleToastClose}/>
            </Grid>
          )}
        </div>
      </div>
    </div>
  );
};

export default BudgetDashboard;
