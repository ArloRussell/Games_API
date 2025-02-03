const Similar = require("../../models/similar");

async function getSimilar(req, res){
    try{
        const {start, limit} = req.query;
        const similar = await Similar.getSimilar(start, limit);
        res.status(200).json(similar);
    }catch(err){
        res.status(500).json({error: "Failed to Fetch Similar " + err});
    }
}

// async function getSimilarById(req, res){
//     try{
//         const similar = await Similar.getSimilarById(req.params.id);
//         if(similar){
//             res.status(200).json(similar);
//         }else{
//             res.status(404).json({error: "Game not found"});
//         }
//     }catch(err){
//         res.status(500).json({error: "Failed to Fetch Similar " + err});
//     }
// }

module.exports = {getSimilar};