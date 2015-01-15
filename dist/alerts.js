(function() {
  'use strict';

  var Alert = function(element) {
    this.$closeBtn = $(element);
    this.$alert = this.$closeBtn.closest('.alert');
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
  $(document).on('click.lt.alert', '[data-toggle="alert-close"]', function(e) {
    e.preventDefault();
    Plugin.call($(this), 'close');
  });

})(jQuery);
