define(["knockout", "toastr", "repositories/customerRepository"], function(ko, toastr, customerRepository) {
	return function customerViewModel() {
		var self = this;
		var customerRepo = new customerRepository();
		
		self.visibleCustomerSection = ko.observable(false);
		self.customers = ko.observableArray([]);
		
		self.getData = function () {
			customerRepo.getCustomers(function(data) {
				self.customers(data);
				toastr.success("Data fetched", "You have fetched data... Hurra!");
			});
		};
		
		self.getPosts = function () {
			customerRepo.getCustomerPost(function(data) {
				console.log(data);
			});
		};
	};
});
