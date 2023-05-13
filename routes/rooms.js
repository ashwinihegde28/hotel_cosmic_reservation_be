const express = require("express");
const router = express.Router();

// Import the dbhelper function and pass the db object to it
const { getInvoices } = require("../helpers/dbHelpers")(require("../db"));

module.exports = ({ getRooms }) => {
  // GET all invoices
  router.get("/", (req, res) => {
    getRooms()
      .then((rooms) => res.json(rooms))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
