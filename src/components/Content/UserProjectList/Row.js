import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #EEF0F1",
    padding: "10px 0"
  },
  cell: {}
});

function Row(props) {
  const { className, cellClassName, status, date, user, value } = props;
  const classes = useStyles();
  return (
    <div className={classnames(classes.root, className)}>
      <div className={classnames(classes.cell, cellClassName)}>{status}</div>
      <div className={classnames(classes.cell, cellClassName)}>{date}</div>
      <div className={classnames(classes.cell, cellClassName)}>{user}</div>
      <div className={classnames(classes.cell, cellClassName)}>{value}</div>
    </div>
  );
}

export default Row;
