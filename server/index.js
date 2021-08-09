const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

const app = express();

// app.get('/', (req, res) => {
//     res.send({hi: 'its rainy !!!'})
// })
passport.use(new GoogleStrategy({
    clientID : keys.clientID,
    clientSecret : keys.clientSecret,
    callbackURL: '/auth/google/callback'
},
accessToken => {
    console.log(accessToken)
}));

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);
// https://arcane-retreat-68635.herokuapp.com/ 
// https://git.heroku.com/arcane-retreat-68635.git