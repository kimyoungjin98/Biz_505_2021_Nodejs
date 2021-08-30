var express = require("express");
var router = express.Router();

const { tbl_orders, tbl_products } = require("../models/index");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", function (req, res, next) {
  const num = req.body.num;
  tbl_orders.findOne({ where: { o_table: num } }).then((result) => {
    console.log(result);
    res.redirect("/");
  });
});

router.get("/order", function (req, res, next) {
  const { table } = req.query;
  tbl_products.findAndCountAll().then((result) => {
    res.render("order", { PD: result.rows, table: table });
  });
});

router.post("/order", function (req, res, next) {
  const p_name = req.body.p_name;
  const table = req.body.table;
  console.log(p_name);
  tbl_products.findOne({ where: { p_name: p_name } }).then((result) => {
    res.redirect(`/order?table=${table}`);
  });
});

module.exports = router;
