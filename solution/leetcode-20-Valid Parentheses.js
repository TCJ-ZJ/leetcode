/*Valid Parentheses
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var len=s.length,
    arr=[],
    temp='',
    arrLen=0;
    if(len%2===1) return false;
    if(len===0) return true;
    for(var i=0;i<len;i++){
        temp = s.charAt(i);
        if(temp==='{'||temp==="["||temp==="("){
            arr[arrLen]=temp;
            arrLen++;
        }else if(temp==='}'&&arrLen>0&&arr[arrLen-1]==='{'){
            arrLen--;
            arr.length=arrLen;
        }else if(temp===']'&&arrLen>0&&arr[arrLen-1]==='['){
            arrLen--;
            arr.length=arrLen;
        }else if(temp===')'&&arrLen>0&&arr[arrLen-1]==='('){
            arrLen--;
            arr.length=arrLen;
        }else{
            return false;
        }
    }
    if(arrLen===0) return true;
    return false;
};
