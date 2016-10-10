/*Word Pattern
Given a pattern and a string str, find if str follows the same pattern.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
*/


/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var len1 = pattern.length,
    obj1={},
    obj2={},
    arr = str.split(' '),
    len2=arr.length;
    if(len1!==len2) return false;
    for(var i=0;i<len1;i++){
        var temp1=pattern.charAt(i),
        temp2 = arr[i];
        if(!obj1[temp1]&&!obj2[temp2]){
           obj1[temp1]=temp2;
           obj2[temp2]=temp1;
        } else if(obj1[temp1]!==temp2){
            return false;
        }
    }
    return true;
};
