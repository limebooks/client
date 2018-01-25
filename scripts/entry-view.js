'use strict';

(function(module) {
  const entryView = {};
 
  entryView.init = () => {
    $('#results').hide();
    $('#error-view').hide();
    $('#book-view').hide();
    $('#book-entry-form').show();
  };
  module.entryView = entryView;
})(window);