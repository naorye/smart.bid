import React from "react";
import { createUseStyles } from "react-jss";
import SideMenu from "./components/SideMenu";
import Content from "./components/Content";

const useStyles = createUseStyles({
  root: {
    backgroundColor: "#F3F3F4",
    display: "flex",
    minHeight: "100vh",
    overflow: "auto"
  },
  sideMenu: {
    width: 242,
    position: "sticky",
    left: 0,
    minHeight: "100%",
    flexShrink: 0
  },
  content: {
    padding: 30
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideMenu className={classes.sideMenu} />
      <Content className={classes.content} />
    </div>
  );
}

export default App;
