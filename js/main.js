(function(window) {

  $('.next').click(function() {
    chess.counter = (chess.counter + 1) % chess.game.length;
    chess.move(chess.game[chess.counter]);
  });

  $('.last').click(function() {
    for (i = 0; i < chess.game.length; i++) {
      chess.move(chess.game[i]);
    };
  });

})(window);

// $('.rank-2 > .file-d').removeClass('white pawn');
// $('.rank-4 > .file-d').addClass('white pawn')
// console.log("Yippe!");


  // $('.next').click(function() {
  //   chess.move(chess.game[0]);
  // });

  // $('.last').click(function() {
  //   chess.move(chess.game.move1);
  //   chess.move(chess.game.move2);
  //   chess.move(chess.game.move3);
  //   chess.move(chess.game.move4);
  //   chess.move(chess.game.move5);
  //   chess.move(chess.game.move6);
  //   chess.move(chess.game.move7);
  //   chess.move(chess.game.move8);
  //   chess.move(chess.game.move9);
  // });
