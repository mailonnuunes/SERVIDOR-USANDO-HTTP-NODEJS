import http from "http";

const PORT = 3000;

const rotas = {
    "/":"Curso na alura",
    "/livros":"entrei na rota livros"
};
const server = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(rotas[req.url]);
});

server.listen(PORT, ()=>{
    console.log("o servidor esta escutando....")
})