const profileQueries = require("../db/queries.profiles.js");


module.exports = {
  index(req, res, next){
    profileQueries.getAllProfiles((err, profiles) => {
       if(err){
         res.redirect(500, "static/index");
       } else {
         res.render("profiles/index", {profiles});
       }
     })
  }

}
