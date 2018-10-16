const Profile = require("./models").Profile;
const User = require("./models").User;

module.exports = {

//#1
  getAllProfiles(callback){
    return Profile.all()

//#2
    .then((profiles) => {
      callback(null, profiles);
    })
    .catch((err) => {
      callback(err);
    })
  },

  
}
