module.exports = app => {

	let userRoute = require('./user/user.routes')
		


	
	app.use('/api/v1/user', userRoute)
	
	
}
