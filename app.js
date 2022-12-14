const express = require('express');
const config = require('./configuration/config');
const peliculasRoute = require('./routes/pelicula.route');
const salasRoute = require('./routes/sala.route');
const app = express();
app.use(express.json());

app.use('/api/peliculas', peliculasRoute);
app.use('/api/salas', salasRoute);

app.listen(config.PORT, () => {
    console.log(`Api corriendo por el puerto ${config.PORT}`)
});
