define(["jquery"], function($) {
	return function apiConnection(url) {
		var self = this;
		var _url = "http://localhost:8080/json/sporing.json" + url;
		
		self.getData = function(path, query, callback) {
			$.ajax({
				url : _url + path + "?" + query,
				type : 'get',
				cache : false,
				headers : {
					"Accept" : "application/json; charset=UTF-8"
				},
				crossDomain : true,
				dataType : 'json',
				success : function(json) {
					callback(json);
				},
				error : function(err) {
					callback();
				}
			});
		};
		
	};
});
