/*Find the Difference
Given two strings s and t which consist of only lowercase letters.
String t is generated by random shuffling string s and then add one more letter at a random position.
Find the letter that was added in t.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var len = s.length,
    obj={}
    for(var i=0;i<len;i++){
        var temp = s.charAt(i);
        if(!obj[temp]) obj[temp]=1;
        else obj[temp]++;
    }
    for(var j=0;j<=len;j++){
        var temp1 = t.charAt(j);
        if(!obj[temp1]) return temp1;
        else obj[temp1]--;
        if(obj[temp1]<0) return temp1;
    }
};
