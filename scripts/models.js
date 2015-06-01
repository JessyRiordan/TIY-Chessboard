(function(window) {

    var game = [
      ['.rank-2', '.file-d', '.rank-4', '.file-d', 'white pawn'],
      ['.rank-8', '.file-g', '.rank-6', '.file-f', 'black knight'],
      ['.rank-2', '.file-c', '.rank-4', '.file-c', 'white pawn'],
      ['.rank-7', '.file-e', '.rank-6', '.file-e', 'black pawn'],
      ['.rank-2', '.file-g', '.rank-3', '.file-g', 'white pawn'],
      ['.rank-7', '.file-d', '.rank-5', '.file-d', 'black pawn'],
      ['.rank-1', '.file-f', '.rank-2', '.file-g', 'white bishop'],
      ['.rank-8', '.file-f', '.rank-7', '.file-e', 'black bishop'],
      ['.rank-1', '.file-g', '.rank-3', '.file-f', 'white knight']
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

    var counter = -1

    function move(whichMove) {
        $(whichMove[0] + '>' + whichMove[1]).removeClass(whichMove[4]);
        $(whichMove[2] + '>' + whichMove[3]).addClass(whichMove[4]);
    };

    window.chess = {

        'game': game,
        'move': move,
        'counter': counter,
        'reverseGame': reverseGame

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
