/*Ransom Note
*/


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var len1= magazine.length,
    len2=ransomNote.length,
    obj={},
    temp='';
    for(var i=0;i<len1;i++){
        temp=magazine.charAt(i); 
        if(!obj[temp]) obj[temp]=1;
        else obj[temp]++;
    }
    
    for(var j=0;j<len2;j++){
        temp= ransomNote.charAt(j);
        if(!obj[temp]) {
            return false;
        }
        else{
            obj[temp]--;
            if(obj[temp]<0) return false;
        }
    }
    return true;
};
