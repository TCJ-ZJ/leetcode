/*Contains Duplicate II
an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.
*/



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var len = nums.length;
    if(len===0) return false;
    var obj={};
    for(var i =0;i<len;i++){
        if(obj[nums[i]]){
            if(i+1-obj[nums[i]]<=k) return true;
            else obj[nums[i]]=i+1;
        }else{
            obj[nums[i]]=i+1;
            
        }
    }
    return false;
};
