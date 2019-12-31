import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

const useStyles = createUseStyles({
  root: {
    backgroundColor: "#F3F3F4",
    padding: "5px 10px",
    borderRadius: 4,
    display: "flex",
    alignItems: "center"
  },
  checkbox: {
    height: 22,
    width: 20
  },
  done: {
    textDecoration: "line-through"
  }
});

function Row(props) {
  const { className, text, isDone } = props;
  const classes = useStyles();
  return (
    <div
      className={classnames(
        classes.root,
        { [classes.done]: isDone },
        className
      )}
    >
      <input type="checkbox" className={classes.checkbox} checked={isDone} />{" "}
      {text}
    </div>
  );
}

export default Row;
