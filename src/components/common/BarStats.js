import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

const useStyles = createUseStyles({
  root: {},
  count: {
    fontSize: 30
  },
  description: {
    fontSize: 16,
    display: "flex",
    justifyContent: "space-between"
  },
  bar: {
    position: "relative",
    height: 5,
    marginTop: 10,
    borderRadius: 60,
    overflow: "hidden",
    backgroundColor: "#f1f2f4",
    "&:after": {
      backgroundColor: "#1AB394",
      content: "''",
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: percentage => `${percentage}%`
    }
  }
});

function BarStats(props) {
  const { className, count, description, percentage } = props;
  const classes = useStyles(percentage);
  return (
    <div className={classnames(classes.root, className)}>
      <div className={classes.count}>{count}</div>
      <div className={classes.description}>
        {description}
        <span>{percentage}%</span>
      </div>
      <div className={classes.bar}></div>
    </div>
  );
}

export default BarStats;
