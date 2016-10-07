/*Power of Two
Given an integer, write a function to determine if it is a power of two.
*/


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
   if(n<=0)return false;
   return (n&(n-1))===0?true:false;
};
