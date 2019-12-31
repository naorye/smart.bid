import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

const useStyles = createUseStyles({
  root: {
    borderRadius: 6,
    backgroundColor: "#ffffff",
    display: "flex",
    overflow: "hidden"
  },
  item: {
    cursor: "pointer",
    border: "1px solid #F1F2F4",
    flexShrink: 0,
    padding: "4px 6px"
  },
  selected: {
    backgroundColor: "#D2D2D2"
  }
});

function DateRange(props) {
  const { selected } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div
        className={classnames(classes.item, {
          [classes.selected]: selected === "today"
        })}
      >
        Today
      </div>
      <div
        className={classnames(classes.item, {
          [classes.selected]: selected === "monthly"
        })}
      >
        Monthly
      </div>
      <div
        className={classnames(classes.item, {
          [classes.selected]: selected === "annual"
        })}
      >
        Annual
      </div>
    </div>
  );
}

export default DateRange;
