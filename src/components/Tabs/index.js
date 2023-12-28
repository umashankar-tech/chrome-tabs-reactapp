import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [stateArray, setStateArray] = React.useState(["New tab 1"]);

  const increaseArrayLength = () => {
    const newIndex = stateArray.length;
    setStateArray([...stateArray, `New tab ${newIndex + 1}`]);
    setValue(newIndex); // Set the value to the newly added tab index
  };

  const handleCloseTab = (event, index) => {
    event.stopPropagation();
    const newArray = [...stateArray];
    newArray.splice(index, 1);
    setStateArray(newArray);

    if (value >= newArray.length) {
      setValue(newArray.length - 1);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        paddingTop={0.5}
        sx={{
          borderColor: "divider",
          alignItems: "center",
          backgroundColor: "#B6BBC4",
        }}
      >
        <Tabs
          sx={{ height: "20px" }}
          value={value}
          style={{ height: "30px" }}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="white"
        >
          {stateArray.map((data, index) => (
            <Tab
              key={index}
              label={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "11px",
                    height: "20px",
                    color:"black"
                  }}
                >
                  <span>{data}</span>
                  <CloseIcon
                    onClick={(event) => handleCloseTab(event, index)}
                    style={{
                      marginLeft: "40px",
                      cursor: "pointer",
                      fontSize: "15px",
                    }}
                  />
                  
                </div>
              }
              {...a11yProps(index)}
              sx={{
                backgroundColor: value === index ? "white" : "#B6BBC4",
                borderTopRightRadius: "12px",
                borderTopLeftRadius: "12px",
                height: "20px",
              }}
            />
          ))}
          <Box mt={1.5} onClick={increaseArrayLength} cursor="pointer">
            <AddIcon fontSize="small" onClick={increaseArrayLength} />
          </Box>
        </Tabs>
      </Box>
      {stateArray.map((data, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {`${data} `}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
