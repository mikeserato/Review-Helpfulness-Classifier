// config/router.js
var reviews = require('./../controllers/reviews');

module.exports = function (router) {
	router.route('/insert')
		.post(reviews.insertReview);

	router.route('/reviews')
		.post(reviews.findReviews);

	return router;
};
