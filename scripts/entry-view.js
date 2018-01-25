'use strict';

(function(module) {
  const entryView = {};
 
  entryView.init = () => {
    $('#results').hide();
    $('#book-entry-form').show();
  }
  module.entryView = entryView;
})(window);