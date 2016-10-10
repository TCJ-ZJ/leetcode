/*Intersection of Two Arrays
Given two arrays, write a function to compute their intersection.
*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var len1 = nums1.length,
    len2=nums2.length,
    obj={},
    arr=[];
    for(var i=0;i<len1;i++){
        if(!obj[nums1[i]]) obj[nums1[i]]=true;
    }
    
    for(var j=0;j<len2;j++){
        if(obj[nums2[j]]){
            arr.push(nums2[j]);
            delete obj[nums2[j]];
        }
    }
    return arr;
};
