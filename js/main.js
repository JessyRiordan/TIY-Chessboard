(function(window) {

  $('.next').click(function() {
    $('.rank-2 > .file-d').removeClass('white pawn');
    $('.rank-4 > .file-d').addClass('white pawn')
    console.log("Yippe!");
  });

})(window);
