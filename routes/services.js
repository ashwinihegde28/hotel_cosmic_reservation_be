const express = require("express");
const router = express.Router();
// Import the dbhelper function and pass the db object to it
const { getServices } = require("../helpers/dbHelpers")(require("../db"));

module.exports = ({ getServices }) => {
  // GET all services
  router.get("/", (req, res) => {
    getServices()
      .then((services) => res.json(services))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
