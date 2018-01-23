'use strict';

var __API_URL__ = 'https://limebooks.herokuapp.com'; 

pageLoad();

$('#book-entry-form').on('submit', function(e) {
    e.preventDefault();

    let data = {
        title: e.target.title.value,
        author: e.target.author.value,
        url: e.target.url.value
    }

    $.post(`${__API_URL__}/db/book`, data)
        .then(function(){
            pageLoad();
    })
    .catch(function(err) {
        console.error(err);
        pageLoad();
      });
});

function pageLoad() {
    $.get(`${__API_URL__}/db/book`)
        .then(function(data) {
        $('#results').empty();

            data.rows.forEach(function(item) {
                let content = `
                <h2>title: ${item.title}</h2>
                <p>author ${item.author}</p>
                <p>url ${item.url}</p>
                `;
                $('#results').append(content);
            });
        },function(err) {
            console.error(err);
    });
}