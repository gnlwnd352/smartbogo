/**
 *  signup.html 의 JavaScript 파일
 */

$(function() {
	$("#btn_signin").click(function(){
		// smartbogo_test
		$.cookie("id", "smartbogo_test", {
			path: "/"
		});
		
	});
});