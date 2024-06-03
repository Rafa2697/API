import express from 'express';
const app = express();
import data from './data.json' with {type: "json"}

//verbos HTTP   
//get post put delete

app.use(express.json())

app.get("/clients", function(request, response){
    
    response.json(data)
})
app.get("/clients/:id", function(request, response){
    const {id} = request.params;
    const client = data.find(cli => cli.id == id);


        if(!client) return response.status(204).json();

    response.json(client)
})
app.post("/clients", function(request, response){
    const {nome, email} = request.body;

    //salvar

    response.json({nome});
})
app.put("/clients/:id", function(request, response){
    const {id} = request.params;
    const client = data.find(cli => cli.id == id);
    
    if(!client) return response.status(204).json();

   const {nome} = request.body;
    client.nome = nome;
   response.json(client)
})
app.delete("/clients/:id", function(request, response){
    const { id } = request.params;
    const clientsFiltered = data.filter(client => client.id != id);

    response.json(clientsFiltered);
})

app.listen(3001, function(){
    console.log('servidor rodando...')
})