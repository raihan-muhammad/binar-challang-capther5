const express = require("express");
const router = express.Router();
const { addData, getAllData, updateData, getOneData, deleteData } = require("./../controllers/CarController");

router.get("/", getAllData);
router.post("/", addData);
router.put("/:idFromParams", updateData);
router.get("/:idFromParams", getOneData)
router.delete("/:idFromParams", deleteData)

module.exports = router;