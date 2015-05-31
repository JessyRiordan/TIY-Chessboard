(function(window) {

    var move1 = ['.rank-2', '.file-d', '.rank-4', '.file-d', 'white pawn'];

    function move(whichMove) {
        $(whichMove[0] + '>' + whichMove[1]).removeClass(whichMove[4]);
        $(whichMove[2] + '>' + whichMove[3]).addClass(whichMove[4]);
    };

    window.chess = {

        'move1': move1,
        'move': move

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
