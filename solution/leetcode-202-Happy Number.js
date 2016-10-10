/*Happy Number
Write an algorithm to determine if a number is "happy".
A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. 
Those numbers for which this process ends in 1 are happy numbers.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var slow =n,
    fast=n;
    do{
        slow=doMutiply(slow);
        fast=doMutiply(fast);
        fast=doMutiply(fast)
    }while(slow!==fast)
    if(slow===1) return true;
    return false;
};

function doMutiply(n){
    var sum=0;
    while(n>0){
        var k=n%10;
        sum+=k*k;
        n=~~(n/10);
    }
    return sum;
}
