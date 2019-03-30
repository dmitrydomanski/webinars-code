const Article = require('../models/article.model');

class ArticleManager {

    async createNewArticle (title, author, body) {
        let resultObject = {
            result: null,
            error: null
        }

        const articleObject = {
            title,
            author,
            displayText: `${body.slice(0, 140)}...`,
            body
        }

        try {
            let article = new Article(articleObject);
            const result = await article.save();
            resultObject.result = result;
            return resultObject;
        } catch (error) {
             resultObject.error = error;
             return resultObject;
        }
    }

    async getArticles () {
        let resultObject = {
            articles: null,
            error: null
        }

        try {
            let articles = await Article.find({});
            resultObject.articles = articles;
            return resultObject;
        } catch (error) {
            resultObject.error = error;
            return resultObject;
        }
    }

    async getArticleById (articleId) {
        let resultObject = {
            article: null,
            error: null
        }

        try {
           let article = await Article.findById(articleId);
        //    let article = await Article.findOne({_id: articleId});
           resultObject.article = article;
        } catch (error) {
            resultObject.error = error;            
        }
        return resultObject;
    }
}

module.exports = ArticleManager;