/*Median of Two Sorted Arrays
There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. 
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
   var len1=0,
   len2=0,
   tot=0,
   arr=[];
   while(nums1[len1]!==undefined&&nums2[len2]!==undefined){
       if(nums1[len1]>nums2[len2]){
           arr.push(nums2[len2]);
           len2++;
       }else{
           arr.push(nums1[len1]);
           len1++;
       }
   }
   while(nums1[len1]){
       arr.push(nums1[len1]);
       len1++;
   }
   while(nums2[len2]){
        arr.push(nums2[len2])
           len2++;
   }
   tot=arr.length;
   if((tot&1)===0){
       return (arr[tot/2]+arr[tot/2-1])/2;
   }else{
       return arr[~~(tot/2)];
   }
};
