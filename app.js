const express = require("express")

const app = express()

app.use(express.json())

app.get('/', (_, res) => {
    return res.status(200).json({
        nome: "Emerson Sormany",
        idade: "30",
        profissao: "Desenvolvedor"
    })
})

app.listen(3000)