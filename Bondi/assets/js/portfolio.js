$(document).ready(function(){
	$('.portfolio_nav li').on('click', function() {
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');

			if ($(this).hasClass('all')) {
			$('.project').siblings('div').removeClass('hide').removeClass('margin');
			}
			if ($(this).hasClass('design')) {
			$('.project').siblings('div').addClass('hide');
			$('.project').siblings('.design').removeClass('hide').addClass('margin');
			}
			if ($(this).hasClass('code')) {
			$('.project').siblings('div').addClass('hide');
			$('.project').siblings('.code').removeClass('hide').addClass('margin');
			}
			if ($(this).hasClass('photos')) {
			$('.project').siblings('div').addClass('hide');
			$('.project').siblings('.photos').removeClass('hide').addClass('margin');
			}
			if ($(this).hasClass('apps')) {
			$('.project').siblings('div').addClass('hide');
			$('.project').siblings('.apps').removeClass('hide').addClass('margin');
			}
	})

	$('.project a').hide();
	$('.project').mouseenter(function() {
		$(this).children('a').slideDown();
	})

	$('.project').mouseleave(function() {
		$('.project a').slideUp(100);
	})

});