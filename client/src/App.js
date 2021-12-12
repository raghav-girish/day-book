import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Fab,
  Button,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";
import memories from "./images/memories.png";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container>
      <AppBar className={classes.appBar} position="static" width="100%">
        <img className={classes.image} src={memories} alt="icon" height="50" />
        <Typography className={classes.heading} variant="h4" align="center">
          DAY-BOOK
        </Typography>
      </AppBar>

      <Container className={classes.container}>
        <Grid
          container
          // justify="space-between"
          // alignItems="stretch"
          spacing={3}
        >
          {/* <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid> */}
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <Fab
              variant="extended"
              color="primary"
              aria-label="add"
              style={{
                margin: 0,
                top: "auto",
                right: 20,
                bottom: 20,
                left: "auto",
                position: "fixed",
                marginBottom: 10,
                backgroundColor: "#7B1FA2",
              }}
            >
              New Memory
            </Fab>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={2}></Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default App;
