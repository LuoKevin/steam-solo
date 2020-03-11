const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const passport = require('passport');
const SteamStrategy = require('passport-steam');
const steam = require('./routes/steam.js');
const apiKey = 'E2E5A055D0AF5C7254ADE96074A8E3E4';
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//setting up passport authentication

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(new SteamStrategy({
        returnURL: 'http://localhost:3000/auth/signin/success',
        realm: 'http://localhost:3000',
        apiKey: apiKey
    }
));

app.use(passport.initialize());
app.use(passport.session());

// app.get('/signin',  
//     passport.authenticate('steam', {failureRedirect: '/'}),
//     (res, req) => res.redirect('/')
// );
app.use(cors({
    origin: "http://localhost:8080", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', steam);

app.listen(port, () => console.log(`Listening on port: ${port}`));