const db = require("../config/db.js");

async function getAllScreenshots(start = 0, limit = 50, gameid){
    let where = "";
    let join = "";
    let params = [];
    if(gameid){
        join = " Inner Join games g On ss.game_id = g.game_id "
        where = " Where g.game_id = ? ";
        params.push(gameid);
    }
    params.push(start.toString());
    params.push(limit.toString());
    const [rows] = await db.execute(`Select ss.* From screenshots ss ${join} ${where} Limit ?, ?`, params);
    return rows;
}

async function getScreenshotById(screenshotid){
    const [rows] = await db.execute("Select * From screenshots Where screenshot_id", [screenshotid]);
    return rows[0];
}

module.exports = {getAllScreenshots, getScreenshotById};