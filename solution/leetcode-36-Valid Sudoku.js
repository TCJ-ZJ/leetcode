/*Valid Sudoku
The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
*/



/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var obj={},
    temp=null;
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            if(board[i][j]!='.') {
                temp = 'i'+board[i][j]+'i';
                if(obj[i+temp]||obj[temp+j]||obj[~~(i/3)+temp+~~(j/3)]) return false;
                obj[i+temp]=true;
                obj[temp+j]=true;
                obj[~~(i/3)+temp+~~(j/3)]=true;
            }
        }
    }
    return true;
};
