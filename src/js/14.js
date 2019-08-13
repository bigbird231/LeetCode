//14题，最长的字符串前缀
(()=>{
    /**
     * @param {string[]} strs
     * @return {string}
     */
    //92ms,36.3MB
    var longestCommonPrefix = function(strs) {
        if(strs.length===0 || strs[0]===""){
            return "";
        }
        let common="";
        let flag=true;
        for(let i=0;i<strs[0].length;i++){
            if(!flag){
                break;
            }
            common+=strs[0][i];
            for(let j of strs){
                if(i>=j.length || common[i]!==j[i]){
                    common=common.substring(0,i);
                    flag=false;
                    break;
                }
            }
        }
        return common;
    };

    console.log(longestCommonPrefix(["flower","flow","flight"]));
    console.log(longestCommonPrefix(["dog","racecar","car"]));
    console.log(longestCommonPrefix(["aa","a"]));
})();