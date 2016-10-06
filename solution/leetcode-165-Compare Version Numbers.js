/*Compare Version Numbers
Compare two version numbers version1 and version2.
If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.
You may assume that the version strings are non-empty and contain only digits and the . character.
The . character does not represent a decimal point and is used to separate number sequences.
For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.
*/


/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var arr1=version1.split("."),
    arr2=version2.split("."),
    len1=arr1.length,
    len2=arr2.length,
    count1=0,
    count2=0;
   while(count1<len1&&count2<len2){
        if(arr1[count1]-0<arr2[count2]-0) {
            return -1;
        }else if(arr1[count1]-0>arr2[count2]-0){
            return 1;
        } 
        count1++;
        count2++;
    }
    while(count1<len1){
        if(arr1[count1]>0) return 1;
        count1++;
    }
    while(count2<len2){
        if(arr2[count2]>0) return -1;
        count2++;
    }
    return 0;
};
