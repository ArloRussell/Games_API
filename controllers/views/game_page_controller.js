const axios = require("axios");
const settings = require("../../config/setings");

async function renderGamePage(req, res){
        const response = await axios.get(
            `${settings.ROOT}:${settings.PORT}/api/games/${req.params.id}`,
        );
        const cover = await getGameData(req.params.id, 'covers');
        const  genres = await getGameData(req.params.id, 'genres');
        const modes = await getGameData(req.params.id, 'game-modes')
        const platforms = await getGameData(req.params.id, 'platforms')
        
        let data = response.data;
        data.cover = cover[0] ? cover[0].url : "";
        data.genres = genres;
        data.modes = modes;
        data.platforms = platforms;
        
        console.log(data);

    res.render(
        "game",
        {title: "CMP - IGDB: " + data.name,
        gameData: data}
    );
}

async function getGameData(gameid, endpoint) {
    const values = await axios.get(
        `${settings.ROOT}:${settings.PORT}/api/${endpoint}`,
        {params: {gameid: gameid}}
    );
    return values.data;
}

module.exports = {renderGamePage};