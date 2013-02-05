define(["knockout", "repositories/customerRepository"], function(ko, customerRepository) {
	return function customerViewModel() {
		var self = this;
		var customerRepo = new customerRepository();
		
		self.visibleCustomerSection = ko.observable(false);
		self.customers = ko.observableArray([]);
		
		self.getData = function () {
			customerRepo.getCustomers(function(data) {
				self.customers(data);
			});
		};
		
		self.getPosts = function () {
			customerRepo.getCustomerPost(function(data) {
				console.log(data);
			});
		};
	};
});
