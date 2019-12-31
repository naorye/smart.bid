import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
import Box from "../../common/Box";
import BoxConfigurations from "../../common/BoxConfigurations";
import Badge from "../../common/Badge";
import Row from "./Row";

const useStyles = createUseStyles({
  root: {},
  header: {
    fontWeight: "bold",
    borderBottom: "1px solid #E7E7E7"
  },
  cell: {
    width: "20%"
  }
});

function UserProjectList(props) {
  const { className } = props;
  const classes = useStyles();
  return (
    <div className={classnames(classes.root, className)}>
      <Box title="User project list" rightComponent={<BoxConfigurations />}>
        <>
          <Row
            className={classes.header}
            cellClassName={classes.cell}
            status="Status"
            date="Date"
            user="User"
            value="Value"
          />

          <Row
            cellClassName={classes.cell}
            status="Pending..."
            date="11:20pm"
            user="Samantha"
            value="24%"
          />

          <Row
            cellClassName={classes.cell}
            status={<Badge color="#F8AC59" text="Canceled" />}
            date="10:40am"
            user="Monica"
            value="66%"
          />

          <Row
            cellClassName={classes.cell}
            status="Pending..."
            date="01:30pm"
            user="John"
            value="54%"
          />

          <Row
            cellClassName={classes.cell}
            status={<Badge color="#1AB394" text="Completed" />}
            date="02:20pm"
            user="Agnes"
            value="12%"
          />

          <Row
            cellClassName={classes.cell}
            status="Pending..."
            date="04:10am"
            user="Amelia"
            value="66%"
          />

          <Row
            cellClassName={classes.cell}
            status="Pending..."
            date="12:08am"
            user="Damien"
            value="23%"
          />
        </>
      </Box>
    </div>
  );
}

export default UserProjectList;
