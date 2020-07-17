import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import BasicProfileTab from "js/_components/molecules/BasicProfileTab";
import GeneralProfileTab from "js/_components/organisms/GeneralProfileTab";
import COLORS from "js/utils/colors";
import { myTheme } from "theme";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: COLORS.white,
    height: "500px",
   
  },
  tabsborder: {
    borderBottom: "1px solid #e8e8e8",
  },
 
}));

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export default function ProfileSettingsTab() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root} data-testid="profilebar">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="full width tabs example"
        
      >
        <Tab
          label="Basic Profile"
          {...a11yProps(0)}
          style={{ fontWeight: "bold",fontFamily: myTheme.typography.fontFamily.default}}
        />
        <Tab label="General" style={{ fontWeight: "bold" , fontFamily: myTheme.typography.fontFamily.default}} />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <BasicProfileTab />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <GeneralProfileTab />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
