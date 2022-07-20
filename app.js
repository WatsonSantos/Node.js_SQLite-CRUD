const express = require('express')
const app = express()
const sequelize = require("./src/config/database");
const productRoutes = require("./src/routes/productRoutes");

sequelize.sync().then(() => console.log("database connected successfully 🏦"));

app.use(express.json())

app.use("/api/products",productRoutes)

const port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log("Servidor rodando no endereço: http://localhost:"+port)
})