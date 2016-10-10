/*Add Strings
Given two non-negative numbers num1 and num2 represented as string, return the sum of num1 and num2.
*/


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var count = 0,
    len1 = num1.length,
    len2= num2.length,
    str='';
    while(len1>0||len2>0){
        var cur1 = len1>0?num1.charAt(len1-1)-0:0;
        var cur2 = len2>0?num2.charAt(len2-1)-0:0;
        var temp = cur1+cur2+count;
        if(temp>=10){
            str=(temp-10)+str;
            count=1;
        }else{
            str=temp+str;
            count=0
        }
        len1--;len2--;
    }
    if(count===1) str=1+str;
    return str;
};
