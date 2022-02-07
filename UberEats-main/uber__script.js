$(function() {
    let header = $('.order');
  
  
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header--bg-white');
      } else {
       header.removeClass('header--bg-white');
      }
    });
   });
  