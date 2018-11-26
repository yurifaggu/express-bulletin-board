var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/', controllers.indexController);

router.get('/ads/create', controllers.createAd);
router.post('/ads/create', controllers.handleCreateAd);
router.get('/ads/:ad_id/destroy', controllers.handleRemoveAd);
router.get('/ads/:ad_id', controllers.adController);

router.post('/ads/:ad_id/comments/create', controllers.handleCreateComment);
router.get('/ads/:ad_id/comments/:comment_id/destroy', controllers.handleRemoveComment);

module.exports.router = router;