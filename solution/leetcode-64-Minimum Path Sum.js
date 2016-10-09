/*Minimum Path Sum
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
*/


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var arr=[];
    arr[0]=0;
    var w=grid.length,
    h=grid[0].length;
    for(var i=0;i<w;i++){
        for(var j=0;j<h;j++){
            if(i===0&&j!==0) grid[i][j]+=grid[i][j-1];
            if(i!==0&&j===0) grid[i][j]+=grid[i-1][j];
            if(i!==0&&j!==0) grid[i][j]+=Math.min(grid[i][j-1],grid[i-1][j]);
        }
    }
    return grid[w-1][h-1];
};
