'use strict';

page('/new', entryView.init);
page('/', allBooks.init);
page('*', errorView.init);
// page('/about', aboutView.init);
page('/books/:book_id', bookView.fetch, bookView.init);
// page('/books/:book_id', ctx => bookView.fetch(ctx, next), bookView.init(ctx, next));
// page('/books/new', addBookView.init);


page();