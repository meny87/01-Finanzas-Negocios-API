require('./config/config');

const express = require('express');
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("./db/mongoose");

const amigoCuotasRoutes = require("./api/routes/amigoCuotas");
const amigoPenalizacionRoutes = require("./api/routes/amigoPenalizaciones");
const amigoEgresosRoutes = require("./api/routes/amigoEgresos");
const amigoConductoresRoutes = require("./api/routes/amigoConductores");
const amigoUnidadesRoutes = require("./api/routes/amigoUnidades");
const userRoutes = require('./api/routes/user');

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
app.use("/amigoCuotas", amigoCuotasRoutes);
app.use("/amigoPenalizaciones", amigoPenalizacionRoutes);
app.use("/amigoEgresos", amigoEgresosRoutes);
app.use("/amigoConductores", amigoConductoresRoutes);
app.use("/amigoUnidades", amigoUnidadesRoutes);
app.use("/user", userRoutes);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;