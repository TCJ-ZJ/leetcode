/*Power of Four
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
*/


/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if(num<=0) return false;
    if(num===1) return true;
    while(num>4){
        num=num/4;
    }
    if(num%4===0) return true;
    return false;
};
