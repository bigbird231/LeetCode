//13题，罗马数字转换为整数
(()=>{
    /**
     * @param {string} s
     * @return {number}
     */
    //268ms,42.1MB
    //解题思路：按照字典反向破解罗马数字。需要注意的是，每次遍历罗马数字的时候，要小心有的字典是2位字符串，如9=IX。而有的字典是1位字符串，如1=I。
    var romanToInt = function(s) {
        let dictionary=[
            [1000,"M"],
            [900,"CM"],
            [500,"D"],
            [400,"CD"],
            [100,"C"],
            [90,"XC"],
            [50,"L"],
            [40,"XL"],
            [10,"X"],
            [9,"IX"],
            [5,"V"],
            [4,"IV"],
            [1,"I"]
        ];
        let num=0;
        let flag=false;
        //遍历字符串
        for(let i=0;i<s.length;){
            //对每个字符，遍历字典进行罗马字符匹配
            for(let j of dictionary){
                //对每个罗马数字进行匹配，区分2个长度和1个长度的罗马字符
                for(let k=0;k<j[1].length;k++){
                    //首个罗马字符匹配失败
                    if(k===0 && j[1][k]!==s[i]){
                        break;
                    }
                    //单个罗马字符匹配到
                    if(j[1][k]===s[i]){
                        i++;
                        //整个罗马字符串匹配成功
                        if(k==j[1].length-1){
                            flag=true;
                            break;
                        }
                        continue;
                    }
                    //长度为二的罗马字符匹配失败
                    if(k>0 && j[1][k]!==s[i]){
                        i--;
                    }
                }
                //匹配成功
                if(flag){
                    num+=j[0];
                    flag=false;
                    break;
                }
            }
        }
        return num;
    };

    //224ms,39.4MB
    //解题思路：出现后面的罗马字符大于上一个罗马字符的情况时，加上再减去前者的2倍
    let romanToInt1=function(s){
        let dictionary=[
            [1000,"M"],
            [500,"D"],
            [100,"C"],
            [50,"L"],
            [10,"X"],
            [5,"V"],
            [1,"I"]
        ];
        let lastIndex=0;
        let num=0;
        for(let i of s){
            for(let j=0;j<dictionary.length;j++){
                if(i===dictionary[j][1]){
                    num+=dictionary[j][0];
                    if(j<lastIndex){
                        num-=2*dictionary[lastIndex][0];
                    }
                    lastIndex=j;
                    break;
                }
            }
        }
        return num;
    };

    console.log(romanToInt1("MCMXCIV"));
})();