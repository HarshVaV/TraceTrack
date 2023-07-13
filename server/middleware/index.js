module.exports.isLoggedIn = (req, res, next) => {
  //req.user = provided by passport, automatically filled with deserialized info from session which is stored from serialized session
  console.log("REQ.USER...", req.user);
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    req.flash('error', 'You must be signed in first');
    return res.redirect('/login');
  }
  next();
};
