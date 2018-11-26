var {indexController} = require('./index-controller');
var {createAd} = require('./create-ad');
var {handleCreateAd} = require('./handle-create-ad');
var {handleRemoveAd} = require('./handle-remove-ad');
var {handleCreateComment} = require('./handle-create-comment');
var {handleRemoveComment} = require('./handle-remove-comment');
var {adController} = require('./ad-controller');


module.exports.indexController = indexController;
module.exports.createAd = createAd;
module.exports.handleCreateAd= handleCreateAd;
module.exports.handleRemoveAd = handleRemoveAd;
module.exports.handleCreateComment = handleCreateComment;
module.exports.handleRemoveComment = handleRemoveComment;
module.exports.adController = adController;

