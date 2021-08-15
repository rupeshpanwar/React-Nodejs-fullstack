const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback',
   passport.authenticate('google'),
   (req, res) => {
     res.redirect('/surveys')
   }
   );
  
  // logout user - killing the cookie
  app.get('/api/logout',(req,res) => {
    req.logout()
    res.redirect('/')
  })

  //cookie return route handler -
  app.get('/api/current_user',(req,res) => {
    res.send(req.user)
    // res.send(req.session)
  })
};
