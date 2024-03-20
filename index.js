const express = require('express')
const exphos = require ('express-handlebars')

const app = express()

app.engine("handlebars", exphos.engine())
app.set("view engine", "handlebars") 

app.use(express.static("public"));

const products = [
    {
        id: "1",
        title: "Livro",
        price: 12.9,
    },
    {
        id: "2",
        title: "Cadeira",
        price: 200.99,
    },
    {
        id: "3",
        title: "Lâmpada",
        price: 2.89,
    },
]

app.get("/", function (req,res){
    res.render ("home",{products})
})

app.get("/product/:id", function (req,res){
    const product = products [req.params.id]
    res.render("products", {product})
})

app.listen(3000)