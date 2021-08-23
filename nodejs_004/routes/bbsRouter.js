const express = require("express");
const router = express.Router();

const{tbl_bbs} = require("../models/index");



router.get("/write", (req,res)=>{
    res.render("write");
})

router.post("/write", (req, res)=>{
    tbl_bbs.create(req.body)
    .then(result=>{
        res.json(result);
    })
})

router.get("/update", (req, res)=>{
    let seq = req.query.seq;
    tbl_bbs.findByPk(seq).then( (result) =>{
        console.log("hello");

        res.render("update", {vo:result});
    } )
  })

module.exports = router;