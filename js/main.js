(function(window) {

  // Clicking through the moves one by one.... if you keep clicking next it kinda keeps playing

  $('.next').click(function() {
    // chess.counter = (chess.counter + 1) % chess.game.length;

      if (chess.counter < chess.game.length) {
        chess.moveForward(chess.game[chess.counter]);
        chess.counter = chess.counter + 1;
      };
  });

  // Going backwards... eventually from current spot in game

  $('.prev').click(function() {

    if (chess.counter < chess.game.length) {
      chess.moveBackward(chess.game[chess.counter]);
      chess.counter = chess.counter - 1;
    };
  });

  // From opening to close

  $('.last').click(function() {
    for (chess.counter; chess.counter < chess.game.length; chess.counter++) {
      chess.move(chess.game[chess.counter]);
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
