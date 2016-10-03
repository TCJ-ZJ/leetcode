/*Container With Most Water
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
Find two lines, which together with x-axis forms a container, such that the container contains the most water.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var len=height.length,
    l=0,
    r=len-1,
    result=0;
    while(l<r){
        result=Math.max(result,Math.min(height[l],height[r])*(r-l));
        if(height[l]<height[r]){
            l++;
        }else{
            r--;
        }
    }
    return result;
};
