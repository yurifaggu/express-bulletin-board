var models = require('../models');

module.exports.adController = (req, res) => {
  models.Ad.findByPk(req.params.ad_id, {include: [ models.Comment ]})
  .then((ad) => {
    res.render('ad', {
      ad: ad
    });
  });
}
