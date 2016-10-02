/*String to Integer (atoi)
Implement atoi to convert a string to an integer.
*/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var len = str.length,
    index=0,
    symbol=1,
    digit=0,
    substr=null,
    tot=0;
    if(len===0) return 0;
    while(str.charAt(index)===' '&&index<len) index++;
    substr=str.charAt(index);
    if(substr==='+'||substr==='-'){
        symbol=substr==='+'?1:-1;
        index++;
    }
    while(index<len){
        substr=str.charAt(index);
        if(isNaN(substr)||substr===' ') break;
        digit=substr-0;
        if(tot>~~(2147483647/10)||(tot===~~(2147483647/10)&&digit>7)){
            return symbol===1?2147483647:-2147483648;
        }
        tot=tot*10+digit;
        index++;
    }
    return tot*symbol;
};
