const express = require('express');
const path = require('path');
const app = express();
const articles = require('./articles');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.get('/', (req, res) => res.send('app send smth'));
// app.get('/', (req, res) => res.render('index', {
//     title: 'Most viewed articles'
// }));

app.get('/', (req, res) => res.render('index', {
    title: 'Most viewed articles',
    articles: articles
}));

app.get('/articles/add', (req, res) => res.render('addArticle', {
    title: 'Add article'
}));

app.post('/articles/add', (req, res) => {
    const { title, author, body } = req.body;
    const articleObject = {
        id: articles.length + 1,
        title,
        author,
        body
    }
    articles.unshift(articleObject);
    res.redirect('/');
});

//ejs pug mustasche template engine

app.listen(3000, () => console.log('server is up and running at port 3000'));