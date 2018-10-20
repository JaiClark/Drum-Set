const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.sendFile('auth.html', {root:'.'}));

const port = process.env.PORT || 3000;
app.listen(port , () => console.log('App listening on port' + port));

// Setting up the passport
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

app.get("/success",(req,res) => res.send("Welcome " +req.query.username+ '!!'));
app.get("/error",(req,res) => res.send("Error logging in"));

passport.serializeUser(function(user,cb){
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb){
    User.findById(id, function(err, user) {
        cb(err, user);
    });
});

// Mongoose Setup
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MyDatabase');

const Schema = mongoose.Schema;
const UserDetail = new Schema({
    username: String,
    password: String
});
const UserDetails = mongoose.model('userInfo', UserDetail, 'userInfo');

// Passport Local Authentication

const LocalStrategy = require('passport-local').Strategy;

//use a instance of the LocalStrategy
passport.use(new LocalStrategy(
    function(username, password, done) {
        UserDetails.findOne({
            username: username
        }, function(err,user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false)
            }
            if (user.password != password) {
                return done(null, false);
            }
            return done(null, user);
        });
    }));

    app.post ('/',
    passport.authenticate('local', {failureRedirect: '/error'}),
    function(req, res) {
        res.redirect('/success?username='+req.user.username);
    });