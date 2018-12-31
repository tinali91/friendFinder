var friendData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    return res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body)
    friendData.push(req.body);
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!
};
