/*Reverse Vowels of a String
Write a function that takes a string as input and reverse only the vowels of a string.
*/


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    arr = s.split('');
    var obj={"a":true,"e":true,"u":true,"i":true,"o":true,"A":true,"E":true,"U":true,"I":true,"O":true},
    len = arr.length,
    start=0,
    end=len-1,
    result='';
    while(start<end){
        if(obj[arr[start]]&&obj[arr[end]]){
            var temp = arr[start];
            arr[start]=arr[end];
            arr[end]=temp;
            start++;
            end--;
        }else if(obj[arr[start]]&&!obj[arr[end]]){
            end--;
        }else if(!obj[arr[start]]&&obj[arr[end]]){
            start++;
        }else{
            start++;
            end--;
        }
    }
    return arr.join('');
};
