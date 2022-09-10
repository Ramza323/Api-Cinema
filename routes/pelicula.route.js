const { Router } = require('express');
const { obtenerPeliculas, obtenerPeliculasPorId, insertarPelicula } = require('../controllers/pelicula.controller');

const routes = Router();

routes.get('/', obtenerPeliculas);
routes.get('/:id', obtenerPeliculasPorId);
routes.post('/', insertarPelicula);

module.exports = routes;