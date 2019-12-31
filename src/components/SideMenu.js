import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

const useStyles = createUseStyles({
  root: {
    backgroundColor: "#2F4050"
  }
});

function SideMenu(props) {
  const { className } = props;
  const classes = useStyles();
  return <div className={classnames(classes.root, className)}>Side menu</div>;
}

export default SideMenu;
