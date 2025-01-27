const db = require("../config/db.js");

async function getAllPlatforms(start = 0, limit = 50, gameId){
    let where = "";
    let join = "";
    let params = [];
    if(gameId){
        join = " Inner Join game_platform gp on p.platform_id = gp.platform_id ";
        where = " Where gp.game_id = ? ";
        params.push(gameId);
    }
    params.push(start.toString());
    params.push(limit.toString());
    const [rows] = await db.execute(`Select p.* From platforms p ${join} ${where} Limit ?, ?`, params);
    return rows;
}

async function getPlatformById(platformid){
    const [rows] = await db.execute("Select * From platforms Where platform_id = ?", [platformid]);
    return rows[0];
}

module.exports = {getAllPlatforms, getPlatformById};