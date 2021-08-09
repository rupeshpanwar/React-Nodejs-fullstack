const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

const app = express();

// app.get('/', (req, res) => {
//     res.send({hi: 'its rainy !!!'})
// })
passport.use(new GoogleStrategy({
    clientID : keys.googleClientID,
    clientSecret : keys.googleSecret,
    callbackURL: '/auth/google/callback'
},
    //console.log(accessToken)
    (accessToken,refreshToken,profile,done) => {
        console.log('access token',accessToken);
        console.log('refresh token',refreshToken);
        console.log('profile:',profile);
    }));

app.get('/auth/google',
        passport.authenticate('google',{
            scope: ['profile','email']
        })        
)

app.get('/auth/google/callback',
        passport.authenticate('google')
)
const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);
// https://arcane-retreat-68635.herokuapp.com/ 
// https://git.heroku.com/arcane-retreat-68635.git