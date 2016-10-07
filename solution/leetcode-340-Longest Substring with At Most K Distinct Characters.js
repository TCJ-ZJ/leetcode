/*Longest Substring with At Most K Distinct Characters
Given a string, find the length of the longest substring T that contains at most k distinct characters.
For example, Given s = “eceba” and k = 2,
T is "ece" which its length is 3.
*/


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    var len=s.length;
    if(len===0) return 0;
    if(k===0) return 0;
    if(len===1) return 1;
    var point=0,
    max=0,
    obj={},
    count=0;
    for(var i=0;i<len;i++){
        if(!obj[s.charAt(i)]){
           count++;
           obj[s.charAt(i)]=1;
        } else{
            obj[s.charAt(i)]++;
        }
        if(count>k){
           while(--obj[s.charAt(point++)]>0);
           count--;
        }
        max=Math.max(max,i-point+1);
    }
    return max;
};
