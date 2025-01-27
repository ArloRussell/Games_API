const db = require("../config/db.js");

async function getAllGames(start = 0, limit = 50, like){
    let where = "";
    let params = [];
    if(like){
        where = " Where name like concat('%',?,'%')";
        params.push(like);
    }
    params.push(start.toString());
    params.push(limit.toString());
    const [rows] = await db.execute(`Select * From games ${where} Limit ?, ?`, params);
    return rows;
}

async function getGameById(gameid){
    const [rows] = await db.execute("Select * From games Where game_id = ?", [gameid]);
    return rows[0];
}

module.exports = {getAllGames, getGameById};