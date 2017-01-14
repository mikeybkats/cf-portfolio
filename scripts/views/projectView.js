Project.projectClick = function (){
  $('.imageOverlay a').on('click', function(){
    var $projectURL = $(this).attr('href');
    clickedProject = new Project($projectURL);
    console.log(clickedProject);
    // append the project with the prototype function
    $('#project-iframe').empty();
    $('.projects-div').hide();
    $('#blog').siblings().hide();
    $('.second-nav').show();
    $('#project-iframe').append(clickedProject.compileProjectToHtml());
  });
};
