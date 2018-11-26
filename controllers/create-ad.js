var models = require('../models');

module.exports.createAd = (req, res) => {
  res.render('create-ad', {
    title: 'Create new ad',
  });
}