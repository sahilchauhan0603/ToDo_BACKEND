const serveStatic = require("serve-static");

const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware to parse json request body
app.use(express.json());
app.use(serveStatic("public"));

//import routes for TODO API
const todoRoutes = require("./routes/todos");

//mount the todo API routes
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/", (req, res) => {
  res.send(`<h1> I Love You Baby </h1>`);
});
