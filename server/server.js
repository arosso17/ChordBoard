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
    "mongodb+srv://arosso:Hadlbr%401713@cluster0.jlf5f0j.mongodb.net/",
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

app.get('/', (req, res) => {
    res.send(req);
});

app.listen(1337, () => {
    console.log('Server started on 1337')
});
