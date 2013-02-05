define(["knockout"], function(ko) {
	return function navbarViewModel() {
		var self = this;
		
		self.visibleNavbarSection = ko.observable(false);
	};
});