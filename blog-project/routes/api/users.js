const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');

handleRegister = (req, res, next) => {
    const { body: { user }} = req;
    const { email, password } = user;
    
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

    const finalUser = new Users(user);
    finalUser.setPassword(password);

    return finalUser.save()
        .then(() => res.json({user: finalUser.toAuthJSON()}));

}

handleLogin = (req, res, next) => {
    const { body: { user }} = req;
    const { email, password } = user;
    
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
            return res.json({
                user: user.toAuthJSON()
            })
        }

        return res.status(400).json({error: 'error on login'});
    })(req, res, next);
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

router.post('/register', auth.optional, handleRegister);
router.post('/login', auth.optional, handleLogin);
router.get('/current', auth.required, handleGetCurrentUser);

module.exports = router;