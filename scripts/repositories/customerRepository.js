define(["apiConnection"], function(apiConnection) {
	return function customerRepository() {
		var self = this;
		var conn = new apiConnection("");
		
		
		self.getCustomers = function (callback) {
			callback(["Thomas", "Fred Inge", "Alf"]);
		};
		
		self.getCustomerPost = function (callback) {
			conn.getData("", "", callback);
		};
	};
});