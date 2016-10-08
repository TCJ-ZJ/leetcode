/*Length of Last Word
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
If the last word does not exist, return 0.
*/


/*solution1*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length===0) return 0;
    var arr=s.split(" ");
    var len = arr.length;
    while(arr[len-1]===''){
        len--;
        if(len-1<0) return 0;
    }
    return arr[len-1].length;
};


/*solution2*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length===0) return 0;
    var len = s.length,
    count=0,
    pointer=len-1;
    while(s.charAt(pointer)===" "){
        pointer--;
        if(pointer<0) return 0;
    }
    
    while(s.charAt(pointer)!==" "&&pointer>=0){
        count++;
        pointer--;
    }
    return count;
};
