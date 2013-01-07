;(function(){
	var map = {
		fn:{},
		args:{}
	};
	var num=0;
	window.FishEvent = function(fn){
		var tag_fn = (num++).toString(36);
		return function(){
			var tag_args = "-1";
			map.fn[tag_fn] = fn;
			if (arguments.length!=0){
				tag_args = (num++).toString(36);
				map.args[tag_args] = Array.prototype.slice.call(arguments);
			}
			return "FishEvent.event('"+tag_fn+"','"+tag_args+"')";
		}
	};
	FishEvent.event = function(tag_fn,tag_args){
		map.fn[tag_fn].apply(event.target||event.srcElement,map.args[tag_args]||[]);
	};
})();