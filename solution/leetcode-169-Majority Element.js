/*Majority Element
Given an array of size n, find the majority element.
The majority element is the element that appears more than ⌊ n/2 ⌋ times.
You may assume that the array is non-empty and the majority element always exist in the array.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
//method1
var majorityElement = function(nums) {
    var len = nums.length,
    obj={},
    half=~~(len/2);
    for(var i=0;i<len;i++){
        if(!obj[nums[i]]){
            obj[nums[i]]=1;
        }else{
            obj[nums[i]]+=1;
        }
    }
    for(var p in obj){
        if(obj[p]>half){
            return p-0;
        }
    }
};


//methods2
var majorityElement = function(nums) {
    var len = nums.length,
    major = nums[0],
    count =1;
    for(var i =1;i<len;i++){
        if(count===0){
            count++;
            major = nums[i];
        }else if(major==nums[i]){
            count++;
        }else
            count--;
    }
    return major;
};
