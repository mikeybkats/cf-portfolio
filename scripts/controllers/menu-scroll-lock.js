$(document).ready(function(){
  var open = false;
  $('.nav-item a').hide();

  $('.nav-trigger').on('click',function(e){
    if(open === false){
      $('html, body').on('touchmove', function(e){e.preventDefault();});
      $('.nav-item a').show();

      var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      ];
      var html = jQuery('html');
      html.data('scroll-position', scrollPosition);
      html.data('previous-overflow', html.css('overflow'));
      html.css('overflow', 'hidden');
      window.scrollTo(scrollPosition[0], scrollPosition[1]);
      open = true;
      console.log(open);
      return;
    }
    if(open === true){
      $('html, body').unbind('touchmove').unbind();
      $('.nav-item a').hide();

      var html = $('html');
      var scrollPosition = html.data('scroll-position');
      html.css('overflow', html.data('previous-overflow'));
      window.scrollTo(scrollPosition[0], scrollPosition[1]);
      open = false;
      console.log(open);
      return;
    }
  });
  if(open === true){
    $(document).on('click', '.main *', function(){
      console.log('lolwat');
      $('.nav-trigger').click();
    });
  }
});
