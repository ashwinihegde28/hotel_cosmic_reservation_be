const express = require("express");
const router = express.Router();
// Import the dbhelper function and pass the db object to it
const { getCustomers } = require("../helpers/dbHelpers")(require("../db"));

module.exports = ({ getCustomers }) => {
  // GET all customers
  router.get("/", (req, res) => {
    getCustomers()
      .then((customers) => res.json(customers))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
