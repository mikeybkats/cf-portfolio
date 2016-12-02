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
  // put in the handlebars template script and assign it to a new var
  var $templateScript = $('#postsTemplate').html();
  // compile the template and assign it to a new var
  var compiledTemplate = Handlebars.compile($templateScript);
  // return the compiled template
  return compiledTemplate(this);
};

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
  $('#posts').append(blogPostObj.toHtml());
});
