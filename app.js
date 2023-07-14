const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const url = "mongodb://0.0.0.0/wikiDB";
mongoose.connect(url);

if (url) {
  console.log("connected to DB");
} else {
  console.log("not connected to DB");
}

const articleSchema = mongoose.Schema({
  title: String,
  content: String
});

const Article = mongoose.model('Article', articleSchema);

// Get, Post, and Delete routes using chaining method
app.route("/articles")
  .get(function (req, res) {
    Article.find({})
      .then(function (foundArticles) {
        res.send(foundArticles);
      })
      .catch(function (err) {
        console.log(err);
      });
  })
  .post(async function (req, res) {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content
    });

    try {
      await newArticle.save();
      res.send("Successfully added a new article.");
    } catch (err) {
      res.send(err);
    }
  })
  .delete(function (req, res) {
    Article.deleteMany({})
      .then(function () {
        console.log("Deleted all articles");
        res.send("Successfully deleted all articles.");
      })
      .catch(function (err) {
        console.log("Error deleting articles");
        res.send("Error deleting articles.");
      });
  });


  ////////////////////////////////request targeting a specific article///////////////////////

  app.route('/articles/:articleTitle')
  .get(function(req, res) {
    Article.findOne({ title: req.params.articleTitle })
      .then(function(foundArticle) {
        console.log("Finding is working");
        res.send(foundArticle);
      })
      .catch(function(err) {
        console.log("Error at article title via search");
      });
  })
  .put(function(req, res) {
    Article.updateOne(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content }
    )
      .then(function() {
        res.send("Successfully updated article");
      })
      .catch(function(err) {
        console.log("Error at PUT in article single title");
      });
  })

  .patch(function(req,res){
    Article.updateOne(
      { title: req.params.articleTitle },
      {$set : req.body}
     
    )
      .then(function() {
        res.send("Successfully patched article");
      })
      .catch(function(err) {
        console.log("Error at Patch in article single title");
      });
  })

  .delete(function(req,res){

    Article.deleteOne(
      {title:req.params.articleTitle}
    )

    .then(function() {
      res.send("Successfully deleted at particular article");
    })
    .catch(function(err) {
      console.log("Error at deleting in article single title");
    });


  });

app.listen(3000, function () {
  console.log("Server port started at 3000");
});
