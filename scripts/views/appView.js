var postsViewer = {};

// menu close after li click
$(document).ready(function(){
  $('.nav-item').click(function(){
    $('input[type=checkbox]').trigger('click');
  });
});

function menuHighlight(){
  $('.nav-item a').on('click', function(){
    $('.nav-item').removeClass('active');
  });

  $('.nav-item a').on('click', function(){
    var href = $(this).attr('href');
    $('li.nav-item a[href="' + href + '"]').parent().addClass('active');
  });
};

// menu functionality: on click hide other sections
// postsViewer.navigationFilter = function(){
//   $('.main-nav').on('click', '.nav-item',function(){
//     // Hide all of the sections that contain unwanted content
//     $('.page-content').hide();
//     // Fade in the single section that is wanted
//     $('#' + $(this).data('spec')).fadeIn('slow');
//   });
//   $('.main-nav .menu-item:first').click();
// };

postsViewer.renderToPage = function(){
  Post.allPosts.forEach(function(blogPostObj){
    $('#posts').append(blogPostObj.toHtml('#postsTemplate'));
  });
  // postsViewer.navigationFilter();
};

menuHighlight();
Post.fetchAll();
