/* Require config */
require.config({
	paths : {
		"jquery" : "lib/jquery-1.8.3.min",
		"knockout" : "lib/knockout",
		"Sammy" : "lib/sammy-latest.min",
		"toastr" : "lib/toastr.min"
	},
	
	/* Rekkefølge */
	shim : {
		'Sammy' : {
			deps : ['jquery'],
			exports : 'Sammy'
		},
		'toastr' : ['jquery']
	}
});

/* Application init */
require(["app"], function(app) {
	try {
		app.init();
	} catch (err) {
		console.log("feil i main! " + err);
	}
});
