/*Divide Two Integers
Divide two integers without using multiplication, division and mod operator.
If it is overflow, return MAX_INT.
*/


/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var sign = 1,
    max = 2147483647,
    min = -2147483648;
    if((dividend<0&&divisor>0)||(dividend>0&&divisor<0)){
        sign = -1;
    }
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    if(dividend<divisor) return 0;
    if(divisor===0) return max;
    var result = doDivide(dividend,divisor);
    if(result>max){
        return sign===1?max:min;
    }
    return result*sign;
};

function doDivide(dividend,divisor){
    if(dividend<divisor) return 0;
    var temp =divisor,
    n=1;
    while((temp+temp)<=dividend){
        temp+=temp;
        n+=n;
    }
    return n+divide(dividend-temp,divisor);
}
