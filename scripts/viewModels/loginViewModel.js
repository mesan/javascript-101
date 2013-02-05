define(["knockout"], function(ko) {
	return function loginViewModel() {
		var self = this;
		
		self.visibleLoginSection = ko.observable(false);
	};
});
