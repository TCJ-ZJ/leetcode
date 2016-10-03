/*Pascal's Triangle
Given numRows, generate the first numRows of Pascal's triangle.
*/


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows===0){
        return [];
    }
    var arr=[[1]];
    for(var i=1;i<numRows;i++){
        arr[i]=[];
        arr[i][0]=1;
        for(var j=1;j<i;j++){
            arr[i][j]=arr[i-1][j-1]+arr[i-1][j];
        }
        arr[i][i]=1;
    }
    return arr;
};
