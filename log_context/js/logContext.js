(function ($) {
  Drupal.behaviors.logContext = {
    attach: function(context) {

      $('body').once('context-log-test-info').each(function(){
        console.log('👓 Call Drupal.behaviors.logContext.test() to see if the page can handle a new element. 🔍');
      });

      console.log('Drupal\'s attachBehaviors function was called. The "context" variable is logged below.');
      console.log(context);
    },
    test: function() {
      $('body').append('<div class="log-context-test">This element was added by the Log Context module as a test.</div>');
      var $tests = $('.log-context-test');
      var new_elem = $tests.get($tests.length - 1);
      Drupal.attachBehaviors(new_elem);
    }
  }
})(jQuery);
