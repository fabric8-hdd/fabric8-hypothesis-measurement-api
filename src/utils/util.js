module.exports = function() {
	return {
		isObjectEmpty: function(obj) {
			return Object.keys(obj).length === 0
		}
	}
}