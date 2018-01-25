'use strict';

(function(module) {
  const bookView = {};

  bookView.init = (ctx, next) => {
      $('#results').hide();
      $('#book-entry-form').hide();
      $('#error-view').hide();
      $('#book-view').show();   
      bookView.fetch(); 
  }

  bookView.fetch = (ctx, next) => {
    var book_id = ctx.params.book_id;
    console.log('book_id', book_id)
    $.get(`${__API_URL__}/db/book/:book_id`)
        .then(function(data) {
            console.log('book view data', data);
            $('#book-view').empty();

                data.rows.forEach(function(item){
                    let content = `
                        <div class="individual-book">
                            <h2>${item.title}</h2>
                            <p>by: ${item.author}</p>
                            <p>isbn: ${item.isbn}</p>
                            <img src="${item.url}" class="book-image">
                            <p class="item-description">${item.description}</p>
                        </div>
                    `;
                    $('#book-view').append(content);
                });
            },function(err) {
                console.error('book-view', err);
        });
        next();
  }
  module.bookView = bookView;
})(window);