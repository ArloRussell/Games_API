const Character = require("../../models/character");

async function getAllCharacters(req, res){
    try{
        const {start, limit, gameid} = req.query;
        const characters = await Character.getAllCharacters(start, limit, gameid);
        res.status(200).json(characters);
    }catch(err){
        res.status(500).json({error: "Failed to Fetch Characters " + err});
    }
}

async function getCharacterById(req, res){
    try{
        const character = await Character.getCharacterById(req.params.id);
        if(character){
            res.status(200).json(character);
        }else{
            res.status(404).json({error: "Game not found"});
        }
    }catch(err){
        res.status(500).json({error: "Failed to Fetch Character " + err});
    }
}

module.exports = {getAllCharacters, getCharacterById};