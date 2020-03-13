$('.avatar').click(function(){
  $('.user__menu').toggleClass('show__submenu-user')
})

$('.notifications').click(function(){
  $('.news-mensages').toggleClass('news-mensages__show');
})

$('.close-news').click(function(){
  $('.news-mensages').removeClass('news-mensages__show');
})
$('.change-theme').click(function(){
  var link = 'http://'+window.location.host+'/change-theme';
  window.location.href = link;
})


$(function(){
  $('.upload-avatar').click(function(e){
      e.preventDefault();
      $('#file').click();}
  );
});






$("#form").submit(function() {
  if($("input[name=name]").val() == ''){
    Swal.fire(
      'Preencha o campo nome',
      'O campo nome não pode estar vazio',
      'error'
    )
      return false;
  }
  if($("input[name=email]").val() == ''){
    Swal.fire(
      'Preencha o campo email',
      'O campo email não pode estar vazio',
      'error'
    )
      return false;
  }
  if($("input[name=password]").val() == ''){
    Swal.fire(
      'Preencha o campo senha',
      'O campo senha não pode estar vazio',
      'error'
    )
      return false;
  }
  if($("input[name=re-password]").val() == ''){
    Swal.fire(
      'Repita a senha',
      'Por segurança, repita a sua senha',
      'error'
    )
      return false;
  }
})


$("#comment").submit(function() {
  if($("input[name=name]").val() == ''){
    Swal.fire(
      'Preencha o campo nome',
      'O campo nome não pode estar vazio',
      'error'
    )
      return false;
  }
  if($("input[name=title]").val() == ''){
    Swal.fire(
      'Preencha o campo titulo',
      'O campo titulo não pode estar vazio',
      'error'
    )
      return false;
  }
  if($("textarea[name=msg]").val() == ''){
    Swal.fire(
      'Adicione alguma mensagem',
      'O campo de mensagem não pode estar vazio',
      'error'
    )
      return false;
  }else{
    Swal.fire(
      'Mensagem enviada',
      'Obrigado pela mensagem, ela é de muita importância!',
      'success'
    )
  }
})

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  $(element).addClass('copiado');
  setTimeout(function(){
    $(element).removeClass('copiado');
  }, 300)
  document.execCommand("copy");
  $temp.remove();
}


function ConfirDelete(event, form){
  event.preventDefault();
  Swal.fire({
      title: 'A você tem certeza?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, delete esse link!'
      }).then((result) => {
      if (result.value) {
          Swal.fire(
          'Deletado!',
          'Esse link foi deletado com sucesso!',
          'success'
          );
          
          setTimeout(function(){
              form.submit();
          }, 1300)
          
      }
  })
}


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
  $('[data-toggle="popover"]').popover()
})