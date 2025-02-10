const db = require("../config/db.js");
let joinOne = " Inner Join games g on gs.game_id = g.game_id ";
let joinTwo = " Inner Join games g2 on gs.similar_game_id = g2.game_id ";

async function getSimilar(start = 0, limit = 50){
    let params = [];
    
    params.push(start.toString())
    params.push(limit.toString());

    const [rows] = await db.execute(`Select g.*, g2.game_id as similar_game_id, g2.name as similar_game_name, g2.summary as similar_game_summary From game_similar gs ${joinOne} ${joinTwo} Limit ?, ?`, params);
    return rows;
}

async function getSimilarById(gameid){
    const [rows] = await db.execute(`Select g.*, gc.url From games as g Inner Join game_similar gs on g.game_id = gs.similar_game_id Left Join game_covers gc on g.game_id = gc.game_id Where gs.game_id = ?`, [gameid]);
    return rows;
}

module.exports = {getSimilar, getSimilarById};