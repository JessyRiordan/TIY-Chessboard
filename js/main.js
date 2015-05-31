(function(window) {

  $('.next').click(function() {
    chess.move(chess.move1);
    // $('.rank-2 > .file-d').removeClass('white pawn');
    // $('.rank-4 > .file-d').addClass('white pawn')
    // console.log("Yippe!");
  });

})(window);
