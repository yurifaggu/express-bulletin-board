var models = require('../models');

module.exports.handleRemoveComment = (req, res) => {
  models.Comment.destroy({
    where: {
      id: req.params.comment_id
    }
  }).then(() => {
    res.redirect('/ads/' + req.params.ad_id);
  });
}