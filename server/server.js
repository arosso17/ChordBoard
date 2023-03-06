const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const passportloal = require('passport-local').Strategy;
const cookieparser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');
const User = require("./models/user.model");


mongoose.connect(
    "mongodb+srv://arosso:Hadlbr%401713@cluster0.jlf5f0j.mongodb.net/test?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Mongoose is connected!")
    })

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
// app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: "sammy",
    resave: true,
    saveUninitialized: true
}));

app.use(cookieparser("sammy"));
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);

app.post('/login', (req, res, next) => {
    passport.authenticate("local", (err, user) => {
        if (err) console.log(err);
        if (!user) res.send("No user exists");
        else {
            req.logIn(user, err => {
                if (err) console.log(err)
                res.send("success");
                console.log(req.user);
            })
        }
    })(req, res, next);
});

app.post('/register', (req, res) => {
    try{
    User.findOne({username: req.body.username}).then( async (doc, err) => {
        if (err) console.log(err);
        if (doc) res.send("User alredy Exists");
        if (!doc) {
            const hashedPass = await bcrypt.hash(req.body.password, 10);

            const newUser = new User({
                username: req.body.username,
                password: hashedPass
            });
            await newUser.save();
            console.log()
            res.send("user created")
        }
    })
    }
    catch {
        console.log(err);
    }
});

app.get('/user', (req, res) => {
    res.send(req.user);
});

app.listen(1337, () => {
    console.log('Server started on 1337')
});
