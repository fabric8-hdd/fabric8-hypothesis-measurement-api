var req_handlers = require("../src/api/handlers.js").request_handlers(),
	chai = require("chai"),
	eventually = require("chai-as-promised"),
	should = chai.should()

chai.use(eventually)


describe("Validate the handlers", function () {

	describe("Test get_experiment", () => {
		it("should be fulfilled", function () {
			let stat = {
				scout_id : "a4e1b0cf-2a08-4297-83f3-4db896d7e0fb",
				data : [{date:"1/1/2", value:1234}],
				source: {
					date: "2018-02-12 12:05:45:999 pm"
				},
				descriptor: {
					id: 1234,
					unit_of_measure: "seconds"
				},
				dimensions: {
					node: 3,
					pod: 1234,
					container: 223434
				}
			}
			return req_handlers.handle_stats_ingestion(stat).should.eventually.be.fulfilled
		})
	})

	describe("Test get_experiment", () => {
		it("should equal rejected", function () {
			return req_handlers.handle_stats_ingestion({}).should.eventually.be.rejected
		})
	})
})