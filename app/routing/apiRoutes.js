var friendData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    return res.json(friendData);
  });

  app.post("/api/friends", function (req, res) {
    console.log(req.body)
    var newFriend = req.body;

    console.log(friendData)
    
    var friendMatch = "";
    var matchDifference = 10000;

    for (var i = 0; i < friendData.length; i++) {
      friendDifference = 0;

      for (var j = 0; j < friendData[i].scores.length; j++) {
        friendDifference += Math.abs(friendData[i].scores[j] - newFriend.scores[j]);
      }
      console.log(friendData[i].name + " difference: " + friendDifference);

      if (friendDifference < matchDifference) {
        matchDifference = friendDifference;
        friendMatch = i;
      }
    }

    console.log(friendMatch);
    
    friendData.push(newFriend);
    res.json(friendData[friendMatch]);
  });
};
