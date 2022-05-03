import React,{useState, useEffect} from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from "./styles";
import { createEvent, updateEvent } from '../../actions/events';

const Form = (currentId, setCurrentId) => {
    const [eventData, setEventData] = useState({ creator: '', title: '', description: '', tags: '', selectedFile: '' });
    const event = useSelector((state) => (currentId ? state.events.find((p) => p._id === currentId) : null));
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (event) setEventData(event);
      }, [event]);

    const clear = () => {
      currentId=null;
      setEventData({ creator: '', title: '', message: '', tags: '', selectedFile: '', location:'', city:'' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //  if (!currentId) {
            dispatch(createEvent(eventData));
            clear();
          //  } else {
          //   dispatch(updateEvent(currentId, eventData));
          //   clear();
          // }
    };
    
    return (
        <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? 'Create'  : 'Create'} an event</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={eventData.creator} onChange={(e) => setEventData({ ...eventData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={eventData.title} onChange={(e) => setEventData({ ...eventData, title: e.target.value })} />
        <TextField name="location" variant="outlined" label="Location" fullWidth value={eventData.location} onChange={(e) => setEventData({ ...eventData, location: e.target.value })} />
        <TextField name="city" variant="outlined" label="City" fullWidth value={eventData.city} onChange={(e) => setEventData({ ...eventData, city: e.target.value })} />
        <TextField name="description" variant="outlined" label="Description" fullWidth multiline minRows={4} value={eventData.message} onChange={(e) => setEventData({ ...eventData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={eventData.tags} onChange={(e) => setEventData({ ...eventData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setEventData({ ...eventData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button className={classes.buttonClear}variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
    )
}

export default Form;