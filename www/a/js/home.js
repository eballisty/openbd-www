/* 
 * $Id:$
 * 
 * homepage js
 */

$(function() {
	
	$('.flexslider').flexslider({
	    	animation: "slider",
	    	controlsContainer: ".flex-container",
	    	directionNav: false,
	    	slideshowSpeed: 11000
	});
	
	$(".tweet").tweet({
	    username: "OpenBlueDragon",
	    join_text: "auto",
	    avatar_size: 32,
	    count: 3,
	    auto_join_text_default: "",
	    auto_join_text_ed: "",
	    auto_join_text_ing: "",
	    auto_join_text_reply: "",
	    auto_join_text_url: "",
	    loading_text: "loading tweets..."
	});
});