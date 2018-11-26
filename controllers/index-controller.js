var models = require('../models');

module.exports.indexController = (req, res) => {
  models.Ad.findAll({
    include: [ models.Comment ]
  }).then((ads) => {
    res.render('home', {
      title: 'Ad list',
      ads: ads
    });
  });
}
