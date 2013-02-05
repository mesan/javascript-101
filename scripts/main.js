/* Require config */
require.config({
	paths : {
		"jquery" : "lib/jquery-1.8.3.min",
		"knockout" : "lib/knockout",
		"Sammy" : "lib/sammy-latest.min"
	},
	
	/* Rekkefølge */
	shim : {
		'Sammy' : {
			deps : ['jquery'],
			exports : 'Sammy'
		}
	}
});

/* Application init */
require();
