/*Container With Most Water
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
Find two lines, which together with x-axis forms a container, such that the container contains the most water.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height){
    var l=0,
    r = height.length-1,
    mx = 0;
    while(l<r){
        mx = Math.max(mx,Math.min(height[r],height[l])*(r-l));
        height[l]<height[r]?l++:r--;
    }
    return mx;
};
