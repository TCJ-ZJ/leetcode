/*Rotate Array
Rotate an array of n elements to the right by k steps.
*/


/*solution1*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var len = nums.length;
    k= k%len;
    if(k===0) return;
    nums.reverse()
    reverse(nums,0,k-1);
    reverse(nums,k,len-1)
};

function reverse(arr,start,end){
    while(start<end){
        var temp = arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }
}

/*solution2*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
        for(var i = 0;i<k;i++){
        var temp = nums.pop();
        nums.unshift(temp);
    }
}
