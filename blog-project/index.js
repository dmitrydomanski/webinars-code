const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Article = require('./models/article.model');

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css/'))

// Set and configure template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Mongoose connection
mongoose.connect('mongodb://localhost/blogproject', { useNewUrlParser: true });
let db = mongoose.connection;

db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Mongo DB is connected'));

//Routes
app.get('/', (req, res) => {
    // Article.find({}, (error, articles) => {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         res.render('index', {
    //             title: 'Most viewed articles',
    //             articles: articles
    //         })
    //     }
    // })
    try {
        let articles = Article.find({});
        res.render('index', {
            title: 'Most viewed articles',
            articles: articles
        });
    } catch (error) {
        console.log(error);
    }
});

app.get('/articles/add', (req, res) => res.render('addArticle', {
    title: 'Add article'
}));

app.post('/articles/add', (req, res) => {
    const { title, author, body } = req.body;
    const articleObject = {
        title,
        author,
        diplayText: body.slice(0, 140),
        body
    }
    let article = new Article(articleObject);
    article.save((error) => {
        if (error) {
            console.log(error);
            return;
        } else {
            res.redirect('/');
        }
    })
});

app.listen(3000, () => console.log('server is up and running at port 3000'));