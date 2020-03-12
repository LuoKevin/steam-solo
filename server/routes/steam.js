const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const passport = require('passport');
const apiKey = 'E2E5A055D0AF5C7254ADE96074A8E3E4';
const steamController = require('../controllers/steamController.js');
const CLIENT_URL = 'http://localhost:8080';

router.get('/', (req, res, next) => {
    fetch(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${req.cookies.id}`)
    .then(parse => parse.json())
    .then(data => res.json(data));

})

router.get('/auth/validate', (req, res) => {
    if(req.cookies.steamId)
        return res.status(200).json({id : req.cookies.steamId});
    else
        return res.status(400).send('No user signed in!');
})

router.get('/auth/signin', passport.authenticate('steam', {failureRedirect: '/'}));

router.get('/auth/signin/success', (req, res) => {
        // console.log(req.query);
        // console.log(req.body);
        res.cookie('steamId', (req.query['openid.claimed_id']).match(/\d+$/g)[0])
        res.redirect(CLIENT_URL);
    }
)

router.post('/auth/logout',(req, res) => {
    //  delete id cookie and return
    res.clearCookie('steamId');
    res.json('Signed out successfully!');
})

router.get('/games', steamController.getGames, steamController.loadGameInfo, steamController.appendGameNames, (req, res) => {
    res.json(res.locals.games);
})

router.get('/profile', steamController.getProfile, (req, res) => {
    res.status(200).json(res.locals.profile);
})

module.exports = router;