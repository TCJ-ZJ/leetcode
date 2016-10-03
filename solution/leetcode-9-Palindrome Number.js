/*Palindrome Number
Determine whether an integer is a palindrome. Do this without extra space.
*/


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    if(x<10) return true;
    if(x>2147483647) return false;
    var temp=x,
    k=0;
    while(temp>0){
        k=k*10+temp%10;
        temp=~~(temp/10);
    }
    if(k===x) return true;
    return false;
};
