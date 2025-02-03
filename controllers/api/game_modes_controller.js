const GameMode = require("../../models/game_mode");

async function getAllGameModes(req, res){
    try{
        const {start, limit, gameid} = req.query;
        const gamemodes = await GameMode.getAllGameModes(start, limit, gameid);
        res.status(200).json(gamemodes);
    }catch(err){
        res.status(500).json({error: "Failed to fetch game modes " + err});
    }
}

async function getGameModeById(req, res){
    try{
        const gamemode = await GameMode.getGameModeById(req.params.id);
        if(gamemode){
            res.status(200).json(gamemode);
        }else{
            res.status(404).json({error: "Game not found"});
        }
    }catch(err){
        res.status(500).json({error: "Failed to Fetch Gamemode " + err});
    }
}

module.exports = {getAllGameModes, getGameModeById};