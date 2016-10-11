/*Range Addition
Assume you have an array of length n initialized with all 0's and are given k update operations.
Each operation is represented as a triplet: [startIndex, endIndex, inc] which increments each element of subarray A[startIndex ... endIndex] (startIndex and endIndex inclusive) with inc.
Return the modified array after all k operations were executed.
*/


/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
    var len1 = updates.length;
    var arr= [];
    for(var i =0;i<length;i++){
        arr[i]=0;
    }
    
    for(var j = 0;j<len1;j++){
        if(updates[j][0]===0) arr[updates[j][1]]+=updates[j][2];
        else{
            arr[updates[j][1]]+=updates[j][2];
            arr[updates[j][0]-1]-=updates[j][2];
        }
    }
    
    var result= [];
    result[length-1]=arr[length-1];
    for(var k=length-2;k>=0;k--){
        result[k]=result[k+1]+arr[k];
    }
    return result;
};
