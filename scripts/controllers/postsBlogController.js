(function(module){
  var postsBlogController = {};

  postsBlogController.reveal = function(){
    $('#blog').siblings().hide();
    $('#blog').fadeIn('slow');
  };

  module.postsBlogController = postsBlogController;

})(window);
