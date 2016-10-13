/*Triangle
Given a triangle, find the minimum path sum from top to bottom. 
Each step you may move to adjacent numbers on the row below.
*/


/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var len = triangle.length;
    if(len===1) return triangle[0][0];
    var arr=[];
    for(var i =0;i<len;i++){
        arr[i]=triangle[len-1][i];
    }
    for(var j = len-2;j>=0;j--){
       for(var k=0;k<=j;k++){
           arr[k]=Math.min(arr[k],arr[k+1])+triangle[j][k];
       }
    }
    return arr[0];
};
