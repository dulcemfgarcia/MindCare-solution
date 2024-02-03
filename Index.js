const express = require("express"),
path = require("path"),
app = express(),
puerto = 3000;


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.static('css'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view options', { layout: 'layout' });
app.set("view engine", "hjs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
    res.render("index"); 
  });
app.get('/pagina', (peticion, respuesta) => {
    // Servir archivo HTML, o cualquier otro archivo
    let rutaDeArchivo = path.join(__dirname, "plantilla.html");
    respuesta.sendFile(rutaDeArchivo);
});

app.get('/hola', (peticion, respuesta) => {
    let mascota = {
        nombre: "Maggie",
        edad: 2,
    };
    respuesta.json(mascota);
});

// Una vez definidas nuestras rutas podemos iniciar el servidor
app.listen(puerto, err => {
    if (err) {
        // Aquí manejar el error
        console.error("Error escuchando: ", err);
        return;
    }
    // Si no se detuvo arriba con el return, entonces todo va bien ;)
    console.log(`Escuchando en el puerto :${puerto}`);
});
module.exports = app;