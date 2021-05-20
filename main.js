const express = require ('express');
const app = express();

//Invocacion del motor de plantillas ejs
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index');
});

//crea el puerto de escucha del servidor
app.listen(5000, ()=>{
    console.log('Servidor activo: en http://localhost:5000')
})