/*Pow(x, n)
Implement pow(x, n).
*/


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n===0) return 1;
    if(x===0||x===1||n===1) return x;
    if(n===-1) return 1/x;
    if(n<0){
        n=-n;
        x=1/x;
    }
    return (n%2===0)?myPow(x*x,n/2):x*myPow(x*x,~~(n/2));
};
