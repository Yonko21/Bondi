$(document).ready(function(){
	$('.portfolio_nav li').on('click', function() {
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
	})
});