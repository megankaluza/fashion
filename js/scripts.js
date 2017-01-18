$(document).ready(function(){
  $('#like').click(function(){
    $('.ui.modal')
  .modal({
    blurring: true
  })
  .modal('show');
    $('.columns').toggle('hide');
  });
  $('.close').click(function(){
    $('.columns').toggle('show');
  })
});
