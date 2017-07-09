$(document).ready(function(){
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', './media/assets/particles/config.json', function() {
  console.log('callback - particles.js config loaded');
    });
});


$(window).on('load', function() {
  $('.spinner-wrapper').addClass('hide');
  $('.banner-wrapper').addClass('loaded');
});
