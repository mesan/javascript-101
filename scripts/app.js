define(["knockout", "Sammy", "viewModels/loginViewModel", "viewModels/navbarViewModel"], 
	function(ko, Sammy, loginViewModel, navbarViewModel) {
		function init() {
			try {
				var loginVM = new loginViewModel();
				var navbarVM = new navbarViewModel();
				
				ko.applyBindings(loginVM, document.getElementById("loginSection"));
				ko.applyBindings(navbarVM, document.getElementById("navbarSection"));
				
				Sammy(function() {
					
					var disableAll = function() {						
						loginVM.visibleLoginSection(false);
						navbarVM.visibleNavbarSection(false);
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
