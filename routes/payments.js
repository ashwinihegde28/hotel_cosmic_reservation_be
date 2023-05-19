const express = require("express");
const router = express.Router();
// Import the dbhelper function and pass the db object to it
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);
// const chargeCustomer = require("../helpers/stripeHelpers")(stripe);
module.exports = ({ chargeCustomer }) => {

  router.post("/", (req, res) => {
    const { amount, currency, paymentMethod } = req.body;
    console.log("______ inside payment route", req.body);
    console.log(chargeCustomer);
    chargeCustomer(amount, currency, paymentMethod)
      .then((client_secret) => res.status(201).json(client_secret))
      .catch((err) => { res.status(500).json(err); console.log("______", err) }
      );

  });

  return router;
};
