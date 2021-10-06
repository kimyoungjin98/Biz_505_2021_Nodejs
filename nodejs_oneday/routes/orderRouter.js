const express = require("express");
const router = express.Router();
const moment = require("moment");

const { tbl_products, tbl_orders } = require("../models/index");

router.get("/", function (req, res, next) {
  const { table } = req.query;
  tbl_products.findAndCountAll().then((result) => {
    res.render("order", { PD: result.rows, table: table });
  });
});

router.post("/", function (req, res, next) {
  const p_name = req.body.p_name;
  const table = req.body.table;
  console.log(p_name);
  tbl_products.findOne({ where: { p_name: p_name } }).then((result) => {
    res.json(result);
  });
});

module.exports = router;
