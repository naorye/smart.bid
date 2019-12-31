import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
import Box from "../../common/Box";
import BoxConfigurations from "../../common/BoxConfigurations";
import { ReactComponent as EnvelopeIcon } from "../../../images/envelope.svg";
import Message from "./Message";

const useStyles = createUseStyles({
  root: {},
  header: {
    backgroundColor: "#F3F6FB",
    margin: -30,
    padding: 30,
    border: "1px solid #EEF0F1",
    borderLeft: 0,
    borderRight: 0
  },
  title: {
    display: "flex",
    fontSize: 30,
    alignItems: "center"
  },
  icon: {
    height: 40,
    marginRight: 10
  },
  description: {
    marginTop: 10,
    fontSize: 12
  },
  message: {
    "$header + &": {
      marginTop: 30
    }
  }
});

function Messages(props) {
  const { className } = props;
  const classes = useStyles();
  return (
    <Box
      className={classnames(classes.root, className)}
      title="Messages"
      rightComponent={<BoxConfigurations />}
    >
      <>
        <div className={classes.header}>
          <div className={classes.title}>
            <EnvelopeIcon className={classes.icon} />
            New Messages
          </div>
          <div className={classes.description}>
            You have 22 new messages and 16 waiting in draft folder.
          </div>
        </div>

        <Message
          className={classes.message}
          name="Monica Smith"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv"
          date="Today 5:60 pm - 12.06.2014"
          since="1m ago"
        />

        <Message
          className={classes.message}
          name="Jogn Angel"
          text="tting, remaining essentially unchanged. It was popul"
          date="Today 2:23 pm - 11.06.2014"
          since="2m ago"
        />

        <Message
          className={classes.message}
          name="Jesica Ocean"
          text="making it look like readable English. Many desktop publishing packages and web page editors now use Lor"
          date="Today 1:00 pm - 08.06.2014"
          since="5m ago"
        />

        <Message
          className={classes.message}
          name="Monica Smith"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv"
          date="Today 5:60 pm - 12.06.2014"
          since="1m ago"
        />

        <Message
          className={classes.message}
          name="Jogn Angel"
          text="tting, remaining essentially unchanged. It was popul"
          date="Today 2:23 pm - 11.06.2014"
          since="2m ago"
        />

        <Message
          className={classes.message}
          name="Jesica Ocean"
          text="making it look like readable English. Many desktop publishing packages and web page editors now use Lor"
          date="Today 1:00 pm - 08.06.2014"
          since="5m ago"
        />

        <Message
          className={classes.message}
          name="Jesica Ocean"
          text="making it look like readable English. Many desktop publishing packages and web page editors now use Lor"
          date="Today 1:00 pm - 08.06.2014"
          since="5m ago"
        />
      </>
    </Box>
  );
}

export default Messages;
