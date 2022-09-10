const { Router } = require('express');
const { obtenerPeliculas, obtenerPeliculasPorId, insertarPelicula, actualizarPelicula, eliminarPeliculasPorId } = require('../controllers/pelicula.controller');

const routes = Router();

routes.get('/', obtenerPeliculas);
routes.get('/:id', obtenerPeliculasPorId);
routes.post('/', insertarPelicula);
routes.put('/:id', actualizarPelicula);
routes.delete('/:id', eliminarPeliculasPorId);

module.exports = routes;