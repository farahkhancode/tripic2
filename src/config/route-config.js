module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const profileRoutes = require("../routes/profiles");
    const userRoutes = require("../routes/users");
    app.use(staticRoutes);
    app.use(profileRoutes);
    app.use(userRoutes);
  }
}
