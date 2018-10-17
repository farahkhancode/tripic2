const userQueries = require("../db/queries.users.js");
const passport = require("passport");

module.exports = {
  signUp(req, res, next){
    res.render("users/signup");
  },
  signInForm(req, res, next){
     res.render("users/signin");
   },

   signIn(req, res, next){
     passport.authenticate("local")(req, res, function () {
       if(!req.user){
         req.flash("notice", "Sign in failed. Please try again.")
         res.redirect("/users/signin");
       } else {
         req.flash("notice", "You've successfully signed in!");
         res.redirect("/");
       }
     })
   },

   signOut(req, res, next){
     req.logout();
     req.flash("notice", "You've successfully signed out!");
     res.redirect("/");
   },

   index(req, res, next){
     userQueries.getAllUsers((err, users) => {

 //#3
         if(err){
           res.redirect(500, "static/index");
         } else {
           res.render("users/index", {users});
         }
       })
  },

  create(req, res, next){
//#1
     let newUser = {
       email: req.body.email,
       password: req.body.password,
       passwordConfirmation: req.body.passwordConfirmation
     };
// #2
     userQueries.createUser(newUser, (err, user) => {
       if(err){
         req.flash("error", err);
         res.redirect("/users/signup");
       } else {

// #3
         passport.authenticate("local")(req, res, () => {
           req.flash("notice", "You've successfully signed in!");
           res.redirect("/");
         })
       }
     });
   }
}
