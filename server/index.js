require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authuserRoutes = require("./routes/authuser");
const authorganizerRoutes = require("./routes/authorganizer");
const organizerRoutes = require("./routes/organizers");
const eventRoutes = require("./routes/events");
const ticketRoutes = require("./routes/tickets");


// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/authuser", authuserRoutes);
app.use("/api/organizers", organizerRoutes);
app.use("/api/authorganizer", authorganizerRoutes);
app.use("/events",eventRoutes);
app.use("/tickets",ticketRoutes);


const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));