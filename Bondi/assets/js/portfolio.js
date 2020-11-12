$(document).ready(function(){
	$('.portfolio_nav li').on('click', function() {
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
	})


	$('.project a').slideUp();
	$('.project').mouseenter(function() {
		$(this).children('a').slideDown();
	})

	$('.project').mouseleave(function() {
		$('.project a').slideUp();
	})

});