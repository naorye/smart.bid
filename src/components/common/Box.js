import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

const useStyles = createUseStyles({
  root: {
    backgroundColor: "#FFFFFF",
    color: "#676A6C"
  },
  header: {
    fontSize: 16,
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #F1F2F4"
  },
  content: {
    padding: 28
  }
});

function Box(props) {
  const {
    className,
    title,
    children,
    rightComponent,
    contentClassName
  } = props;
  const classes = useStyles();
  return (
    <div className={classnames(classes.root, className)}>
      <div className={classes.header}>
        {title}
        {rightComponent}
      </div>
      <div className={classnames(classes.content, contentClassName)}>
        {children}
      </div>
    </div>
  );
}

export default Box;
