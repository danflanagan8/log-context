(function () {

  Drupal.behaviors.logContext = {
    attach: function(context) {
      console.log('Drupal\'s attachBehaviors function was called. The "context" variable is logged below.');
      console.log(context);
    }
  }
})();
