define(["knockout", "Sammy", "viewModels/loginViewModel", "viewModels/navbarViewModel", "viewModels/customerViewModel"], 
	function(ko, Sammy, loginViewModel, navbarViewModel, customerViewModel) {
		function init() {
			try {
				var loginVM = new loginViewModel();
				var navbarVM = new navbarViewModel();
				var customerVM = new customerViewModel();
				
				ko.applyBindings(loginVM, document.getElementById("loginSection"));
				ko.applyBindings(navbarVM, document.getElementById("navbarSection"));
				ko.applyBindings(customerVM, document.getElementById("customerSection"));
				
				Sammy(function() {
					
					var disableAll = function() {						
						loginVM.visibleLoginSection(false);
						navbarVM.visibleNavbarSection(false);
						customerVM.visibleCustomerSection(false);
					};
					
					this.before({
						except : {
							path : ''
						}
					}, function() {
						disableAll();
					});
					
					this.get("#", function() {
						loginVM.visibleLoginSection(true);
					});
					
					this.get("#/", function() {
						navbarVM.visibleNavbarSection(true);
					});
					
					this.get("#/customers", function() {						
						customerVM.visibleCustomerSection(true);
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
