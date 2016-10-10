/*Longest Palindrome
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.
This is case sensitive, for example "Aa" is not considered a palindrome here.
*/


/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var len = s.length,
    obj={},
    count=0;
    for(var i=0;i<len;i++){
        var temp =s.charAt(i);
        if(!obj[temp]){
            obj[temp]=1;
        }else{
            obj[temp]++;
            if(obj[temp]%2===0) count+=2;
        }
    }
    return count===len?count:count+1;
};
