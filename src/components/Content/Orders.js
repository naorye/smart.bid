import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
import Box from "../common/Box";
import DateRange from "../common/DateRange";
import BarStats from "../common/BarStats";
import ordersGraphImage from "../../images/orders.png";

const useStyles = createUseStyles({
  root: {},
  content: {
    display: "flex"
  },
  image: {
    maxWidth: "calc(100% - 340px)"
  },
  stats: {
    width: 250,
    flexShrink: 0,
    marginLeft: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  bar: {}
});

function Orders(props) {
  const { className } = props;
  const classes = useStyles();
  return (
    <Box
      className={classnames(classes.root, className)}
      contentClassName={classes.content}
      title="Orders"
      rightComponent={<DateRange selected="today" />}
    >
      <>
        <img className={classes.image} src={ordersGraphImage} alt="graph"></img>
        <div className={classes.stats}>
          <BarStats
            className={classes.bar}
            count="2,346"
            description="Total orders in period"
            percentage={48}
          />
          <BarStats
            className={classes.bar}
            count="4,422"
            description="Orders in last month"
            percentage={60}
          />
          <BarStats
            className={classes.bar}
            count="9,180"
            description="Monthly income from orders"
            percentage={22}
          />
        </div>
      </>
    </Box>
  );
}

export default Orders;
