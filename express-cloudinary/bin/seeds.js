const mongoose = require('mongoose');
const Post = require('../model/PostModel');

const dbName = 'dbPost';
mongoose.connect(`mongodb://localhost/${dbName}`);

const postCollection = [ {
    title : " Kitten ",
    description: " This is a cute baby cat",
},
{
    title : " Pup ",
    description: " This is a cute baby dog",
},
{
    title : " Cub ",
    description: " This is a cute baby tiger",
}
];

Post.create(postCollection, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${postCollection.length} postCollection`)
    mongoose.connection.close();
  });