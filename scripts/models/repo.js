//make a (function(module){})(window); function
(function(module){

  // make an object to store your repos this will be the reference object for the application
  var reposObject = {};

  // make a new object.array (reference object)
  reposObject.reposArray = [];

  // make an object.functionName (reference object) as a callback function
  reposObject.queryRepos = function(callback){
    // this function will contact the api and pull down the info we need and store it in our new array.
    $.ajax({
      // within the ajax function make an ajax query for your github repos
      // url: , type: , headers: , success: function that takes three arguments and passes the data into the object.array
      url: 'https://api.github.com/users/mikeybkats/repos' + '?page=2' + '&per_page=20',
      method: 'GET',
      headers: {'Authorization': 'token ' + michaelToken },
      success: function(data, string, xhr){
        // the success message will instantiate the callback(); and close the function
        allRepoData = data;
        console.log(data);
        callback();
      }
    });
  };
  // the last thing to do is set the module.object = object

  reposObject.withTheAttribute = function(myAttr) {
    return reposObject.reposArray.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };
  module.reposObject = reposObject;
})(window);
