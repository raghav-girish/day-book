import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grid,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import Posts from "./components/Posts/Posts";
import CreateButton from "./components/CreateButton/createButton";
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
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <CreateButton />
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={2}></Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default App;
