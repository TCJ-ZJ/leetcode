/*Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var len = strs.length;
    if (len === 0) return "";
    var sublen = strs[0].length;
    result = strs[0];
    for (var i = 1; i < len; i++) {
       while(strs[i].substr(0,sublen)!==result.substr(0,sublen)) sublen--;
       if(sublen===0) return "";
    }
    result=strs[0].substr(0,sublen);
    return result;
};
