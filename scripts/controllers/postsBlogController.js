(function(module){
  var postsBlogController = {};

  postsBlogController.reveal = function(){
    $('#project-iframe').empty();
    $('.projects-div').fadeIn('slow');
    $('.second-nav').hide();
    $('#blog').siblings().hide();
    $('#blog').fadeIn('slow');
  };

  module.postsBlogController = postsBlogController;

})(window);
