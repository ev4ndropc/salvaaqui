$('.avatar').click(function(){
  $('.user__menu').toggleClass('show__submenu-user')
})

$('.notifications').click(function(){
  $('.news-mensages').toggleClass('news-mensages__show');

  setTimeout(function(){
    $('.overlay-news').toggleClass('overlay-news__show')
  }, 300)
})

$('.close-news, .overlay-news').click(function(){
  $('.news-mensages').removeClass('news-mensages__show');
  
  setTimeout(function(){
    $('.overlay-news').removeClass('overlay-news__show')
  }, 300)

})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})