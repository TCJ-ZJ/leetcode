/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    
    if(nums.length<2) return 0;
    
    var max= maxDigits(nums);
    
    for(var i = 0;i<max;i++){
        
        countingsort(nums,Math.pow(10,i));
        
    }
    
    var res = 0;
    
    for(var i =1;i<nums.length;i++){
        
        if(nums[i]-nums[i-1]>res) res = nums[i]-nums[i-1];
        
    }
    
    return res;
    
}

function maxDigits(nums){
    
    var max = 0;
    
    for(var i = 0;i<nums.length;i++ ){
        
        if(nums[i]>max) max= nums[i];
        
    }
    
    max= max+'';
    
    return max.length;
    
}


function getDigit(num,digit){
    
    return (~~(num/digit))%10;
    
}


function countingsort(arr,d){
    
    var b = [],
    
    c = [];
    
    for(var i = 0;i<10;i++) c[i] = 0;
    
    for(var i = 0;i<arr.length;i++){
        
        var digit = getDigit(arr[i],d);
        
        c[digit]++;
        
    } 
    
    for(var i =1;i<10;i++) c[i]+=c[i-1];
    
    for(var i = arr.length-1;i>=0;i--) {
        
        var digit = getDigit(arr[i],d);
        
        b[c[digit]-1] = arr[i];
        
        c[digit]--;
        
    }
    
    for(var i = 0;i<arr.length;i++){
        
        arr[i] = b[i];
        
    }
    
}
