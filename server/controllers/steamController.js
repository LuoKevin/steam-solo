 const fetch = require('node-fetch');

const apiKey = 'E2E5A055D0AF5C7254ADE96074A8E3E4';
const steamController = {};

//  get a user's games from Steam's API
steamController.getGames = (req, res, next) => {
    const apiCall = ` http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${req.cookies.steamId}`;
    fetch(apiCall)
    .then(raw => raw.json())
    .then(data => {
        res.locals.games = data;
        return next();
    })
    .catch(err => next({err}))
}

//given an array of games, load game info, such as name, store page,  return information about a game as an array
steamController.loadGameInfo = (req, res, next) => {
    const gameArr = res.locals.games.response.games.map( game => {
        return {
            appid : game.appid,
            pic : `https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg`,
            storepage : `https://store.steampowered.com/app/${game.appid}`,
            playtime : game.playtime_forever,
            render : false,
        };
    });

    res.locals.games = gameArr;
    //console.log('RETURNING');
    next();
}

steamController.appendGameNames = (req, res, next) => {
    fetch('https://api.steampowered.com/ISteamApps/GetAppList/v2/')
    .then(raw => raw.json())
    .then(data => {
        const apps = data.applist.apps;
        res.locals.games.forEach(game => {
            const target = apps.find(app => app.appid === game.appid);
            if(target) game.name = target.name;
        })
        return next();
    })
}

steamController.getProfile = (req, res, next) => {
    fetch(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${req.cookies.steamId}`)
    .then(raw => raw.json())
    .then(data => {
        const profile = data.response.players[0];
        const profileObj = {
            displayname : profile.personaname,
            url : profile.profileurl,
            avatar : profile.avatarfull,
        };
        res.locals.profile = profileObj;
        next();
    })
}
module.exports = steamController;