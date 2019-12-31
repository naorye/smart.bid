import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
import Box from "../common/Box";
import BoxConfigurations from "../common/BoxConfigurations";
import transactionsImage from "../../images/transactions.png";

const useStyles = createUseStyles({
  root: {},
  image: {
    maxHeight: "100%",
    maxWidth: "100%"
  }
});

function Transactions(props) {
  const { className } = props;
  const classes = useStyles();
  return (
    <Box
      className={classnames(classes.root, className)}
      title="Transactions worldwide"
      rightComponent={<BoxConfigurations />}
    >
      <img
        className={classes.image}
        src={transactionsImage}
        alt="transactions"
      ></img>
    </Box>
  );
}

export default Transactions;
