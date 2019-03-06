const db = require("../models");

module.exports = {
  index: (req, res) => {
    db.Post.find({})
      .populate("user")
      .exec((err, foundPosts) => {
        console.log("HELLO User");
        if (err) return console.error(err);
        res.json(foundPosts);
      });

    db.Post.find({})
      .populate("city")
      .exec((err, foundCity) => {
        console.log("HELLO City");
        if (err) return console.error(err);
        res.json(foundCity);
      });
  }
};
