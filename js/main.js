(function(window) {

  $('.next').click(function() {
    chess.move(chess.game.move1);
  });

  $('.last').click(function() {
    chess.move(chess.game.move1);
    chess.move(chess.game.move2);
    chess.move(chess.game.move3);
    chess.move(chess.game.move4);
    chess.move(chess.game.move5);
    chess.move(chess.game.move6);
    chess.move(chess.game.move7);
    chess.move(chess.game.move8);
    chess.move(chess.game.move9);
  });

})(window);

// $('.rank-2 > .file-d').removeClass('white pawn');
// $('.rank-4 > .file-d').addClass('white pawn')
// console.log("Yippe!");
