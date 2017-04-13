(function(module){
  var allPagesController = {};

  allPagesController.reveal = function (){
    $('.second-nav').hide();
    $('section.title-section').hide();
    $('section.title-section').siblings().hide();
    $('section.title-section').fadeIn('slow');
    $('section.title-section').siblings().fadeIn('slow');
  };



  module.allPagesController = allPagesController;

})(window);
