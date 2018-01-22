const noteRoutes = require("./note_routes");

module.exports - function(app, db) {
  noteRoutes(app, db);
  // other note groups could go here in the future
};
