function Post (opts) {
  for (var keys in opts) {
    this[keys] = opts[keys];
  }
}

Post.allPosts = [];

Post.prototype.toHtml = function(){
  var $templateScript = $('#postsTemplate').html();
  var compiledTemplate = Handlebars.compile($templateScript);
  return compiledTemplate(this);
};

Post.loadAll = function(inputData) {
  inputData.sort(function(a,b) {
    return (new Date(b.datePublished)) - (new Date(a.datePublished));
  })
  .forEach(function(ele) {
    Post.allPosts.push(new Post(ele));
  });
};

Post.fetchAll = function() {
  // if (localStorage){
  //
  // }else{
    $.getJSON('data/posts.json', function(postsJSON){
      Post.loadAll(postsJSON);
      localStorage.setItem('posts', JSON.stringify(postsJSON));
      
    });
    postsViewer.renderToPage();
  // }
};
// // sort the blog posts by newest to oldest
// blogPosts.sort(function(currentObject, nextObject){
//   return (new Date(nextObject.datePublished)) - (new Date(currentObject.datePublished));
// });
//
// push the new posts into the array
// blogPosts.forEach(function(blogPostObj){
//   posts.push(new Post(blogPostObj));
// });
//
// // append posts to DOM
// // cycles through all the posts (which have just been pushed to the posts[], and for each it passes them through to line 34
