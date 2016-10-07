/*Excel Sheet Column Title
Given a positive integer, return its corresponding column title as appear in an Excel sheet.
*/


/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var result="";
    var a = 'A'.charCodeAt();
    while(n!==0){
        result= String.fromCharCode(((n-1)%26)+a)+result;
        n=~~((n-1)/26);
    }
    return result;
};
