const db = require("../config/db.js");

async function getAllGameModes(start = 0, limit = 50, gameId){
    let where = "";
    let join = "";
    let params = [];
    if(gameId){
        join = " Inner Join game_game_mode ggm on gm.game_mode_id = ggm.game_mode_id ";
        where = " WHere ggm.game_id = ? ";
        params.push(gameId);
    }
    params.push(start.toString());
    params.push(limit.toString());
    const [rows] = await db.execute(`Select gm.* From game_modes gm ${join} ${where} Limit ?, ?`, params);
    return rows;
}

async function getGameModeById(gamemodeid){
    const [rows] = await db.execute("Select * From game_modes Where game_mode_id", [gamemodeid]);
    return rows[0];
}

module.exports = {getAllGameModes, getGameModeById};