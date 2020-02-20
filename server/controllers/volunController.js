const db = require('../models/dbIndex');

const volunController = {};

volunController.createVolun = async (req, res, next) => {
	try{
		console.log('IM HERE')
		const queryText = 'INSERT INTO volunteers VALUES(DEFAULT, $1, $2, $3, DEFAULT)';
		const { name, password, email } = req.body;
		const { rows } = await db.query(queryText, [name, password, email]);
		console.log(rows[0]);
		res.locals.data = rows[0];
		return next();
	} catch (error) {
		await db.query( 'ROLLBACK' );
		return next(error);
	}
};
volunController.updateVolun = async (req, res, next) => {
	// try{
	// 	const
	//
	// }
	// catch(e){
	// 	await db.query('ROLLBACK');
	// 	return next(e)
	// }
}
volunController.deleteVolun = async (req, res, next) => {
}
volunController.getAListofVoluns = async (req, res, next) => {
}

module.exports = volunController;
