$(document).ready(function(){
  //Scroll Animation//
  (function($) {

    /**
    * Copyright 2012, Digital Fusion
    * Licensed under the MIT license.
    * http://teamdf.com/jquery-plugins/license/
    *
    * @author Sam Sehnert
    * @desc A small plugin that checks whether elements are within
    *     the user visible viewport of a web browser.
    *     only accounts for vertical position, not horizontal.
    */

    $.fn.visible = function(partial) {

      var $t            = $(this),
      $w            = $(window),
      viewTop       = $w.scrollTop(),
      viewBottom    = viewTop + $w.height(),
      _top          = $t.offset().top,
      _bottom       = _top + $t.height(),
      compareTop    = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

  })(jQuery);

  var win = $(window);

  var allMods = $(".box");

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible");
    }
  });

  win.scroll(function(event) {

    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in");
      }
    });
  });

  //Open Modal//
  $('#like').click(function(){
    $('.one')
    .modal('show');
  });
  //Exit Modal//
  $('.exit').click(function(){
    $('.modal').modal('hide');
  });
  //Open Navigation//
  $('#open').click(function(){
    $('.ui.sidebar')
    .sidebar('toggle');
  });
  $('#likeTwo').click(function(){
    $('.two')
    .modal('show');
  });
  $('#likeThree').click(function(){
    $('.three')
    .modal('show');
  });
  $('#likeFour').click(function(){
    $('.four')
    .modal('show');
  });
  $('#likeFive').click(function(){
    $('.five')
    .modal('show');
  });
  $('#likeSix').click(function(){
    $('.six')
    .modal('show');
  });
  $('#likeSeven').click(function(){
    $('.seven')
    .modal('show');
  });
  $('#likeEight').click(function(){
    $('.eight')
    .modal('show');
  });
  $('#likeNine').click(function(){
    $('.nine')
    .modal('show');
  });
  $('#likeTen').click(function(){
    $('.ten')
    .modal('show');
  });
  $('#likeEleven').click(function(){
    $('.eleven')
    .modal('show');
  });
  $('#likeTwelve').click(function(){
    $('.twelve')
    .modal('show');
  });
  $('#likeThirteen').click(function(){
    $('.thirteen')
    .modal('show');
  });
  $('#likeFourteen').click(function(){
    $('.fourteen')
    .modal('show');
  });
  $('#likeFifteen').click(function(){
    $('.fifteen')
    .modal('show');
  });
  $('#likeSixteen').click(function(){
    $('.sixteen')
    .modal('show');
  });
  $('#likeSeventeen').click(function(){
    $('.seventeen')
    .modal('show');
  });
  $('#likeEighteen').click(function(){
    $('.eighteen')
    .modal('show');
  });
  $('#likeNineteen').click(function(){
    $('.nineteen')
    .modal('show');
  });
  $('#likeTwenty').click(function(){
    $('.twenty')
    .modal('show');
  });
  $('#likeTwentyOne').click(function(){
    $('.twentyOne')
    .modal('show');
  });
});
