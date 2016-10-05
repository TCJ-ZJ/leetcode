/*Best Time to Buy and Sell Stock II
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. 
You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times).
However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
*/


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var len = prices.length;
    if(len===0||len===1) return 0;
    var arr=[];
    arr[0]=0;
    for(var i=1;i<len;i++){
        arr[i]=Math.max(arr[i-1],prices[i]-prices[i-1]+arr[i-1]);
    }
    return arr[len-1];
};
