/*Isomorphic Strings
Given two strings s and t, determine if they are isomorphic.
Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character but a character may map to itself.
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var len = s.length,
    objs={},
    objt={};
    for(var i =0;i<len;i++){
        var tempS = s.charAt(i),
        tempT=t.charAt(i);
        if(!objs[tempS]&&!objt[tempT]){
            objs[tempS]=tempT;
            objt[tempT]=tempS;
        }
        else if(objs[tempS]!==tempT){
            return false;
        }
        
    }
    return true;
};
