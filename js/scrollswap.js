$(function() {
  var $window = $(window);
  var $offset = $('img').offset().top - $window.height() / 2;

  $window.on('scroll', function() {
    console.log($window.scrollTop());
    console.log('$offset ' + $offset);
    if( ($offset) < $window.scrollTop() ) {
      $('img').attr('src', 'images/Delta_170Million_on.gif');
      console.log('swap on');
     } else {
      $('img').attr('src', 'images/Delta_170Million_off.gif');
      console.log('swap off');
    }
  });
});
