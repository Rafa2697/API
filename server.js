import express from 'express'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
const app = express()
app.use(express.json())
const users = []

//busca de usuario
app.get('/users', (req, res) => {
    res.status(200).json(users)
})

//inserindo usuarios
app.post('/users', async (req, res) => {
    
    await prisma.user.create({
        data:{
            nome: req.body.nome,
            ra: req.body.ra,
            email: req.body.email,
            senha: req.body.senha
        }
        
    })
    console.log(req.body.senha)

    res.status(201).send('ok post')
})

//deletando usuario
app.delete('/users', (req, res) => {
    
})

app.listen(3000, () => {
    console.log("servidor ativado...")
})
