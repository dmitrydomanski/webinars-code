const express = require("express");
const router = express.Router();
const ArticleManager = require("../../api/article");
const auth = require('../auth');

showAddArticleForm = (req, res) => {
  res.render("addArticle", {
    title: "Add article"
  });
};

createNewArticle = async (req, res) => {
  // on client: req.setHeaders('authorization', `Token ${localStorage.getItem('jwt-token')}`);
    const { title, author, body } = req.body;
    const articleManager = new ArticleManager();
    const newArticle = await articleManager.createNewArticle(title, author, body);
  
    if (newArticle.error) {
      res.render("errors", {
        error: newArticle.error
      });
    } else {
      res.redirect("/");
    }
  }

  displayArticleById = async (req, res) => {
    const  { id } = req.params;
    const articleManager = new ArticleManager();
    const articleItem = await articleManager.getArticleById(id);

    if (articleItem.error) {
        res.render('errors', {
            error: articleItem.error
        })
    } else {
        res.render('articlePage', {
            article: articleItem.article
        })
    }
  }

// Articles routes
router.get("/add", auth.optional, showAddArticleForm);
router.post("/add", auth.optional, createNewArticle);
router.get('/:id', auth.optional, displayArticleById);

module.exports = router;
