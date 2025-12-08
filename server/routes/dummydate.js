const Post = require("../models/Posts");

function insertPostData() {
    Post.insertMany([
      {
        title: "Post One",
        body: "This is the first post we will be adding.",
      },
      {
        title: "Post Two",
        body: "This is another post we will be including in our database.",
      },
    ]);
}

// insertPostData(); Comment this out after saving and running it onve so you can check for inserted data.