define([], function() {
	return function customerRepository() {
		var self = this;
		
		self.getCustomers = function (callback) {
			callback(["Thomas", "Fred Inge", "Alf"]);
		};
	};
});