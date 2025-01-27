const db = require("../config/db.js");

async function getAllCovers(start = 0, limit = 50, gameid){
    let where = "";
    let join = "";
    let params = [];
    if(gameid){
        join = " Inner Join games g On gc.game_id = g.game_id "
        where = " Where g.game_id = ? ";
        params.push(gameid);
    }
    params.push(start.toString());
    params.push(limit.toString());
    const [rows] = await db.execute(`Select gc.* From game_covers gc ${join} ${where} Limit ?, ?`, params);
    return rows;
}

async function getCoverById(coverid){
    const [rows] = await db.execute("Select * From game_covers Where cover_id = ?", [coverid]);
    return rows[0];
}

module.exports = {getAllCovers, getCoverById};