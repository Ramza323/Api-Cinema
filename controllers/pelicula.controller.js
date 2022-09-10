const { getConnection } = require('../database/connection');

obtenerPeliculas = async (req, res) => {

    const connection = await getConnection();
    const response = await connection.request().query('SELECT * FROM Pelicula');
    res.send(response.recordset);
}

obtenerPeliculasPorId = async (req, res) => {

    const connection = await getConnection();
    const id = req.params.id;
    const response = await connection
    .request()
    .input("id", id)
    .query(`SELECT * FROM Pelicula WHERE idPelicula = @id`);
    res.send(response.recordset[0]);
}

insertarPelicula = async (req, res) => {

    const connection = await getConnection();
    try {
        const response = await connection.request().query(`INSERT INTO Pelicula (Nombre, Sipnosis, Genero, Duracion) VALUES ( '${req.body.Nombre}', '${req.body.Sinopsis}', '${req.body.Genero}', ${req.body.Duracion});`);
        res.send('Insertada correctamente');
    } catch (error) {
        console.log(error);
    }
}

actualizarPelicula = async (req, res) => {

    const connection = await getConnection();
    const id = req.params.id
    const pelicula = req.body;
    try {
        const response = await connection
        .request()
        .input("id", id)
        .input("nombre", pelicula.Nombre)
        .input("genero", pelicula.Sinopsis)
        .input("sipnosis", pelicula.Genero)
        .input("duracion", pelicula.Duracion)
        .query(`UPDATE Pelicula SET Nombre = @nombre, Genero = @genero, Sipnosis =  @sipnosis, Duracion = @duracion WHERE idPelicula = @id;`);
        res.send(pelicula);
    } catch (error) {
        console.log(error);
    }
}

eliminarPeliculasPorId = async (req, res) => {

    const connection = await getConnection();
    const id = req.params.id;
    const response = await connection
    .request()
    .input("id", id)
    .query(`DELETE FROM Pelicula WHERE idPelicula = @id`);
    res.send('Deleted');
}

module.exports = {
    obtenerPeliculas,
    obtenerPeliculasPorId,
    insertarPelicula,
    actualizarPelicula,
    eliminarPeliculasPorId
}