function Project (opts){
  this.project_url = opts;
}

Project.prototype.compileProjectToHtml = function(){
  var $templateScript = $('#iFrameProjectTemplate').html();
  var compiledTemplate = Handlebars.compile($templateScript);
  console.log(compiledTemplate);
  return compiledTemplate(this);
};
