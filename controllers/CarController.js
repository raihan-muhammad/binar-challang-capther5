const db = require("./../models");

const getAllData = async (req, res) => {
    try {
        const allDataCars = await db.Car.findAll();
        return res.json({ message: "all data cars", data: allDataCars})
    } catch(err){
        console.log("request failed!")
        return res.status(500).json({ message: "fail!"})
    }
}

const addData = async (req, res) => {
    const { name, price, size, photo} = req.body;
    const responseAdd = await db.Car.create({ name, price, size, photo});
    return res.json({ message: "data successfully added!", data: responseAdd})
}

const getOneData = async (req, res) => {
    const { idFromParams } = req.params;
    const responseFindOne = await db.Car.findOne({ where: { id: idFromParams}});
    return res.status(200).json({ message: "get data successfully", data: responseFindOne})
}

const updateData = async (req, res) => {
    const {name, price, size, photo} = req.body;
    const { idFromParams } = req.params;
    const responseUpdate = await db.Car.update({ name, price, size, photo}, { where: { id: idFromParams }})
    return res.json({message: "update data successfully!", data:responseUpdate})
} 

const deleteData = async (req, res) => {
    const { idFromParams } = req.params;
    const responseDelete = await db.Car.destroy({ where: { id: idFromParams}});
    return res.json({ message: "delete data successfully!"})
}

module.exports = { addData, getAllData, getOneData, updateData, deleteData };