(function(module){
  var contactController = {};

  contactController.reveal = function(){
    $('#contact').siblings().hide();
    $('#contact').fadeIn('slow');
  };

  module.contactController = contactController;

})(window);
