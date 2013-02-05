define(["knockout", "Sammy", "viewModels/loginViewModel"], function(ko, Sammy, loginViewModel) {
	function init() {
		try {
			var loginVM = new loginViewModel();
			
			ko.applyBindings(loginVM, document.getElementById("loginSection"));
			
			Sammy(function() {
				this.get("#", function() {
					loginVM.visibleLoginSection(true);
				});
				
				this.get("#/", function() {
					loginVM.visibleLoginSection(false);
				});
				
				/* DEFAULT */
				this.get('', function() {
					this.app.runRoute('get', '#');
				});
			}).run();
		} catch(err) {
			console.log("Fant en feil: " + err);
		}
	}
	
	return {
		init : init
	};
});
