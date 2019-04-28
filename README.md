![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Express Cloudinary


## Introduction
We already learn how to upload images in our Express projects using multer npm package. Using multer we are uploading the files to the server where we are hosting our application. We use Heroku to deploy our projects, and Heroku does not support file uploads. The filesystem is read-only, so you’ll have to host your uploaded files somewhere else.

## Purpose

- Build a CRUD app
- Get comfortable building the routes with the different verbs
- Practice preparing the data to be displayed in the templates
- Add a new feature to be able to upload images

## Requirements

- Fork this repo
- Clone this repo


## Submission

- Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```
- Create Pull Request so your TAs can check up your work.


## Instructions

### Iteration 0 | Initialize the project

After forking and cloning the project, you will have to run:

```
express express-cloudinary --view=hbs --git
```

Configurate all the files and other packages (mongoose, eslint, etc.)

And remember to install all the dependencies:


```sh
$ npm install
```

Now you are ready to start 🚀


## Iteration #1: The `Post` Model

Once we have generated our Express app, our first step is to create the `Post` model and seed some initial posts in our database.

The `Post` model should have:
- `title` - String (like _My first post,_ etc.)
- `description` - String (For example _She sells seashells by the seashore_, etc)


### Steps we will follow in this iteration:

1. Create the `post.js` model file in the `models/` folder.
2. In the `post.js` model file:
    - Create the `Post` model with the schema.
    - Create the post schema with `title` and `description`.
    - Export the `Post` model.
3. Create the `seeds.js` file in the `bin/` folder.
4. In `seeds.js` file:
    - Create an array of 3 objects, each with `title` and `description` for our initial posts.
    - Call the `Post` model's `create` method with the array as argument.
    - In the `create` method's callback, display feedback.
5. Run the seed file with `node` to seed your database.
6. Check the database with the `mongo` command to confirm that your data was saved.


## Iteration #2: Listing Our Posts

Now that we've got some posts in the database, we can start working with them in our Express app. Let's **display a list of all the posts**.

Here's the route we will be using:

|   Route   | HTTP Verb |   Description   |
|-----------|-----------|-----------------|
| `/posts` |    GET    | Show all posts |

### Steps we will follow in this iteration:

1. Locate the `/posts` GET route in `routes/posts.js`.
2. In the route callback:
    - Call the `Post` model's `find` method to retrieve all the posts.
    - If there's an error, call the route's `next` function and return the error.
    - If there isn't an error, render the `posts/index` view.
    - Pass the array of posts into the view as a variable.
3. Create the `posts/` folder inside `views/`.
4. Create the `index` view file inside the `views/posts/` folder.
5. In the `views/posts/index` view file:
    - Add an `<h2>` tag for the page's heading.
    - Use a `forEach` loop to display tags with each post's `title` and `description`.
6. In the `views/index` (homepage) file:
    - Add a link that goes to the `/posts` route.

## Iteration #3: Adding image property to the posts

Now that we have a list of posts, let's make it so we can create new posts:

|     Route     | HTTP Verb |          Description          |
|---------------|-----------|-------------------------------|
| `/posts/new` |    GET    | Show a form to create a post |
|   `/posts`   |   POST    | Send the data from the form to this route to create the post and save to the database  |

### Steps we will follow in this iteration:

1. Locate the `/posts/new` GET route in `routes/posts.js`:
2. In that route's callback:
  - Render the `posts/new` view.
3. Create the `new` view file inside the `views/posts` folder
4. In the `views/posts/new` view file:
   - Add an `<h2>` for the page's heading.
   - Add a `<form>` tag that makes a POST request to `/posts`.
   - Add `<input>` tags inside the form so the user can fill in values for each attribute of the post.  Make an input for `title` and `description`
   - Add a `<button>` tag in the form so the user can submit the form once they are done filling it out.
5. Locate the `/posts` post route in `routes/posts.js`.
6. In that route's callback:
    - Create an object with keys for `title` and `description`.
    - Values for those keys should come from the form (`req.body` is the object full of the values from the form)
    - Create an instance of the `Post` model with the object you made in the previous step
    - Call the `save` method to save the new post to the database
    - If there is an error, render the `posts/new` view so the user can try again.
    - If there is no error, redirect to the page with the list of posts
7. In the `views/posts/index` view file:
    - Add a link that goes to the page you just created with the form to create a new post.

## Iteration #4: Configurate file upload

We are going to use Cloudinary. “Cloudinary provides a comprehensive cloud-based image management solution. Cloudinary is being used by tens of thousands of web and mobile application developers all around the world, from small startups to large enterprises. We are here to cover your every image-related need.”


### Steps we will follow in this iteration:

1. Navigate to https://cloudinary.com/ and create your account.
2. Create a `config` folder and inside create a `cloudinary.js` file where wi will store all the configuration needed.
3. Configurate `multer`, `cloudinary`  and `multer-storage-cloudinary` as we have seen in class.

We recommend to see the next article if you have questions about the configuration (or check the documentation ;) ).
https://medium.freecodecamp.org/how-to-allow-users-to-upload-images-with-node-express-mongoose-and-cloudinary-84cefbdff1d9

## Iteration #5: Update posts to add a post image

Now that we have everything set up lets add images to the posts.


### Steps we will follow in this iteration:

1. Modify the `Post` model to have a `imageUrl` (type `String`) property. 
2. Modify the form in the `posts/new` view to accept a new input for the `imageUrl` (remember the `enctype`).
3. Update the `/posts` POST route to upload the image.
4. Chnage the list of posts view to show the image as well.

# That's it! 😄

Happy Coding! :heart:
