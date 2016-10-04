/*Plus One
Given a non-negative number represented as an array of digits, plus one to the number.
The digits are stored such that the most significant digit is at the head of the list.
*/


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits.unshift(0);
    var len = digits.length;
    for(var i=len-1;i>0;i--){
        if(i===len-1){
            digits[i]+=1;
        }
        if(digits[i]>=10){
            digits[i]-=10;
            digits[i-1]+=1;
        }
    }
    if(digits[0]===0) digits.shift();
    return digits;
};
