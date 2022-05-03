//import styles from "./styles.module.css";
import React,{useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import { Container , AppBar,Toolbar,IconButton, Typography, Grow, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';
import Events from "../Events/Events"
import Form from "../Form/Form"
import useStyles from "./styles";
import {getEvents} from "../../actions/events"

const Mainorganizer = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location = "/option";
	};
	const [currentId, setCurrentId] = useState(0);
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() =>{
         dispatch(getEvents());
	}, [dispatch]);

	return (
		<Container maxwidth="lg">
			<AppBar className={classes.appBar} position="static" color="info">
				<Toolbar>
					<Typography className={classes.heading} variant ="h4" align="center">Etik's Organizer Space</Typography> 
					<Button className={classes.btn} align ="right" variant="gradient" color='info' size="small" onClick={handleLogout}>
					 Logout
					</Button>
				</Toolbar>
				
			</AppBar>
			<Grow in>
				<Container>
					<Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                         <Grid item xs={12} sm={7}>
                            <Events setCurrentId={setCurrentId}/>
						 </Grid>
						 <Grid item xs={12} sm={4}>
							<Form currentId={currentId} setCurrentId={setCurrentId}/>
						 </Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default Mainorganizer;

{/* <div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Organizer Dashboard</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div> */}