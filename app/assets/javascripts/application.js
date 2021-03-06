// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets
//= require jsapi
//= require chartkick

$(document).on('ready page:update', function(){
  $( window ).load( function() {
    autoHeight();
    $( window ).resize( function() {
      autoHeight();
    });
  });
  autoHeight();
  dropDown();
});

function autoHeight() {
  if ($(window).width() > 980) {
    $('.guard_section, .temp_section').css("height", $('.video_section').height());
  } else {
    $('.guard_section, .temp_section').css("height", $('.video_section').height()/2);
  }
};

function dropDown() {
  $('.dropdown-toggle').on('click', function(){
    $('.dropdown-menu').show();
  });
  $('a').on('click', function(){
    $('.dropdown-menu').hide();
  });
  $(window).on('click', function (){
    $('.dropdown-menu').hide();
  })
}
