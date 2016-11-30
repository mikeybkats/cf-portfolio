var posts = [];

// make a constructor to build the blog posts based on the HTML template.
function Post (options){
  this.title = options.title;
  this.datePublished = options.datePublished;
  this.author = options.author;
  this.body = options.body;
}

// make a prototype post that passes new posts into the HTML template.
Post.prototype.toHtml = function(){
  var $newPost = $('article.template').clone();
  $newPost.find('h1').append(this.title);
  $newPost.find('').append(this.datePublished);
  $newPost.find('').append(this.author);
  $newPost.find('').append(this.body);
  // remove the template class to show the object
  $newPost.removeClass('template');
  return $newPost;
};

// sort the blog posts by newest to oldest
blogPosts.sort(function(current, next){
  return (new Date(next.datePublished)) - (new Date(current.datePublished));
});

//
