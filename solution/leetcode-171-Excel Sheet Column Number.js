/*Excel Sheet Column Number
Given a column title as appear in an Excel sheet, return its corresponding column number.
*/


/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var len = s.length,
    sum=0,
    a='A';
    for(var i =0;i<len;i++){
        sum+=Math.pow(26,(len-i-1))*(s.charAt(i).charCodeAt()-a.charCodeAt()+1);
    }
    return sum;
};
