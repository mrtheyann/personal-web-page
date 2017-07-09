var IE = navigator.userAgent.indexOf("Edge") > -1 || navigator.userAgent.indexOf("Trident/7.0") > -1

$(document).ready(function(){
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', './media/assets/particles/config.json', function() {
  console.log('callback - particles.js config loaded');
    });
});


$(window).on('load', function() {
  if (IE) {$('.banner-logo').addClass('hide');}
  $('.spinner-wrapper').addClass('hide');
  $('.banner-wrapper').addClass('loaded');
});
