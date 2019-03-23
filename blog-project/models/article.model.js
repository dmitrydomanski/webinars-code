const mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    displayText: {
        type: String,
        required: true,
        default: 'Some text here'
    },
    body: {
        type: String,
        required: true
    }
});

let article = module.exports = mongoose.model('Article', articleSchema );