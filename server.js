const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.send('Soy el man');
})

app.listen( process.env.PORT || 3000, ()=>{
    console.log('Servidor escuchando en el puerto 3000');
})