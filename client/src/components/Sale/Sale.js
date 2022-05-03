import React,{useState} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography, Paper,Select,FormControl,MenuItem,InputLabel } from '@material-ui/core';
import useStyles from "./styles";
import { createTicket } from '../../actions/tickets';

function Sale() {
  const [ticketData, setTicketData] = useState({ eventid : '', quantity : '' , type: '', price : '' , PhnNo:''});
    let navigate = useNavigate();
    let {eventid} = useParams();
    const dispatch = useDispatch();
    const classes = useStyles();
    ticketData.eventid=eventid;

    const clear = () => {
      setTicketData({ eventid : '', quantity : '' , type: '', price : '', PhnNo:'' });
    };
    var r;
    if (ticketData.type === "Gold") {
        r = 350;
    }
    if (ticketData.type === "Silver") {
        r = 250;
    }
    if (ticketData.type === "Bronze") {
        r = 150;
    }
    const amount = (ticketData.quantity)*r;
    ticketData.price=amount;

    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(createTicket(ticketData));
      clear();
      navigate("../mainuser", { replace: true });

       
        

  };
    

  return (
    <div className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Details</Typography>
        {/* <TextField name="type" variant="outlined" label="Type" fullWidth value={ticketData.type} onChange={(e) => setTicketData({ ...ticketData, type: e.target.value })} /> */}
        <TextField name="quantity" variant="outlined" label="Quantity" fullWidth value={ticketData.quantity} onChange={(e) => setTicketData({ ...ticketData, quantity: e.target.value })} />
        <FormControl >
        <InputLabel id="demo-simple-select-label">Ticket Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ticketData.type}
          label="Type"
          onChange={(e) => setTicketData({ ...ticketData, type: e.target.value })}
          >
          <MenuItem value="Gold">Gold</MenuItem>
          <MenuItem value="Silver">Silver</MenuItem>
          <MenuItem value="Bronze">Bronze</MenuItem>
        </Select>
        <Typography className= 'price' variant="h6">Price : {amount}</Typography>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        </FormControl>
        
        
      </form>
    </div>
  )
}

export default Sale