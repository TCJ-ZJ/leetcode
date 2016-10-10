/*Bulls and Cows
You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. 
Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). 
Your friend will use successive guesses and hints to eventually derive the secret number.
*/



/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var a = 0,
    b=0,
    obj={},
    len= secret.length;
    for(var j=0;j<10;j++){
        obj[j]=0;
    }
    for(var i=0;i<len;i++){
        var c1=secret.charAt(i),
        c2 = guess.charAt(i);
        if(c1===c2) a++;
        else{
            b+=(++obj[c1])<=0?1:0;
            b+=(--obj[c2])>=0?1:0;
        }
    }
    return a+'A'+b+'B';
};
