/*Rotate Image
You are given an n x n 2D matrix representing an image.
Rotate the image by 90 degrees (clockwise).
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var len=matrix.length
    for(var i =0;i<~~(len/2);i++){
        var temp = matrix[i];
        matrix[i]=matrix[len-i-1];
        matrix[len-i-1]=temp;
    }
    
    for(var j=0;j<len;j++){
        for(var k =0;k<j;k++){
            var temp1 = matrix[j][k];
            matrix[j][k]=matrix[k][j];
            matrix[k][j]=temp1;
        }
    }
};
