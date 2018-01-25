'use strict';

(function(module) {
  const bookView = {};

  bookView.init = () => {
      $('#results').hide();
      $('#book-entry-form').hide();
      $('#book-view').show();
  };
  module.bookView = {};
})(window);