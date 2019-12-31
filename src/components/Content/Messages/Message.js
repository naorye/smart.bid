import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

const useStyles = createUseStyles({
  root: {
    fontSize: 14,
    position: "relative",
    padding: "20px 0",
    borderBottom: "1px solid #EEF0F1"
  },
  name: {
    fontWeight: "bold"
  },
  text: {
    marginTop: 6
  },
  date: {
    fontSize: 12,
    marginTop: 6
  },
  since: {
    position: "absolute",
    top: 20,
    right: 0
  }
});

function Message(props) {
  const { className, name, text, date, since } = props;
  const classes = useStyles();
  return (
    <div className={classnames(classes.root, className)}>
      <div className={classes.name}>{name}</div>
      <div className={classes.text}>{text}</div>
      <div className={classes.date}>{date}</div>
      <div className={classes.since}>{since}</div>
    </div>
  );
}

export default Message;
