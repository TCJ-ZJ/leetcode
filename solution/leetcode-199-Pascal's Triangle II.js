/*Pascal's Triangle II
Given an index k, return the kth row of the Pascal's triangle.
For example, given k = 3,
Return [1,3,3,1].
*/


/*solution1*/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var arr=[];
    if(rowIndex<0) return arr;
    for(var i =0;i<rowIndex+1;i++){
        arr[i]=[1];
        for(var j =1;j<i+1;j++){
            arr[i][j]=arr[i-1][j-1]+(!arr[i-1][j]?0:arr[i-1][j]);
        }
    }
    return arr[rowIndex];
};

/*solution2*/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var arr=[];
    if(rowIndex<0) return arr;
    arr[0]=1;
    for(var i =1;i<rowIndex+1;i++){
        arr[i]=arr[i-1]*(rowIndex-i+1)/i;
    }
    return arr;
};
