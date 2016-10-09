/*Palindrome Permutation
Given a string, determine if a permutation of the string could form a palindrome.
*/


/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    var count= 0,
    obj={},
    len=s.length;
    if(len===0||len===1) return true;
    for(var i=0;i<len;i++){
        var temp = s.charAt(i);
        if(!obj[temp]){
            obj[temp]=1;
            count++;
        }else{
            obj[temp]++;
            if(obj[temp]%2===1) count++;
            else count--;
        }
    }
    if(count>1) return false;
    return true;
};
