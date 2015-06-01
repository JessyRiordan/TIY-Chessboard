(function(window) {

    var game = [ // list of 5-tuples representing fromRank, fromFile, toRank, toFile, piece
      // Representaiton of the same data, but more annoying to type
      // { fromRank: '.rank-2', fromFile: '.file-d',
      //   toRank: '.rank-4',
      //   toFile: '.file-d',
      //   piece: 'white pawn'
      // }
      ['.rank-2', '.file-d', '.rank-4', '.file-d', 'white pawn'],
      ['.rank-8', '.file-g', '.rank-6', '.file-f', 'black knight'],
      ['.rank-2', '.file-c', '.rank-4', '.file-c', 'white pawn'],
      ['.rank-7', '.file-e', '.rank-6', '.file-e', 'black pawn'],
      ['.rank-2', '.file-g', '.rank-3', '.file-g', 'white pawn'],
      ['.rank-7', '.file-d', '.rank-5', '.file-d', 'black pawn'],
      ['.rank-1', '.file-f', '.rank-2', '.file-g', 'white bishop'],
      ['.rank-8', '.file-f', '.rank-7', '.file-e', 'black bishop'],
      ['.rank-1', '.file-g', '.rank-3', '.file-f', 'white knight'], // End of opening
      ['.rank-8', '.file-e', '.rank-8', '.file-g', 'black king'], // Black King moves... but castling needs to happen
      ['.rank-8', '.file-h', '.rank-8', '.file-f', 'black rook'], // sooo... the black rook needs to move
      ['.rank-1', '.file-e', '.rank-1', '.file-g', 'white king'], // White King moves... but castling needs to happen
      ['.rank-1', '.file-h', '.rank-1', '.file-f', 'white rook'], // sooo... the white rook needs to move
      ['.rank-5', '.file-d', '.rank-4', '.file-c', 'black pawn']

   ];

   var reverseGame = [
     ['.rank-4', '.file-d', '.rank-2', '.file-d', 'white pawn'],
     ['.rank-6', '.file-f', '.rank-8', '.file-g', 'black knight'],
     ['.rank-4', '.file-c', '.rank-2', '.file-c', 'white pawn'],
     ['.rank-6', '.file-e', '.rank-7', '.file-e', 'black pawn'],
     ['.rank-3', '.file-g', '.rank-2', '.file-g', 'white pawn'],
     ['.rank-5', '.file-d', '.rank-7', '.file-d', 'black pawn'],
     ['.rank-2', '.file-g', '.rank-1', '.file-f', 'white bishop'],
     ['.rank-7', '.file-e', '.rank-8', '.file-f', 'black bishop'],
     ['.rank-3', '.file-f', '.rank-1', '.file-g', 'white knight']
   ];

    var counter = 0;

    /**
     * @param {Array} whichMove [ fromRank, fromFile, toRank, toFile, piece ]
     * @TODO move the function to main.js
     */
    function moveForward(whichMove) {
        $(whichMove[0] + '>' + whichMove[1]).removeClass(whichMove[4]);
        $(whichMove[2] + '>' + whichMove[3]).addClass(whichMove[4]);
    };

    function moveBackward(whichMove) {
        $(whichMove[2] + '>' + whichMove[3]).removeClass(whichMove[4]);
        $(whichMove[0] + '>' + whichMove[1]).addClass(whichMove[4]);
    };


    window.chess = {

        'game': game,
        'moveForward': moveForward,
        'moveBackward': moveBackward,
        'counter': counter,
        'reverseGame': reverseGame,

    };
})(window);


// var board = {
//     rank: [1, 2, 3, 4, 5, 6, 7, 8],
//     file: [1, 2, 3, 4, 5, 6, 7, 8]
// };
//
// var piece = function(rank, file) {
//
// }
