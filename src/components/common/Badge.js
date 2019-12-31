import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    backgroundColor: color => color || "#1C84C6",
    color: "#ffffff",
    fontSize: 12,
    padding: "2px 6px"
  }
});

function Badge({ color = undefined, text = "" }) {
  const classes = useStyles(color);
  return <div className={classes.root}>{text}</div>;
}

export default Badge;
