//第五题，最长回文字符串
(function(){
    /**
     * @param {string} s
     * @return {string}
     */
    //思路：n^2暴力求解
    //时间超出限制，解题失败
    var longestPalindrome1 = function(s) {
        let max="";
        //判断一个字符串是否为回文
        function isPali(str){
            let t=[];
            for(let i=str.length-1;i>=0;i--){
                t.push(str[i]);
            }
            if(t.join("")===str){
                return true;
            }else{
                return false;
            }
        }

        //n^2循环，求出每一个可能的子字符串
        for(let i=0;i<s.length;i++){
            for(let j=i+1;j<=s.length;j++){
                let sub=s.substring(i,j);
                if(isPali(sub)){
                    if(sub.length>max.length){
                        max=sub;
                    }
                }
            }
        }
        return max;
    };

    //676ms,35.8MB
    //思路：左右保持两个队列比较回文，发现不是回文就跳过
    var longestPalindrome = function(s) {
        let max=s[0] || "";
        for(let i=0;i<s.length;i++){
            let j=s.length-1;
            let k=i;
            let flag=false;
            while(j>k){
                if(s[j]===s[k]){
                    if(flag===false){
                        flag=j;
                    }
                    k++;
                }else{
                    j=flag || j;
                    flag=false;
                    k=i;
                }
                j--;
            }
            if(flag){
                let sub=s.substring(i,flag+1);
                if(max.length<sub.length){
                    max=sub;
                }
            }
        }
        return max;
    };

    //console.log(longestPalindrome("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
    console.log(longestPalindrome("a"));
})();