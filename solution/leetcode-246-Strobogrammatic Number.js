/*Strobogrammatic Number
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).
Write a function to determine if a number is strobogrammatic. The number is represented as a string.
For example, the numbers "69", "88", and "818" are all strobogrammatic.
*/


/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    var obj={"9":"6","6":"9","8":"8","1":"1","0":"0"},
    start=0,
    end=num.length-1;
    while(start<end){
        if(obj[num.charAt(start)]!==num.charAt(end)) return false;
        else{
            start++;
            end--;
        }
    }
    var temp = num.charAt(start)
    if(start===end&&temp!=="8"&&temp!=="0"&&temp!=="1") return false;
    return true;
};
