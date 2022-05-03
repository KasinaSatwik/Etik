import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import useStyles from "./styles";
import { deleteEvent, likeEvent } from "../../../actions/events";

const EventU = ({event, setCurrentId}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const classes = useStyles();
    
    return (
        <Card className={classes.card}>
      <CardMedia className={classes.media} image={event.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={event.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{event.creator}</Typography>
        <Typography variant="body2">{moment(event.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(event._id)}><MoreHorizIcon fontSize="medium" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{event.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{event.title}</Typography>
      <Typography className={classes.location} gutterBottom variant="h5" component="h2">{event.location}</Typography>
      <Typography className={classes.city} gutterBottom variant="h5" component="h2">{event.city}</Typography>
      <CardContent>
        <Typography variant="body2" color="tblack" component="p">{event.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likeEvent(event._id))}><ThumbUpAltIcon fontSize="small" /> &nbsp; Like &nbsp; {event.likeCount} </Button>
        <NavLink to ={`/sale/${event._id}`}>BuyTicket</NavLink>
        
      </CardActions>
    </Card>
    )
}

export default EventU;