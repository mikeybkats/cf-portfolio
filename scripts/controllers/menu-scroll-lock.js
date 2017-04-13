$(document).ready(function(){
  var open = false;

  $('.nav-item a').on('click', function(e){
    open = false;
    unbindScroll();
  });

  $('.icon-menu').not('.nav-item a').on('click',function(e){
    $('.nav-item a').css('display', 'block');

    if(open === false){
      bindScroll();

      $('.nav-item a').css('display', 'block');

      open = true;
      console.log(open);
      return;
    }

    if(open === true){
      unbindScroll();

      $('.nav-item a').css('display', 'none');

      open = false;
      console.log(open);
      return;
    }
  });

  if(open === false){
    $(window).resize(function(){
      console.log('lolwat');
      $('.nav-item a').css('display', 'block');
    });
  }

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
