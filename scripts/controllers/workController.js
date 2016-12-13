(function(module){
  var workController = {};

  workController.reveal = function(){
    $('#work').siblings().hide();
    $('#work').fadeIn('slow');
  };

  module.workController = workController;

})(window);
