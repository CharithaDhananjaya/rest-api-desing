const express = require("express");
const app = express();

const productsRoutes = require("./api/routes/products");

app.use("/home",(req, res, next) => {
    res.status(200).json({
        message: "It Works!"
    });
});

app.get("/homeget",(req, res, next) => {
    res.status(200).json({
        message: "GET It Works in home!"
    });
});

//Sample Comment for the git.
app.use("/products", productsRoutes);

module.exports = app;