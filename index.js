const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Configure database
const dbConfig = {
    host: 'localhost',
    user: 'user',
    password: 'domanski',
    database: 'nodemysql'
}

//Create connection
const db = mysql.createConnection(dbConfig);

// Get all atticles
app.get('/', async (req, res) => {
    let sql = 'SELECT * FROM articles';
    await db.query(sql, (err, result) => {
        if (err) {
            console.log(`Error on fetching articles ${err}`);
        } else {
            res.render('index', {
                title: 'Most viewed articles',
                articles: result
            });
        }
    });
});

// Get add article template
app.get('/articles/add', (req, res) => res.render('addArticle', {
    title: 'Add article'
}));

// Post an article
app.post('/articles/add', (req, res) => {
    const { title, body } = req.body;
    let article  = { title, body };
    let sql = 'INSERT INTO articles SET ?';
    db.query(sql, article, (err, result) => {
        if (err) {
            console.log(`Error on inserting article ${err}`);
        } else {
            res.redirect('/');
        }
    });
    
});

//Create DB with route
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE testdb';
    db.query(sql, (err, result) => {
        if (err) {
            console.log(`DB creation error ${err}`);
        } else {
            console.log(result);
            res.send('Database created');
        }
    });
});

// Check which DBs we have
app.get('/checkdb', (req, res) => {
    let sql = 'SHOW DATABASES';
    db.query(sql, (err, result) => {
        if (err) {
            console.log(`DB creation error ${err}`);
        } else {
            res.send(result);
        }
    });
});

// Create table with a route
app.get('/createarticlestable', (req, res) => {
    let sql = 'CREATE TABLE articles(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) {
            console.log(`TABLE creation error ${err}`);
        } else {
            res.send(result);
        }
    });
});

// Connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('mySQL connected...');
});

app.listen(3000, () => console.log('Server is up and listening at port 3000'));