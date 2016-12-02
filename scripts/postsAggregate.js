var posts = [];

// make a constructor to build the blog posts based on the HTML template.
function Post (options){
  this.title = options.title;
  this.datePublished = options.datePublished;
  this.author = options.author;
  this.body = options.body;
}

// class04 make a new function prototype that works with the handlebars template in the index.html
Post.prototype.toHtml = function(){
  // add any functions that implement the prototype object

  // put in the handlebars template script and assign it to a new var
  var $templateScript = $('#postsTemplate');
  // compile the template and assign it to a new var
  var compiledTemplate = handlebars.compile($templateScript);
  // return the compiled template
  return compiledTemplate(this);
};

// class03 make a prototype post that passes new posts into the HTML template.
// Post.prototype.toHtml = function(){
//   var $newPost = $('article.template').clone();
//   $newPost.find('h1').text(this.title);
//   $newPost.find('time').text(this.datePublished);
//   $newPost.find('.author').text(this.author);
//   $newPost.find('.post-content').append(this.body);
//   // remove the template class to show the object
//   $newPost.removeClass('template');
//   return $newPost;
// };

// sort the blog posts by newest to oldest
blogPosts.sort(function(currentObject, nextObject){
  return (new Date(nextObject.datePublished)) - (new Date(currentObject.datePublished));
});

// push the new posts into the array
blogPosts.forEach(function(blogPostObj){
  posts.push(new Post(blogPostObj));
});

// append posts to DOM
// cycles through all the posts (which have just been pushed to the posts[], and for each it passes them through to line 36
posts.forEach(function(blogPostObj) {
  // select post by id (which has been aggregated by the clone() method on each item in the posts[],
  $('#posts').append(blogPostObj.toHtml());
});
