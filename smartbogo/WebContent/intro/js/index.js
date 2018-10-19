/**
 *  index.html 의 JavaScript 파일
 */

$(function() {
	$("#intro_carousel").carousel({
		interval: 1500
	});
	
	$("#login_p").click(function(){
		
		$('#login_section').bPopup({
            transition: 'slideDown',
			content: 'iframe',
			contentContainer: '#container',
			loadUrl: '../signin/signin.html'
		});
	});
});