module.exports = (db) => {
  return {
    getCustomers: () => {
      const query = {
        text: "SELECT * FROM customers",
      };
      return db
        .query(query)
        .then((result) => result.rows)
        .catch((err) => err);
    },

    // get all the invoices
    getInvoices: () => {
      const query = {
        text: "SELECT * FROM invoices",
      };
      return db
        .query(query)
        .then((result) => result.rows)
        .catch((err) => err);
    },

    // get all the rooms
    getRooms: () => {
      const query = {
        text: "SELECT * FROM rooms",
      };
      return db
        .query(query)
        .then((result) => result.rows)
        .catch((err) => err);
    },

    //get all the services
    getServices: () => {
      const query = {
        text: "SELECT * FROM services",
      };
      return db
        .query(query)
        .then((result) => result.rows)
        .catch((err) => err);
    },
  };
};
