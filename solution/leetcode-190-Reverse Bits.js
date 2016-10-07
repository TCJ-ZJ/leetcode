/*Reverse Bits
Reverse bits of a given 32 bits unsigned integer.
For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).
*/


/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
   var ans=0;
   for(var i=31;i>=0;i--){
       ans|=(n&1)<<i;
       n>>=1;
   }
   return ans>>>0;
};
