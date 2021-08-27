const express = require("express");
const router = express.Router();
const moment = require("moment");

const { tbl_products, tbl_orders } = require("../models/index");

router.get("/order", function (req, res, next) {
  const { table } = req.query;
  res.render("order", { table: table });
  tbl_products.findAndCountAll().then((result) => {
    res.render("products", { PD: result.rows });
  });
});

module.exports = router;
