var express = require("express");
var router = express.Router();
var axios = require("axios");
var multer = require("multer");
var FormData = require("form-data");
var fs = require("fs");

var ItemDao = require("../dao/item");

router.get("/item/:id", async (req, res, next) => {
  const itemid = req.params.id;
  try {
    const data = await ItemDao.getItemById(itemid);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send("error");
  }
});

module.exports = router;
