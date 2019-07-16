//第十题，正则表达式匹配
(()=>{
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    //3496ms,37.8MB
    //暴力遍历求解，在每次遇到*的时候，都进行递归，分解出*符号每一种可能的情况，匹配到一种则返回true
    var isMatch = function(s, p) {
        const COUNT_MATCH="*";
        const CHAR_MATCH=".";
        let result;
        /*
         * 字符串匹配方法
         * @params {int} i 字符串的起始索引
         * @params {string} m 正则字符串，单个字符
         */
        function match(i,m){
            let isMatch=true;
            if(s[i]===m || m===CHAR_MATCH){
                i++;
            }else{
                isMatch=false;
            }
            return {
                isMatch,
                si:i
            }
        }

        /*
         * 递归寻找模式
         * @params {int} si 字符串的起始索引
         * @params {int} pi 正则的起始索引
         */
        function recursive(si,pi){
            let matcher,isMatch=true;
            while(pi<p.length && isMatch){
                //获取matcher
                switch(p[pi+1]){
                    //遍历*
                    case COUNT_MATCH:
                        matcher=p[pi];
                        pi+=2;
                        //计算上限
                        let max=si;
                        while((s[max]===matcher || matcher===CHAR_MATCH) && max<s.length){
                            max++;
                        }
                        max-=si;
                        while(max>=0){
                            let sii=si+max;
                            let end=recursive(sii,pi);
                            if(end){
                                return true;
                            }
                            max--;
                        }
                        break;
                    default:
                        matcher=p[pi++];
                        ({isMatch,si}=match(si,matcher));
                        break;
                }
            }
            if(pi===p.length && si===s.length && isMatch){
                return true;
            }else{
                return false;
            }
        }
        result=recursive(0,0);
        return result;
    };

    //评论里的一个答案，112ms,36.7MB
    var isMatch1 = function(s, p) {
        var memo = new Map();
        var dp = function(i, j) {
            if(memo.has(i+""+j)) return memo.get(i+""+j);
            if(j === p.length) return i === s.length;
            var first = i < s.length && (p.charAt(j) === s.charAt(i) || p.charAt(j) === '.');
            if(j<=p.length-2 && p.charAt(j+1)==='*') {
                var ans = dp(i, j+2) || (first && dp(i+1,j));
            }
            else ans = first && dp(i+1, j+1);
            memo.set(i+""+j, ans);

            return ans;
        };
        return dp(0, 0);
    };

    //172ms,34.4MB
    //摸鱼实现方法
    var isMatch2 = function(s, p) {
        let pattern=new RegExp("^"+p+"$");
        return pattern.test(s);
    };

    //console.log(isMatch("aa","a"));
    //console.log(isMatch("aaa","a*"));
    //console.log(isMatch("ab",".*"));
    //console.log(isMatch("aab","c*a*b"));
    //console.log(isMatch("mississippi","mis*is*p*."));
    //console.log(isMatch("mississippi","mis*is*ip*."));
    //console.log(isMatch("aaa","a*aa"));
    //console.log(isMatch("aaa","a*aaa"));
    //console.log(isMatch("aaa","ab*a*c*a"));
    console.log(isMatch("ab",".*c"));
})();