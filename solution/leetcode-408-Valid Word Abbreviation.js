/*Valid Word Abbreviation
Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.
*/


/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    var p1=0,
    p2=0;
    while(p1<word.length&&p2<abbr.length){
        var temp1=word.charAt(p1),
        temp2=abbr.charAt(p2);
        if(temp1===temp2){
            p1++;p2++;
            continue;
        }
        if(temp2<='0'||temp2>='9') return false;
        var start=p2;
        while(p2<abbr.length&&abbr.charAt(p2)>='0'&&abbr.charAt(p2)<='9'){
            ++p2;
        }
        var num = abbr.slice(start,p2)-0;
        p1+=num;
    }
    if(p1===word.length&&p2===abbr.length) return true;
    return false;
};
