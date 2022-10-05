const DiscordStrategy = require('passport-discord').Strategy;

const passport = require('passport');

const scopes = ['identify', 'email', 'guilds', 'guilds.join'];


passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_OAUTH_SCERET,
    callbackURL: process.env.DISCORD_CLIENT_REDIRECT,
    scope: scopes
}, async (acessToken, refreshToken, profile, cb) => {
    console.log(profile);
    // cb(null, profile)
}));