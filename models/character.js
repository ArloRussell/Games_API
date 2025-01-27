const db = require("../config/db.js");

async function getAllCharacters(start = 0, limit = 50, gameId){
    let where = "";
    let join = "";
    let params = [];
    if(gameId){
        join = " Inner Join game_characters gc on c.character_id = gc.characters_id ";
        where = " Where gc.game_id = ? ";
        params.push(gameId);
    }
    params.push(start.toString());
    params.push(limit.toString());
    const [rows] = await db.execute(`Select c.* From characters c ${join} ${where} Limit ?, ?`, params);
    return rows;
}

async function getCharacterById(charid){
    const [rows] = await db.execute("Select * From characters Where character_id = ?", [charid]);
    return rows[0];
}

module.exports = {getAllCharacters, getCharacterById};