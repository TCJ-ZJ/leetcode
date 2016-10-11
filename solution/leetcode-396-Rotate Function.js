/*Rotate Function
Given an array of integers A and let n to be its length.
Assume Bk to be an array obtained by rotating the array A k positions clock-wise, we define a "rotation function" F on A as follow:
F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1].
Calculate the maximum value of F(0), F(1), ..., F(n-1).
*/


/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
    var len = A.length;
    if(len===0||len===1) return 0;
    var sum=0,
    k=0;
    for(var i = 0;i<len;i++){
        sum+=A[i];
        k+=A[i]*i;
    }
    var max=k;
    for(var j =1;j<len;j++){
        k=k-sum+A[j-1]*len;
        max=Math.max(max,k);
    }
    return max;
};

