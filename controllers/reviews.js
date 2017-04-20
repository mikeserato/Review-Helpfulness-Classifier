var db = require(__dirname + './../lib/mysql');

// Find one degree program.
exports.findReviews = function (req, res, next) {
	db.query("SELECT brand,model,link,tree_decision FROM classifier WHERE brand=? and model=? ORDER BY tree_decision DESC", [req.body.brand, req.body.model],
	function (err, rows) {
		if(err) return(err);
		if(rows.length === 0)
			res.status(404).send({message: 'Reviews not found.'});
		else res.send(rows);
	});
};

// Insert a degree program.
exports.insertReview = function (req, res, next) {
	// db.query("INSERT INTO classifier VALUES (?,?,?,)", [req.body.code,req.body.name],
	// function (err, rows) {
	// 	if(err) return(err);
	// 	res.send(rows);
	// });
}
