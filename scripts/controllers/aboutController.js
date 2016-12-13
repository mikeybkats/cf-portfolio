(function(module){
  var aboutController = {};
  aboutController.reveal = function(){
    $('#about').siblings().hide();
    $('#about').fadeIn('slow');
  };

  module.aboutController = aboutController;

})(window);
