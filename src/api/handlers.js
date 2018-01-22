var req_validations = require("./validations.js").request_validations()

module.exports.request_handlers = function() {
	return {
		handle_stats_ingestion: function(stat) {
			return new Promise(function(resolve, reject) {
				// Validate Params
				var valid = req_validations.validate_stat(stat)
				if (valid instanceof Error) {
					reject(
						"Post request failed with error. Err:",
						valid.toString()
					)
				} else {
					if (valid) {
						let msg = {
							result: "Success"
						}
						resolve(JSON.stringify(msg))
					} else {
						reject("Stat " + JSON.stringify(stat) + " is not of supported type")
					}
				}
			})
		}
	}
}
