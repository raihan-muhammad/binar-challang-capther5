const db = require("./../models");

const getAllData = async (req, res) => {
    const allDataCars = await db.Car.findAll();
    return res.json({ message: "all data cars", data: allDataCars})
}

const addData = async (req, res) => {
    const { name, price, size, photo} = req.body;
    const responseAdd = await db.Car.create({ name, price, size, photo});
    return res.json({ message: "data successfully added!", data: responseAdd})
}

module.exports = { addData, getAllData };