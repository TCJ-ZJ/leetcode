/*Valid Anagram
Given two strings s and t, write a function to determine if t is an anagram of s.
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var len1 = s.length,
    len2 = t.length;
    if(len1!==len2) return false;
    var obj={},
    temp=null;
    for(var i = 0;i<len1;i++){
        temp = s.charAt(i);
        if(obj[temp]) obj[temp]++;
        else obj[temp]=1;
    }
    for(var j =0;j<len1;j++){
        temp=t.charAt(j);
        if(obj[temp]) obj[temp]--;
            else return false;
        if(obj[temp]<0) return false;
    }
    return true;
};
