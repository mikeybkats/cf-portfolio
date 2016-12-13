(function(module){
  var allPagesController = {};

  allPagesController.reveal = function (){
    $('section.title-section').siblings().hide();
    $('section.title-section').siblings().fadeIn('slow');
  };

  module.allPagesController = allPagesController;

})(window);
