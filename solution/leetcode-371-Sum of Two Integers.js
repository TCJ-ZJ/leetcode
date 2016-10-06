/*Sum of Two Integers
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
*/


/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    var sum = 0;
    while(b!==0){
        sum=a^b;
        b=(a&b)<<1;
        a=sum;
    }
    return sum;
};
