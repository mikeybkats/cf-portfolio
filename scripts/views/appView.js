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

postsViewer.renderToPage = function(){
  Post.allPosts.forEach(function(blogPostObj){
    $('#posts').append(blogPostObj.toHtml('#postsTemplate'));
  });
};

menuHighlight();
Post.fetchAll();
