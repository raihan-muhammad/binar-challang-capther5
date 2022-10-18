const express = require("express");
const app = express();
const CarRoutes = require("./routes/CarRoutes");
const db = require("./models");
const path = require("path")

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.json());
app.use("/api/v1/cars", CarRoutes)


app.get("/", async (req, res) => {
    const data = await db.Car.findAll();
    res.render("index", {data});
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