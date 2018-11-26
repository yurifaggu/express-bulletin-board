var models = require('../models');

module.exports.handleCreateComment = (req, res) => {
  models.Comment.create({
    author: req.body.author,
    content: req.body.content,
    AdId: req.params.ad_id
  }).then(() => {
    res.redirect('/ads/' + req.params.ad_id);
  });
}