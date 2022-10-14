const express = require("express");
const router = express.Router();
const { addData, getAllData } = require("./../controllers/CarController");

router.get("/", getAllData).post(addData);

module.exports = router;