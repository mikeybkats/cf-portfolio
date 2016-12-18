//make a (function(module){})(window); function
(function(module){

  // make an object to store your repos this will be the reference object for the application
  var reposObject = {};

  // make a new object.array (reference object)
  reposObject.reposArray = [];

  // make an object.functionName (reference object) as a callback function
  reposObject.queryRepos = function(callback){
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

  module.reposObject = reposObject;
})(window);
