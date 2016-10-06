/*Unique Binary Search Trees
Given n, how many structurally unique BST's (binary search trees) that store values 1...n?
*/


/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if(n===0||n===1) return n;
    var arr=[];
    arr[0]=1;
    arr[1]=1;
    for(var i=2;i<=n;i++){
        arr[i]=0;
        for(var j=1;j<=i;j++){
            arr[i]+=arr[i-j]*arr[j-1];
        }
    }
    return arr[n]
    
};
