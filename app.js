
const http = require('http');
const port = 3000 
const ip = 'localhost'

const server = http.createServer(
    (_, res) => {
        res.end({
            "nome": "Emerson Sormany",
            "idade": "30",
            "profissao": "Desenvolvedor"
        })}
)

server.listen(port || 3000, ip, ()=> { console.log(`Servidor rodando em http://${ip}:${port}`)})