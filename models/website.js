const db = require("../config/db.js");

async function getAllWebsites(start = 0, limit = 50, gameId){
    let where = "";
    let params = [];
    if(gameId){
        where = " Where w.game_id = ? ";
        params.push(gameId);
    }
    params.push(start.toString());
    params.push(limit.toString());
    const [rows] = await db.execute(`Select w.* From websites w ${where} Limit ?, ?`, params);
    return rows;
}

async function getWebsiteById(websiteid){
    const [rows] = await db.execute("Select * From websites Where website_id = ?", [websiteid]);
    return rows[0];
}

module.exports = {getAllWebsites, getWebsiteById};