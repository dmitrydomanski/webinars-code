const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const Users = mongoose.model('Users');

// passport.use(new LocalStrategy({
//     usernameField: 'user[email]',
//     passwordField: 'user[password]'
// }, (email, password, done) => {
//       Users.findOne({ email })
//       .then(user => {
//           if (!user || !user.verifyPassword(password)) {
//               return done(null, false, {error: 'Error!'});
//           }
//           return done(null, user);
//       }).catch(err => console.log(err));
//     }
//   ));

  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.verifyPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));

