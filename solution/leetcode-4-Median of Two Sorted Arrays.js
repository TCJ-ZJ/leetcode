/*Median of Two Sorted Arrays
There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. 
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/*solution1*/
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

/*solution2*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var len1=nums1.length,
    len2=nums2.length,
    left=~~((len1+len2+1)/2);
    right=~~((len1+len2+2)/2);
    return (getKth(nums1,0,nums2,0,left)+getKth(nums1,0,nums2,0,right))/2;
};

function getKth(arrA,startA,arrB,startB,k){
    var lenA=arrA.length,
    lenB=arrB.length,
    midA=Number.MAX_VALUE,
    midB=Number.MAX_VALUE,
    t=~~(k/2);
    if(startA>lenA-1) return arrB[startB+k-1];
    if(startB>lenB-1) return arrA[startA+k-1];
    if(k===1) return Math.min(arrB[startB],arrA[startA]);
    if(startA+t-1<lenA) midA=arrA[startA+t-1];
    if(startB+t-1<lenB) midB=arrB[startB+t-1];
    if(midA<midB){
        return getKth(arrA,startA+t,arrB,startB,k-t);
    }else{
        return getKth(arrA,startA,arrB,startB+t,k-t);
    }
}
