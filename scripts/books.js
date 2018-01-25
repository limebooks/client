'use strict';

(function(module){
  const allBooks = {};

  allBooks.init = () => {
    $('#results').show();
    $('#book-entry-form').hide();

  }

  module.allBooks = allBooks;

})(window)