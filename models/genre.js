const db = require("../config/db.js");

async function getAllGenres(start = 0, limit = 50, gameId){
    let where = "";
    let join = "";
    let params = [];
    if(gameId){
        join = " Inner Join game_genre gg on g.genre_id = gg.genre_id ";
        where = " Where gg.game_id = ? ";
        params.push(gameId);
    }
    params.push(start.toString());
    params.push(limit.toString());
    const [rows] = await db.execute(`Select g.* From genres g ${join} ${where} Limit ?, ?`, params);
    return rows;
}

async function getGenreById(genreid){
    const [rows] = await db.execute("Select * From genres Where genre_id", [genreid]);
    return rows[0];
}

module.exports = {getAllGenres, getGenreById};