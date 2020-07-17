import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuItemsList from "js/_components/molecules/_menu-list-items";
import Temporary from "js/_components/atoms/_temporary";
import { Route, Switch } from "react-router-dom";
import PriceCard from "js/_components/molecules/_pricecard";
import FeedCard from "js/_components/molecules/_feedcard";
import TransactionCard from "js/_components/molecules/_transactioncard";
import Chart from "js/_components/molecules/_chart";
import TopCard from "js/_components/molecules/_topcard";
import { myTheme } from "theme";
import AddTransaction from "./_addtransaction";

const drawerWidth = 86;

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: myTheme.typography.fontFamily.default,
    display: "flex",
    position: "absolute",
    left: '3%',
    top: '5%',
  },
  head: {
    position: "absolute",
    left: "126px",
    width: "134px",
    height: "44px",
    fontFamily: myTheme.typography.fontFamily.default,
    fontSize: "30px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.47",
    letterSpacing: "normal",
    color: "#344563",

  },
  cattop: {
    position: "absolute",

    left: "126px",
    top: "711px",

  },
  categorieswithtop: {
    position: "absolute",
    left: "126px",
    top: "701px",

    width: "400px",
    height: "30px",
    fontFamily: "Inter,sans-serif",
    fontSize: "20px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.5",
    letterSpacing: "normal",
    color: "#344563",
  }

}));

const Overview = () => {
  const classes = useStyles();

  const [data, setData] = useState({});
  const [budgetData, setBudgetData] = useState({});
  const userId = 1;
  const [add, setAdd] = useState("None");
  const [categories, setCategories] = useState({});
  const [reload, setReload] = useState(false);



  const getToday = () => {
    let today = new Date();
    let month;
    let day;
    if (today.getDate() < 10) {
      day = "0" + today.getDate();
    } else {
      day = today.getDate();
    }
    if (today.getMonth() < 9) {
      month = '0' + (today.getMonth() + 1);
    } else {
      month = today.getMonth() + 1;
    }
    let retdate = today.getFullYear() + '-' + (month) + '-' + day;
    return retdate;
  };

  const listTopExpenses = () => {
    let renderCards = [];

    let byCat = new Map();
    let today = getToday();

    for (let exp in data) {
      if (data[exp].type.toLowerCase() == "debit" && data[exp].createdAt.substring(0, 7) == today.substring(0, 7) && data[exp].userId == userId) {
        if (byCat.has(data[exp].category)) {
          byCat.set(data[exp].category, parseInt(byCat.get(data[exp].category)) + parseInt(byCat.get(data[exp].category)));

        } else {
          byCat.set(data[exp].category, parseInt(data[exp].amount));

        }
      }
    }
    let amountList = [];
    for (let n of byCat) {
      amountList.push((n[1]));
    }

    amountList.sort(function (a, b) { return b - a });
    // console.log(amountList);
    let minCards = Math.min(amountList.length, 4);

    let widths = ["126px", "357px", "587px", "817px"];
    let cats = new Set();
    for (let i = 0; i < minCards; i++) {
      let title;
      for (let n of byCat) {
        // console.log(n[1]);
        amountList.push((n[1]));
        if (n[1] == amountList[i] && !cats.has(n[0])) {
          title = n[0];
          cats.add(n[0]);
          break;
        }
      }
      // console.log(amountList[i] + ": " + title);
      renderCards.push(<TopCard left={widths[i]} top="759px" title={title} amount={amountList[i]} />);
    }
    return (renderCards);
  };



  const getCurrentMonth = () => {
    let m_names = ['January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'];
    let d = new Date();
    let presetMonth = m_names[d.getMonth()];
    return presetMonth;
  };

  const getExpenses = () => {
    let sum = 0;
    let today = getToday();
    for (let exp in data) {
      if ((data[exp].type.toLowerCase() == "debit") && data[exp].userId == userId && data[exp].createdAt.substring(0, 7) == today.substring(0, 7)) {
        sum += parseInt(data[exp].amount);
      }
    }
    return sum;
  };

  const getBudgets = () => {
    
    let budget=0;
    for (let bud in budgetData) {

      if (budgetData[bud].userId == userId && budgetData[bud].budgetComponents) {
        let endDate = new Date(budgetData[bud].endDate);
        let today = new Date();
        budgetData[bud].budgetComponents.map((component) => {
          budget += parseInt(component.currency);
        });
      }
      
    }

    return budget;

  };

  const getBills = () => {
    let sum = 0;
    let today = getToday();
    for (let exp in data) {
      if (data[exp].category == "Bills" && data[exp].type.toLowerCase() == "debit" && data[exp].userId == userId && data[exp].createdAt.substring(0, 7) == today.substring(0, 7)) {
        sum += parseInt(data[exp].amount);
      }
    }
    return sum;
  };


  const getIncome = () => {
    let sum = 0;
    let today = getToday();
    for (let exp in data) {
      if (data[exp].type.toLowerCase() == "credit" && data[exp].userId == userId && data[exp].createdAt.substring(0, 7) == today.substring(0, 7)) {
        sum += parseInt(data[exp].amount);
      }
    }
    return sum;
  };


  const getSpentToday = () => {
    let today = new Date();
    let day;
    if (today.getDate() < 10) {
      day = "0" + today.getDate();
    } else {
      day = today.getDate();
    }
    let month;
    if (today.getMonth() < 9) {
      month = '0' + (today.getMonth() + 1);
    } else {
      month = today.getMonth() + 1;
    }
    let date = today.getFullYear() + '-' + (month) + '-' + day;
    let sum = 0;
    for (let exp in data) {
      if (data[exp].createdAt.substring(0, 10) == date && data[exp].type.toLowerCase() == "debit" && data[exp].userId == userId) {
        sum += parseInt(data[exp].amount);
      } {
        // console.log("not matched"+data[exp].createdAt.substring(0, 10));
      }
    }
    return sum;
  };

  const update = () => {

    fetch("https://bc3-json-mock.herokuapp.com/expenses", {
      method: "GET",
    })
      .then((response) => {
        response.json().then((result) => {
          setData(result);
        });
      })
      .catch((err) => { });

     fetch(
      "https://bc3-json-mock.herokuapp.com/budgets",
      {
        method: "GET",
      }
    )
      .then((response) => {
        response.json().then((result) => {
          console.log(result);
          setBudgetData(result);
        });
      })
      .catch((err) => { });
    fetch("https://bc3-json-mock.herokuapp.com/categories", {
      method: "GET",
    })
      .then((response) => {
        response.json().then((result) => {
          setCategories(result);
        });
      })
      .catch((err) => { });

    console.log("use update effect called");


  }
  useEffect(() => {
    fetch("https://bc3-json-mock.herokuapp.com/expenses", {
      method: "GET",
    })
      .then((response) => {
        response.json().then((result) => {
          setData(result);
        });
      })
      .catch((err) => { });

   
    fetch(
      "https://bc3-json-mock.herokuapp.com/budgets",
      {
        method: "GET",
      }
    )
      .then((response) => {
        response.json().then((result) => {
          console.log(result);
          setBudgetData(result);
        });
      })
      .catch((err) => { });

    fetch("https://bc3-json-mock.herokuapp.com/categories", {
      method: "GET",
    })
      .then((response) => {
        response.json().then((result) => {
          setCategories(result);
        });
      })
      .catch((err) => { });

    console.log("use effect called");
    listTopExpenses();

  }, [reload]);

  return (
    <div className={classes.root} >

      <p className={classes.head}> Overview</p>
      <PriceCard left="122px" top="92px" title="Income" amount={getIncome()} statustext={"For " + getCurrentMonth()} pertext="" />
      <PriceCard left="452px" top="92px" title="Expense" amount={getExpenses()} statustext={"Spent today:₹" + getSpentToday()} pertext="" />
      <PriceCard left="778px" top="92px" title="Budget" amount={getBudgets()} statustext={"spent:₹" + getExpenses() + "     Left:₹" + (getBudgets() - getExpenses())} />
      <PriceCard left="1104px" top="92px" title="Bills" amount={getBills()} data={data} />
      <Chart left="126px" top="294px" expData={data} budgetData={budgetData} />
      <FeedCard left="1048px" top="294px" />
      <TransactionCard left="1048px" top="554px" data={data} addClick={(a) => setAdd(a)} />
      <p className={classes.categorieswithtop}> Categories with top expenses</p>
      {listTopExpenses()}

      <AddTransaction left="440px" top="223px" display={add} addClick={(a) => setAdd(a)} categories={categories} update={() => update()} />
    </div>
  );
};

export default Overview;
