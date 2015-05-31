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

    var counter = -1

    function move(whichMove) {
        $(whichMove[0] + '>' + whichMove[1]).removeClass(whichMove[4]);
        $(whichMove[2] + '>' + whichMove[3]).addClass(whichMove[4]);
    };

    window.chess = {

        'game': game,
        'move': move,
        'counter': counter

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
