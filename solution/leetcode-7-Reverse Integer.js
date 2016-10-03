/*Reverse Integer
Reverse digits of an integer.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result=0,
    symbol=1;
    if(x<10&&x>-10){
        return x;
    }
    if(x<0){
        symbol=-1;
        x=x*-1;
    }
    result=result+x%10;
    x=~~(x/10);
    while(x>0){
        result=result*10+x%10;
        x=~~(x/10);
    }
    result=result*symbol;
    return (result<2147483647&&result>-2147483647)?result:0;
};
