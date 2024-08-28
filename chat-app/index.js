const express = require("express");
const connectToDB = require("./connect");
const path = require("path");

const PORT = 3000;

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to mongodb
connectToDB("mongodb://localhost:27017/chatapp").then(() => {
  console.log("Connected to DB");
});

//setting up ejs as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//import routes
const staticRoute = require("./routes/staticRoute");
const userRoute = require("./routes/user");
const chatRoute = require('./routes/chat');

//handle routes
app.use("/", staticRoute);
app.use("/user", userRoute);
app.use('/chat', chatRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
