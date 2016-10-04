/*Word Break
Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
*/


/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var len= s.length,
    arr=[];
    arr[0]=true;
    for(var i =1 ;i<=len;i++){
        for(var j=i-1;j>=0;j--){
            if(arr[j]&&wordDict.has(s.slice(j,i))){
                arr[i]=true;
                break;
            }
        }
    }
    return arr[len]?true:false;
};
