import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
import { ReactComponent as UpIcon } from "../../images/up.svg";
import { ReactComponent as WrenchIcon } from "../../images/wrench.svg";
import { ReactComponent as CloseIcon } from "../../images/x.svg";

const useStyles = createUseStyles({
  root: {},
  icon: {
    fill: "#C4C4C4",
    width: 13,
    margin: "0px 3px"
  }
});

function BoxConfigurations(props) {
  const { className } = props;
  const classes = useStyles();
  return (
    <div className={classnames(classes.root, className)}>
      <UpIcon className={classes.icon} />
      <WrenchIcon className={classes.icon} />
      <CloseIcon className={classes.icon} />
    </div>
  );
}

export default BoxConfigurations;
