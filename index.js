const express = require("express");
const app = express();
const CarRoutes = require("./routes/CarRoutes");
const db = require("./models/car")

app.set("view engine", "ejs");

app.use(express.json());
app.use("/api/v1/cars", CarRoutes)

app.get("/", (req, res) => {
    let data;
    db.Car.findAll().then((car) => data = car)
    res.render("index", data);
})

app.get("/add-car", (req, res) => {
    res.render("add-car");
})

app.get("/update-car", (req, res) => {
    res.render("update-car");
})



app.listen(8000, () => {
    console.log('server runnning on port 8000');
})