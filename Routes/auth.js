const router = require('express').Router();
const passport = require('passport');


router.get('/', passport.authenticate('discord'));
router.get('/discord/redirect', passport.authenticate('discord', {
    failureRedirect: '/forbidden'
}), (req, res, next) => {
    res.send(200);
});


module.exports = router;