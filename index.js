const bodyParser = require("body-parser");
const express = require("express");
const app = express();
/*const {create, list, listFiltro}  = require("./src/service/crypto-service")*/
const cryptoService  = require("./src/service/crypto-service")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/teste', (req, res) =>{
    return res.json({teste:true})
})

app.post('/crypto', async (req, res) =>{
   const cryptoCreat = await cryptoService.create(req.body)
   res.json(cryptoCreat)
})


app.listen(3000, () => console.log("aplicação rodando"))

