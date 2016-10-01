/*Longest Substring Without Repeating Characters
Given a string, find the length of the longest substring without repeating characters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length===0||s===null){
        return 0;
    }
    var obj={},
    result=0,
    len= s.length;
    for(var i=0,j=0;j<len;j++){
        if(obj[s.charAt(j)]){
            i=Math.max(obj[s.charAt(j)],i);
        }
        result=Math.max(result,j-i+1);
        obj[s.charAt(j)]=j+1;
    }
    return result;
};
