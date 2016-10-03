/*Reverse String
Write a function that takes a string as input and returns the string reversed.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var len = s.length,
    result="";
    for(var i=len-1;i>=0;i--){
        result +=s.charAt(i);
    }
    return result;
};
