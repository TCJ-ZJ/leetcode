/*Implement strStr()
Implement strStr().
Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var lenH=haystack.length,
    lenN=needle.length,
    dis = lenH-lenN,
    point=0;
    if(dis<0) return -1;
    if(lenH===lenN&&haystack===needle) return 0;
    if(lenN===0) return 0;
    for(var i=0;i<dis+1;i++){
        if(haystack.charAt(i)===needle.charAt(0)){
            point = i+1;
            for(var j=1;j<lenN;j++){
                if(needle.charAt(j)===haystack.charAt(point)){
                    point++
                }else{
                    break;
                }
            }
            if(j>=lenN) return i;
        }
    }
    return -1;
};
