//import styles from "./styles.module.css";
import React,{useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { Container , AppBar,Toolbar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import EventsU from "../Events/EventsU";
import useStyles from "./styles";
import {getEvents} from "../../actions/events"

const Mainuser = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location = "/option";
	};
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() =>{
         dispatch(getEvents());
	}, [dispatch]);

	return (
		<Container maxwidth="lg">
			<AppBar className={classes.appBar} position="static" color="inherit">
				<Toolbar>
					<Typography className={classes.heading} variant ="h4" align="center">Etik's User Space</Typography> 
					<Button className={classes.btn} align ="right" variant="gradient" color="info" size="small" onClick={handleLogout}>
					 Logout
					</Button>
				</Toolbar>
				
			</AppBar>
			<Grow in>
				<Container>
					<Grid container justifyContent="space-between" alignItems="center" spacing={0}>
						<EventsU/>
					</Grid>
				</Container>
			</Grow>
		</Container>






		// <div className={styles.main_container}>
		// 	<nav className={styles.navbar}>
		// 		<h1>User Dashboard</h1>
		// 		<button className={styles.white_btn} onClick={handleLogout}>
		// 			Logout
		// 		</button>
		// 	</nav>
		// </div>
	);
};

export default Mainuser;