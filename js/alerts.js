(function() {
  'use strict';

  var Alert = function(element) {
    this.element = $(element);
    this.alert = this.element.closest('.alert');
  };

  Alert.prototype.close = function() {
    var $this = this.element;
    var $alert = this.alert;

    // Close events
    var closeEvent = $.Event('close.lt.alert', {
      relatedTarget: $this[0]
    });

    if (closeEvent.isDefaultPrevented()) { return; }

    // Remove Alert
    $alert.trigger($.Event('close.lt.alert'));

    $alert.detach().trigger('closed.bs.alert').remove();
  };

  // Define jQuery plugin
  function Plugin(method, options) {
    var settings = $.extend({}, Plugin.defaults, options);

    return this.each(function () {
      var $this = $(this);

      var data = $this.data('lt.alert');
      if (!data) {
        data = new Alert(this);
        $this.data('lt.alert', data);
      }
      if (typeof method === 'string') { data[method](); }

      settings.callback.call($this);
    });
  }

  Plugin.defaults = {
    callback: function() {}
  };

  $.fn.alert = Plugin;

  // Events
  $(document).on('click.lt.alert', '.alert-close', function(e) {
    e.preventDefault();
    Plugin.call($(this), 'close');
  });

})(jQuery);
