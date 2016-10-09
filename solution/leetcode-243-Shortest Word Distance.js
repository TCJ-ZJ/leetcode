/*Shortest Word Distance
Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.
For example,
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].
Given word1 = “coding”, word2 = “practice”, return 3.
Given word1 = "makes", word2 = "coding", return 1.
*/


/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    var len= words.length;
    if(len===2) return 1;
    var num1=Number.MAX_VALUE;
    var num2=Number.MAX_VALUE;
    var result=Number.MAX_VALUE;
    for(var i = 0;i<len;i++){
        if(words[i]===word1){
            num1=i;
            result=Math.min(result,Math.abs(num1-num2));
        }
        if(words[i]===word2){
            num2=i;
            result=Math.min(result,Math.abs(num1-num2));
        } 
    }
    return result;
};
