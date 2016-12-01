var sectionViewer = {};

// menu close after li click
$(document).ready(function(){
  $('.nav-item').click(function(){
    $('input[type=checkbox]').trigger('click');
  });
});

// menu functionality: on click hide other sections
sectionViewer.navigationFilter = function(){
  $('.main-nav').on('click', '.nav-item',function(){

    // Hide all of the sections that contain unwanted content
    $('.page-content').hide();
    // Fade in the single section that is wanted
    $('#' + $(this).data('spec')).fadeIn('slow');
  });
  $('.main-nav .menu-item:first').click();
};

sectionViewer.navigationFilter();
