# Simple--Wiki-API---ArticleManagement-RESTful-API
simple API Restful of Article Managment about how to bulit it 

 # Wiki API - Article Management RESTful API
This is a RESTful API for managing articles in a MongoDB database. It provides endpoints to perform CRUD operations on articles, allowing you to retrieve articles, create new articles, update existing articles, and delete articles.

# Technologies Used
Node.js
Express.js
MongoDB
Mongoose
Getting Started
To get started with the Wiki API, follow the steps below:

# Prerequisites
Node.js (v12 or higher) installed on your machine
MongoDB instance running locally or a remote MongoDB connection URL

# Installation
Clone the repository:

git clone <repository-url>
Navigate to the project directory:

cd wiki-api
 # Install the dependencies:

npm install

Set up the MongoDB connection:

Open app.js in a text editor.

Replace the url variable with your MongoDB connection URL. If running locally, use mongodb://localhost:27017/wikiDB.
# Usage

Start the server:


npm start
The server will start running on http://localhost:3000.

Use an API testing tool like Postman or cURL to interact with the API.

# API Endpoints
The following endpoints are available:

GET /articles: Retrieve all articles.
POST /articles: Create a new article. Provide the title and content in the request body.
DELETE /articles: Delete all articles.
GET /articles/:articleTitle: Retrieve a specific article by title.
PUT /articles/:articleTitle: Update a specific article by title. Provide the new title and content in the request body.
PATCH /articles/:articleTitle: Partially update a specific article by title. Provide the fields to be updated in the request body.
DELETE /articles/:articleTitle: Delete a specific article by title.
Make sure to replace :articleTitle with the actual title of the article you want to retrieve, update, or delete.

# Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please submit an issue or create a pull request.

# Contact 
email  : praneeth.naik2002@gmail.com


