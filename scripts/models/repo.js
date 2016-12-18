//make a (function(module){})(window); function
(function(module){

  // make an object to store your repos this will be the reference object for the application
  var reposObject = {};

  // make a new object.array (reference object)
  reposObject.reposArray = [];

  // make an object.functionName (reference object) as a callback function
  reposObject.queryRepos = function(callback){
    // this function will contact the api and pull down the info we need and store it in our new array.
    // NOTE: refactor this request into an $.get call
    $.when(
       $.get('/github/users/mikeybkats/repos', function(data) {
         console.log(data);
         reposObject.reposArray = data;
       })).done(callback);
  };

  reposObject.withTheAttribute = function(myAttr) {
    return reposObject.reposArray.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  // the last thing to do is set the module.object = object
  module.reposObject = reposObject;
})(window);
