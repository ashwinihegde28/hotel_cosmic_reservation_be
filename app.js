var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var app = express();

//For db connection
const db = require("./db");

//import the router modules
const customersRouter = require("./routes/customers");
const roomsRouter = require("./routes/rooms");
const invoicesRouter = require("./routes/invoices");
const servicesRouter = require("./routes/services");

const dbHelpers = require("./helpers/dbHelpers")(db);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// Define routes
app.use("/api/customers", customersRouter(dbHelpers));
app.use("/api/rooms", roomsRouter(dbHelpers));
app.use("/api/invoices", invoicesRouter(dbHelpers));
app.use("/api/services", servicesRouter(dbHelpers));

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal server error");
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});

module.exports = app;
