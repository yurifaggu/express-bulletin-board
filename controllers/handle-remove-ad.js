var models = require('../models');

module.exports.handleRemoveAd = (req, res) => {
  models.Ad.destroy({
    where: {
      id: req.params.ad_id
    }
  }).then(() => {
    res.redirect('/');
  });
}