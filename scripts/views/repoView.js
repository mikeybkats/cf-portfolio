(function(module){
  var reposViewObject = {};
  var reposCompiler = Handlebars.compile($('#gitHubTemplate').html());

  reposViewObject.renderRepos = function() {
    $('.github-content').append(
      reposObject.withTheAttribute('name').map(reposCompiler)
    );
  };

  reposObject.queryRepos(reposViewObject.renderRepos);

  module.reposViewObject = reposViewObject;
})(window);
