var req_handlers = require("./handlers.js").request_handlers()

var appRouter = function(app) {
	app.post("/api/v1.0/measurements", function(req , res){
		console.log("The request body is: ", req.body)
		req_handlers.handle_stats_ingestion(req.body).then(function (result) {
			res.status(200)
			res.send(String(result))
		}).catch(function(err) {
			console.log("Error "+ err.toString())
			res.status(400)
			res.send(err.toString())
		})
	}),

	app.get("/api/v1.0/readiness", function(req , res){
		res.status(200)
		res.end()
	}),

	app.get("/api/v1.0/liveness", function(req , res){
		res.status(200)
		res.end()
	})
}

module.exports = appRouter
