import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
import InfoBox from "../common/InfoBox";
import Orders from "./Orders";
import Messages from "./Messages";
import UserProjectList from "./UserProjectList";
import SmallTodoList from "./SmallTodoList";
import Transactions from "./Transactions";

const useStyles = createUseStyles({
  root: {
    display: "grid",
    gridTemplate: "repeat(4, auto) / repeat(12, 1fr)",
    gridGap: 30
  },
  incomeInfo: {
    gridColumnStart: 1,
    gridColumnEnd: 4
  },
  ordersInfo: {
    gridColumnStart: 4,
    gridColumnEnd: 7
  },
  visitsInfo: {
    gridColumnStart: 7,
    gridColumnEnd: 10
  },
  activityInfo: {
    gridColumnStart: 10,
    gridColumnEnd: 13
  },
  orders: {
    gridColumnStart: 1,
    gridColumnEnd: 13
  },
  messages: {
    gridColumnStart: 1,
    gridColumnEnd: 5,
    gridRowStart: 3,
    gridRowEnd: 5
  },
  inner: {
    gridColumnStart: 5,
    gridColumnEnd: 13,
    display: "grid",
    gridTemplate: "repeat(2, auto) / repeat(2, auto)",
    gridGap: 30
  },
  userProjectList: {},
  smallTodoList: {},
  transactions: {
    gridColumnStart: 1,
    gridColumnEnd: 3
  }
});

function Content(props) {
  const { className } = props;
  const classes = useStyles();
  return (
    <div className={classnames(classes.root, className)}>
      <InfoBox
        className={classes.incomeInfo}
        title="Income"
        badgeText="Monthly"
        color="#1C84C6"
        score="40,886,200"
        description="Total income"
        changePercent={98}
      />
      <InfoBox
        className={classes.ordersInfo}
        title="Orders"
        badgeText="Annual"
        color="#23C6C8"
        score="275,800"
        description="New orders"
        changePercent={20}
      />
      <InfoBox
        className={classes.visitsInfo}
        title="Visits"
        badgeText="Today"
        color="#1AB394"
        score="106,120"
        description="New visits"
        changePercent={44}
      />
      <InfoBox
        className={classes.activityInfo}
        title="User activity"
        badgeText="Low value"
        color="#ED5565"
        score="80,600"
        description="In first month"
        changePercent={38}
      />
      <Orders className={classes.orders} />

      <Messages className={classes.messages} />

      <div className={classes.inner}>
        <UserProjectList className={classes.userProjectList} />

        <SmallTodoList className={classes.smallTodoList} />

        <Transactions className={classes.transactions} />
      </div>
    </div>
  );
}

export default Content;
