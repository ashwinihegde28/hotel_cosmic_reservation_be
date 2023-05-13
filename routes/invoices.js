const express = require("express");
const router = express.Router();
// Import the dbhelper function and pass the db object to it
const { getInvoices } = require("../helpers/dbHelpers")(require("../db"));

module.exports = ({ getInvoices, getInvoicesById }) => {
  // GET all invoices
  router.get("/", (req, res) => {
    getInvoices()
      .then((invoices) => res.json(invoices))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  // Get invoice by id
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    getInvoicesById(id)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  });

  return router;
};
