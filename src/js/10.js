//第十题，正则表达式匹配
(()=>{
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    //不能倒序遍历，根据贪婪搜索的原则，.*会判断错误，并且题目隐含要求实现非贪婪模式
    var isMatch = function(s, p) {
        const COUNT_MATCH="*";
        const CHAR_MATCH=".";
        let pIndex=0,sIndex=0;
        let matcher,result=true;
        //具体的匹配方法
        function match(i,m,isCount){
            let result=true;
            if(isCount){
                //*匹配
                let char=m[0];
                let j=i;
                if(char===CHAR_MATCH){
                    i=s.length;
                }else{
                    if(s[i]===char){
                        while(s[i]===char){
                            i++
                        }
                    }
                }
                if(i!==j && i-j<m.length-1){
                    result=false;
                }
            }else{
                //单字符匹配
                if(m===CHAR_MATCH){
                    i++;
                }else{
                    if(s[i++]!==m){
                        result=false;
                    }
                }
            }
            return {
                result,
                sIndex:i
            }
        }

        //循环主体
        while(pIndex<p.length && result){
            //获取matcher
            switch(p[pIndex+1]){
                //存在*，题目虽然没有描述，但是测试用例里要求非贪婪模式
                case COUNT_MATCH:
                    matcher=p[pIndex]+p[pIndex+1];
                    pIndex+=2;
                    //非贪婪模式
                    while(p[pIndex]===matcher[0]){
                        matcher+=p[pIndex++];
                    }
                    ({result,sIndex}=match(sIndex,matcher,true));
                    break;
                default:
                    matcher=p[pIndex++];
                    ({result,sIndex}=match(sIndex,matcher));
                    break;
            }
        }
        //判断s是否被全部消耗
        if(sIndex<s.length){
            result=false;
        }
        return result;
    };

    console.log(isMatch("aa","a"));
    console.log(isMatch("aaa","a*"));
    console.log(isMatch("ab",".*"));
    console.log(isMatch("aab","c*a*b"));
    console.log(isMatch("mississippi","mis*is*p*."));
    console.log(isMatch("mississippi","mis*is*ip*."));
    console.log(isMatch("aaa","a*aa"));
    console.log(isMatch("aaa","a*aaa"));
    console.log(isMatch("aaa","ab*a*c*a"));
})();