const db = require('../models/dbIndex');

const volunController = {};

volunController.createVolun = async (req, res, next) => {
	try{
		console.log('IM HERE')
		const queryText = 'INSERT INTO volunteers VALUES(DEFAULT, $1, $2, $3, DEFAULT) RETURNING u_id';
		const { name, password, email } = req.body;
		const { rows } = await db.query(queryText, [name, password, email]);
		console.log(rows[0]);
		//todo: this should return the u_id of the created user
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
	try{
		const {id} = req.params;
		const queryText = 'DELETE FROM public.volunteers WHERE id = $1';
		const { rows } = await db.query(queryText, [id]);
		console.log(rows[0]);
		res.locals.data = rows[0];
		return next();
	}
	catch(error){
		await db.query( 'ROLLBACK' );
		return next(error);
	}
};

volunController.getAListofVoluns = (req, res, next) => {
	const query = 'SELECT * FROM volunteers ORDER_BY _id';
		db.query(query, (err, message) => {
				if (err) {
						return next(err);
				} else {
						res.locals.message = message.rows;
						return next()
				}
		});
}


module.exports = volunController;
