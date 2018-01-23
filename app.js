'use strict';

var __API_URL__ = 'https://limebooks.herokuapp.com'; 

pageLoad();

$('#book-entry-form').on('submit', function(e) {
    e.preventDefault();

    let data = {
        name: e.target.bookName.value,
        age: e.target.author.value,
        ninja: e.target.imageUrl.value
    }

    $.post(`'${__API_URL__}/db/person'`, data)
        .then(function(){
            pageLoad();
    });
});

function pageLoad() {
    $.get(`'${__API_URL__}/db/person'`)
        .then(function(data) {
        $('#results').empty();

            data.rows.forEach(function(item) {
                let content = `
                <h2>name: ${item.bookName}</h2>
                <p>age ${item.author}</p>
                <p>ninja ${item.imageUrl}</p>
                `;
                $('#results').append(content);
            });
        },function(err) {
            console.error(err);
    });
}