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
    console.log(req.body);
    try {
        const response = await connection.request().query(`INSERT INTO Pelicula (Nombre, Sipnosis, Genero, Duracion) VALUES ( '${req.body.Nombre}', '${req.body.Sinopsis}', '${req.body.Genero}', ${req.body.Duracion});`);
        res.send('Insertada correctamente');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    obtenerPeliculas,
    obtenerPeliculasPorId,
    insertarPelicula
}