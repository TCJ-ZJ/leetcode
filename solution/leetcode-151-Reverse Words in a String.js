/*Reverse Words in a String
Given an input string, reverse the string word by word.
*/

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    return str.trim().split(" ").reverse().reduce(function(str,e){
        if(e==="") return str;
        return str+" "+e;
    });
};
