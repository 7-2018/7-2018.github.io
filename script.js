$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-topp");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $("#logo").attr('src','slide/slika1.png', $(this).scrollTop() > $nav.height());
      $("#logo").attr('src','slide/slika11.png', $(this).scrollTop() <= $nav.height());
    });
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".letters");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

