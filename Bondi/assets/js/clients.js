$(function(){
 // config
  var width = 420;
  var animationSpeed = 500;
  var pause = 1000;
  var currentSlide = 1;

  //cache DOM

  var slider = $('#slider');
  var sliderContainer = slider.find('.slides');
  var slides = sliderContainer.find('.slide');

  var interval;



  function startSlider(){
    interval = setInterval(function(){
      sliderContainer.animate({'margin-left': '-=' + width}, animationSpeed, function(){
        currentSlide++;
        if (currentSlide === slides.length){
            currentSlide = 1;
            sliderContainer.css('margin-left', 0);
        }
      });
    }, pause);
  }

  function stopSlider(){
    clearInterval(interval);
  }

  $('#slider').on('mouseenter' , stopSlider).on('mouseleave', startSlider);

startSlider();

});
