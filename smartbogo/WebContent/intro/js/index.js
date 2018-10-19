/**
 *  index.html 의 JavaScript 파일
 */

$(function() {
	var loginbar = $('#loginbar');
	var id = $.cookie("id");
		
	if (id == undefined) {
		loginbar.html('<li><a href="./signup/signup.html"><span class="glyphicon glyphicon-user"></span> 회원가입</a></li><li><a href="#" id="login_p"><span class="glyphicon glyphicon-log-in"></span> 로그인</a></li>');
	} else {
		loginbar.html('<li><a href="#"><span class="glyphicon glyphicon-user"></span></a></li><li style="height:34px;margin-top:16px;">' + id + '님 환영합니다!</li><li><a href="./index.html" id="logout">로그아웃</a></li>');
	}
	
	$("#intro_carousel").carousel({
		interval: 1500
	});
	
	$("#login_p").click(function(){
		
		$('#login_section').bPopup({
            transition: 'slideDown',
			content: 'iframe',
			contentContainer: '#container',
			loadUrl: './signin/signin.html'
		});
	});
	
	$("#logout").click(function(){
		$.removeCookie("id", {
			path: "/"
		});
		
		alert('로그아웃되셨습니다');
	});
});