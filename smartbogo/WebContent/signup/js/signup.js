/**
 *  signup.html 의 JavaScript 파일
 */

$(function() {
	var cbUseAgree = $("#use_agree_cb");
	var cbInfoAgree = $("#user_info_cb");
	var lblUseAgree = $("label[for='use_agree']");
	var lblInfoAgree = $("label[for='user_info']");
	
	$("#agree").attr({
		"class": "btn btn-default active"
	});
	
	lblUseAgree.click(function(){
		if (cbUseAgree.prop("checked") == false) {
			cbUseAgree.prop("checked", true);
		} else {
			cbUseAgree.prop("checked", false);
		}
		
		if (cbUseAgree.is(":checked") == true && cbInfoAgree.is(":checked") == true) {
			$("#agree").attr({
				"class": "btn btn-primary"
			});
			
			$("#agree").attr({
				"href" : "../index.html"
			});
		} else {
			$("#agree").attr({
				"class": "btn btn-default active"
			});
		}
	});
	
	lblInfoAgree.click(function(){
		if (cbInfoAgree.prop("checked") == false) {
			cbInfoAgree.prop("checked", true);
		} else {
			cbInfoAgree.prop("checked", false);
		}
		
		if (cbUseAgree.is(":checked") == true && cbInfoAgree.is(":checked") == true) {
			$("#agree").attr({
				"class": "btn btn-primary"
			});
			
			$("#agree").attr({
				"href" : "../index.html"
			});
		} else {
			$("#agree").attr({
				"class": "btn btn-default active"
			});
		}
	});
	
	cbUseAgree.click(function(){
		if (cbUseAgree.is(":checked") == true && cbInfoAgree.is(":checked") == true) {
			$("#agree").attr({
				"class": "btn btn-primary"
			});
			
			$("#agree").attr({
				"href" : "../index.html"
			});
		} else {
			$("#agree").attr({
				"class": "btn btn-default active"
			});
		}
	});
	
	cbInfoAgree.click(function(){
		if (cbUseAgree.is(":checked") == true && cbInfoAgree.is(":checked") == true) {
			$("#agree").attr({
				"class": "btn btn-primary"
			});
			
			$("#agree").attr({
				"href" : "../index.html"
			});
		} else {
			$("#agree").attr({
				"class": "btn btn-default active"
			});
		}
	});
	
	
	$("#disagree").click(function(){
		// 비동의
		
	});
	
	$("#agree").click(function(){
		
		if (cbUseAgree.is(":checked") == true && cbInfoAgree.is(":checked") == true) {
			// 동의
			// "smartbogo_test" 는 회원가입시 입력받을 아이디
			
//			$.cookie("id", "smartbogo_test");
			// localhost 테스트 (1)
			
			$.cookie("id", "smartbogo_test", {
				path: "/"
			}); // localhost 테스트 (2)
			
//			$.cookie("id", "smartbogo_test", {
//				path: "/", domain: "wanggilim.github.io/smartbogo"
//			}); // Github Pages 테스트
			
			alert('가입을 환영합니다');
		}
		
	});
	
});