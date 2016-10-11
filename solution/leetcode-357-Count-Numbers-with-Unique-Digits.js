/*Count Numbers with Unique Digits
Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.
*/


/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if(n===0) return 1;
    var arr=[];
    arr[0]=10
    for(var i =1;i<n;i++){
        if(i===1) arr[i]=9*(9-i+1);
        else arr[i]=arr[i-1]*(9-i+1);
    }
    for(var j=1;j<n;j++){
        arr[j]=arr[j]+arr[j-1];
    }
    if(n<10) return arr[n-1];
    else return arr[9];
};
