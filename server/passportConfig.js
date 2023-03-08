const User = require("./models/user.model");
const bcrypt = require("bcryptjs")
const localStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
    passport.use(
        new localStrategy((username, password, done) => {
            User.findOne({username: username}).then((user, err) => {
                if (err) console.log(err);
                if (!user) return done(null, false);
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) console.log(err);
                    if(result === true) {
                        return done(null, user)
                    } else {
                        return done(null, false)
                    }
                });
            });
        })
    );

    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    })
    passport.deserializeUser((id, cb) => {
        User.findOne({_id: id}).then((user, err) => {
            cb(err, user);
        });
    });
}