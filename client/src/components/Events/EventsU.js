import React from "react";
import { Grid, CircularProgress } from '@material-ui/core';
import Event from "./Event/Event";
import EventU from "./Event/EventU";
import useStyles from "./styles";
import { useSelector } from 'react-redux';

const EventsU = ({ setCurrentId }) => {
    const events = useSelector((state) => state.events);
    const classes = useStyles();
  
    return (
      !events.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {events.map((event) => (
            <Grid key={event._id} item xs={6} sm={2} md={4}>
              <EventU event={event} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )
    );
  };
export default EventsU;