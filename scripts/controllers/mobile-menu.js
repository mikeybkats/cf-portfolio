$(document).ready(function(){
  var open = false;
  // toggle menu on hamburger open / close
  $('.hamburger').on('click', function(e){
    $('.nav-links-container').toggleClass('active');
    if( open === false){
      bindScroll();
      open = true;
    } else {
      unbindScroll();
      open = false;
      return;
    }
  });

  // toggle menu on link click
  $('.nav-item a').on('click', function(e){
    $('.nav-links-container').toggleClass('active');
    unbindScroll();
    open = false;
  });

});

function bindScroll(){
  $('html, body').on('touchmove', function(e){e.preventDefault();});
  var scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  ];
  var html = jQuery('html');
  html.data('scroll-position', scrollPosition);
  html.data('previous-overflow', html.css('overflow'));
  html.css('overflow', 'hidden');
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
}

function unbindScroll(){
  $('html, body').unbind('touchmove').unbind();
  var html = $('html');
  var scrollPosition = html.data('scroll-position');
  html.css('overflow', html.data('previous-overflow'));
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
}
