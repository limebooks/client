'use strict';

var app = app || {};

var __API_URL__ = 'https://limebooks.herokuapp.com'; 

// (function(module){
    
    pageLoad();

    $('#book-entry-form').on('submit', function(e) {
        e.preventDefault();

        let data = {
            title: e.target.title.value,
            author: e.target.author.value,
            url: e.target.url.value,
            isbn: e.target.isbn.value,
            description: e.target.description.value
        }

        $.post(`${__API_URL__}/db/book`, data)
            .then(function(){
                pageLoad();
                
        })
        .catch(function(err) {
            console.error(err);
            pageLoad();
        });
        $('#book-entry-form').each(function(){
            this.reset();
        });
    });

    function pageLoad() {
        $.get(`${__API_URL__}/db/book`)
            .then(function(data) {
            console.log('our data:', data);
            $('#results').empty();

                data.rows.forEach(function(item) {
                    let content = `
                    <h2>title: ${item.title}</h2>
                    <p>author ${item.author}</p>
                    <img src="${item.url}" class="book-image">
                    `;
                    $('#results').append(content);
                });
            },function(err) {
                console.error(err);
        });
    }



//     module.book = book;
// })(app);