const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const characterRoutes = require("./routes/character");

const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use('/api', characterRoutes);


// routes
app.get('/', (req, res) => {
    res.send("Welcome to the best movie horror villains API");
});

// mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));