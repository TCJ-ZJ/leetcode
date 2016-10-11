/*Integer Break
Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. 
Return the maximum product you can get.
For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).
*/


/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n===2) return 1;
    if(n===3) return 2;
    var sum = 1;
    if(n%3===2){
      sum*=2;
      n-=2;
    }
    if(n%3===1){
        sum*=4;
        n-=4;
    }
    while(n!==0){
        sum*=3;
        n-=3;
    }
    return sum;
};
