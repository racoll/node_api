module.exports = function(app, db) {
  app.post("/notes", (req, res) => {
    // you will create your note here
    res.send("Hello")
  });
};
