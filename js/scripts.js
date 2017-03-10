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
    .modal({
      blurring: true
    })
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
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#likeThree').click(function(){
    $('.three')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#likeFour').click(function(){
    $('.four')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#likeFive').click(function(){
    $('.five')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#likeSix').click(function(){
    $('.six')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#likeSeven').click(function(){
    $('.seven')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#likeEight').click(function(){
    $('.eight')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#likeNine').click(function(){
    $('.nine')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#likeTen').click(function(){
    $('.ten')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#likeEleven').click(function(){
    $('.eleven')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#likeTwelve').click(function(){
    $('.twelve')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#likeThirteen').click(function(){
    $('.thirteen')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#likeFourteen').click(function(){
    $('.fourteen')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#likeFifteen').click(function(){
    $('.fifteen')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#likeSixteen').click(function(){
    $('.sixteen')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#likeSeventeen').click(function(){
    $('.seventeen')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#likeEighteen').click(function(){
    $('.eighteen')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#likeNineteen').click(function(){
    $('.nineteen')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#likeTwenty').click(function(){
    $('.twenty')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#likeTwentyOne').click(function(){
    $('.twentyOne')
    .modal({
      blurring: true
    })
    .modal('show');
  });
});
