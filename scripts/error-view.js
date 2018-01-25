'use strict';

(function(module){
  const errorView = {};

  errorView.init = () => {
    $('#results').hide();
    $('#book-entry-form').hide();
    $('#book-view').hide();
    $('#error-view').show(

        );
    }
  module.errorView = errorView;
})(window);