require('dotenv').config();

const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const DiscordStrategy = require('./Strategies/discord')

const authRoute = require('./Routes/auth');

app.use(session({
    secret: "phyllo",
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRoute);

app.listen(3000, () => {
    console.log(`Now listening to 3000`);
})