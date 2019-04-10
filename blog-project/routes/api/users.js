const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');

handleRegister = (req, res, next) => {
    console.log(req.body);
    const { body: { email, password, password2 }} = req;
    // const { email, password } = req.body;
    
    if(!email){
        return res.status(422).json({
            errors: {
                email: 'is required'
            }
        })
    }

    if(!password) {
        return res.status(422).json({
            errors: {
                password: 'is required'
            }
        })
    }

    if(!password2 || password2 !== password) {
        res.render('errors', {
            error: 'passwords do not match'
        })
        return;
    }

    const user = {email, password}

    const finalUser = new Users(user);
    finalUser.setPassword(password);

    return finalUser.save()
        .then(() =>
        res.redirect('/users/login')
        // res.json({user: finalUser.toAuthJSON()})
        );

}

handleLogin = (req, res, next) => {
    const { body: { email, password }} = req;
    
    if(!email){
        return res.status(422).json({
            errors: {
                email: 'is required'
            }
        })
    }

    if(!password) {
        return res.status(422).json({
            errors: {
                password: 'is required'
            }
        })
    }

    return passport.authenticate('local', {session: false}, (err, passportUser) => {
        if(err) {
            return next();
        }

        if(passportUser) {
            const user = passportUser;
            user.token = passportUser.generateJWT();
            // if we have framework, save token in localStorage on client
            // save token to db
            // user = user.toAuthJSON();
            // return res.json({
            //     user: user.toAuthJSON()
            // })
            return res.redirect('/articles/add');
        }

        return res.status(400).json({error: 'error on login'});
    })(req, res, next);
}

renderLoginPage = (req, res) => {
    res.render('login', {
        title: 'Please log in'
    });
}

renderRegisterPage = (req, res) => {
    res.render('register', {
        title: 'New to articles? Please register'
    });
}

handleGetCurrentUser = (req, res) => {
    const {payload: { id }} = req;
    return Users.findById(id)
        .then(user => {
            if(!user){
                return res.status(400);
            }

            return res.json({user: user.toAuthJSON()});
        });
}

router.get('/register', auth.optional, renderRegisterPage);
router.post('/register', auth.optional, handleRegister);
router.get('/login', auth.optional, renderLoginPage);
router.post('/login', auth.optional, handleLogin);
router.get('/current', auth.required, handleGetCurrentUser);

module.exports = router;