var util = {};
(function($, app){
	util.makeButton = function(id, eventType, callback){
		$(id).on(eventType, callback);
	};
})(jQuery, util);