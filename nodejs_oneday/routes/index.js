var express = require("express");
var router = express.Router();

const { tbl_orders, tbl_products, sequelize } = require("../models/index");

/* GET home page. */
router.get("/", async (req, res, next) => {
  const table_count = 10;

  const order_count = await tbl_orders.findAll({
    attributes: [
      "o_table",
      [sequelize.fn("count", sequelize.col("o_table")), "count"],
    ],
    where: { o_price: null },
    group: "o_table",
  });

  res.render("index", { title: "만찐두빵", TABLE: table_count });
});

router.post("/", (req, res, next) => {
  const table = req.body.table;
  tbl_orders.findOne({ where: { o_table: table } }).then((result) => {
    console.log(result);
    res.json(result);
  });
});

module.exports = router;
