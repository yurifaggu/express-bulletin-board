var models = require('../models');

module.exports.handleCreateAd = (req, res) => {
  models.Ad.create({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content
  }).then(() => {
    res.redirect('/');
  });
}