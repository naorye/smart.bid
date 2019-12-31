import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
import Box from "../../common/Box";
import BoxConfigurations from "../../common/BoxConfigurations";
import Item from "./Item";

const useStyles = createUseStyles({
  root: {},
  item: {
    margin: "4px 0"
  }
});

function UserProjectList(props) {
  const { className } = props;
  const classes = useStyles();
  return (
    <div className={classnames(classes.root, className)}>
      <Box title="Small todo list" rightComponent={<BoxConfigurations />}>
        <>
          <Item className={classes.item} text="Buy a milk" isDone />
          <Item
            className={classes.item}
            text="Go to shop and find osme products."
          />
          <Item
            className={classes.item}
            text="Send documents to Mike"
            time="1 mins"
          />
          <Item
            className={classes.item}
            text="Go to the doctor dr sSmith"
            isDone
          />
          <Item className={classes.item} text="Plan vacation" />
          <Item className={classes.item} text="Create new stuff" />
          <Item className={classes.item} text="Call to Anna for dinner" />
        </>
      </Box>
    </div>
  );
}

export default UserProjectList;
