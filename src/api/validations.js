var util = require("../utils/util")()

module.exports.request_validations = function() {
	return {
		validate_stat: function(stat) {
			var valid = !util.isObjectEmpty(stat)
			// TODO(@dev-gaur): Add more validations like stat metadata validation
			return valid
		}
	}
}