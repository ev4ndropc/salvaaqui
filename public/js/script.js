$('.avatar').click(function(){
  $('.user__menu').toggleClass('show__submenu-user')
})

$('.notifications').click(function(){
  $('.news-mensages').toggleClass('news-mensages__show');
})

$('.close-news').click(function(){
  $('.news-mensages').removeClass('news-mensages__show');
})

$(function(){
  $('.upload-avatar').click(function(e){
      e.preventDefault();
      $('#file').click();}
  );
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
  $('[data-toggle="popover"]').popover()
})