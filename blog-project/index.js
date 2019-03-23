const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Article = require('./models/article.model');
const ArticleManager = require('./api/article');

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  '/bootstrap',
  express.static(__dirname + '/node_modules/bootstrap/dist/css/')
);

// Set and configure template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Mongoose connection
mongoose.connect('mongodb://localhost/blogproject', { useNewUrlParser: true });
let db = mongoose.connection;

db.on('error', err => console.log(err));
db.once('open', () => console.log('Mongo DB is connected'));

//Routes
app.get('/', async (req, res) => {
  let articlesManager = new ArticleManager();
  const articles = await articlesManager.getArticles();
  if (articles.error) {
    res.render('errors', {
      error: articles.error
    });
  } else {
    res.render('index', {
      title: 'Most viewed articles',
      articles: articles.articles
    });
  }
});

app.get('/articles/add', (req, res) =>
  res.render('addArticle', {
    title: 'Add article'
  })
);

app.post('/articles/add', async (req, res) => {
  const { title, author, body } = req.body;
  const articleManager = new ArticleManager();
  const newArticle = await articleManager.createNewArticle(title, author, body);

  if (newArticle.error) {
    res.render('errors', {
      error: newArticle.error
    });
  } else {
    res.status(200);
    res.redirect('/');
  }
});

app.listen(3000, () => console.log('server is up and running at port 3000'));
