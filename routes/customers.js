const express = require("express");
const router = express.Router();
// Import the dbhelper function and pass the db object to it
const { getCustomers } = require("../helpers/dbHelpers")(require("../db"));

module.exports = ({ getCustomers, getCustomerById }) => {
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

  // Get customer by id
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    getCustomerById(id)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  });
  return router;
};
