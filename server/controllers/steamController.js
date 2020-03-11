const fetch = require('node-fetch');

const apiKey = 'E2E5A055D0AF5C7254ADE96074A8E3E4';
const steamController = {};

//  get a user's games from Steam's API
steamController.getGames = (req, res, next) => {
    const apiCall = ` http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${req.cookies.id}`;
    fetch(apiCall)
    .then(raw => raw.json())
    .then(data => {
        res.locals.games = data;
        next();
    })
}

//given an appid(game identifier) return information about a game
steamController.loadGame = (req, res, next) => {
    
}


module.exports = steamController;