import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
import Badge from "./Badge";
import Box from "./Box";

const useStyles = createUseStyles({
  root: {},
  score: {
    fontSize: 40
  },
  description: {
    marginTop: 10,
    display: "flex",
    justifyContent: "space-between",
    fontSize: 14
  },
  change: {
    fontWeight: "bold",
    color: color => color || "#000000"
  }
});

function InfoBox(props) {
  const {
    className,
    title,
    badgeText,
    color,
    score,
    description,
    changePercent
  } = props;
  const classes = useStyles(color);
  return (
    <Box
      className={classnames(classes.root, className)}
      title={title}
      rightComponent={<Badge color={color} text={badgeText} />}
    >
      <>
        <div className={classes.score}>{score}</div>
        <div className={classes.description}>
          {description}
          <span className={classes.change}>{changePercent}%</span>
        </div>
      </>
    </Box>
  );
}

export default InfoBox;
