/*Count Primes
Count the number of prime numbers less than a non-negative number, n.
*/


/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n<2) return 0;
    var arr=[],
    count=0;
    for(var i=2;i<n;i++){
        arr[i]=true;
    }
    for(var j=2;j*j<n;j++){
        if(!arr[j]) continue;
        for(var t=j*j;t<n;t+=j){
            arr[t]=false;
        }
    }
    for(var k=2;k<n;k++){
        if(arr[k])count++;
    }
    return count;
};
