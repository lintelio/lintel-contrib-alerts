(function() {
  'use strict';

  var Alert = function(element, options) {
    this.$alert = $(element);
    this.$closeBtn = this.$alert.find('[data-toggle="alert-close"]');
    this.options = options || {};
  };

  Alert.prototype.close = function() {
    // Close event
    var hideEvent = $.Event('hide.lt.alert', {
      relatedTarget: this.$closeBtn[0]
    });

    this.$alert.trigger($.Event('close.lt.alert'));

    // Allow event to be prevented
    if (hideEvent.isDefaultPrevented()) { return; }

    // Remove alert and fire closed event
    this.$alert.detach().trigger('closed.bs.alert').remove();
    this.options.onHide.call(this, this.$alert, this.$closeBtn);
  };

  // Define jQuery plugin
  function Plugin(method) {
    return this.each(function () {
      var $alert = $(this);
      var settings = $.extend({}, Plugin.defaults, $alert.data(), typeof method === 'object' && method);

      var data = $alert.data('lt.alert');
      if (!data) {
        data = new Alert(this, settings);
        $alert.data('lt.alert', data);
      }
      if (typeof method === 'string') { data[method](); }
    });
  }

  Plugin.defaults = {
    onHide: function() {}
  };

  $.fn.alert = Plugin;

  // Events
  $(document).on('click.lt.alert', '[data-toggle="alert-close"]', function(e) {
    e.preventDefault();
    Plugin.call($(this).closest('.alert'), 'close');
  });

})(jQuery);
