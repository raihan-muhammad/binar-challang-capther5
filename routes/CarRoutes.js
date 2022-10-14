const express = require("express");
const router = express.Router();
const { addData, getAllData } = require("./../controllers/CarController");

router.get("/", getAllData)
router.post("/", addData);

module.exports = router;