//第八题，字符串转整数
(()=>{
    /**
     * @param {string} str
     * @return {number}
     */
    //100ms,37MB
    //根据题目意思直接解题，没有过多的技巧。题干本身就提供了一份开发规格。
    var myAtoi = function(str) {
        let max=2147483647;
        let min=-2147483648;
        let beginFlag=false;
        let symbol="";
        let number="";
        for(let s of str){
            //左侧空字符
            if(!beginFlag && s===" "){
                continue;
            }
            //第一个非空字符
            if(!beginFlag && s!==" "){
                if(s==="-" || s==="+"){
                    //是加减号
                    symbol=s;
                }else{
                    //不是加减号
                    if(!Number.isNaN(parseInt(s))){
                        number+=s;
                    }else{
                        break;
                    }
                }
                beginFlag=true;
                continue;
            }
            //数字字符
            if(!Number.isNaN(parseInt(s))){
                number+=s;
            }else{
                //右侧非数字字符
                break;
            }
        }
        if(number===""){
            number=0;
        }else{
            number=symbol+number;
            number=parseInt(number);
            if(number>max){
                number=max;
            }else if(number<min){
                number=min;
            }
        }
        return number;
    };

    //104ms,35.7MB
    //正则表达式实现方式。取出字符串中数字部分，并判断数字前后的字符是否异常
    var myAtoi1=function(str){
        //正则
        let reg=/^\s*([\+\-]?\d+).*$/i;
        let result;
        let match=reg.exec(str);
        //匹配结果判断
        if(match!=null){
            result=parseInt(match[1]);
        }else{
            result=0;
        }
        //判断边界
        let max=2147483647;
        let min=-2147483648;
        if(result>max){
            result=max;
        }else if(result<min){
            result=min;
        }
        return result;
    };

    console.log(myAtoi1("42"));
    console.log(myAtoi1("  -42"));
    console.log(myAtoi1("abc 123"));
    console.log(myAtoi1("4193 with words"));
    console.log(myAtoi1("-91283472332"));
    console.log(myAtoi1(".1"));
    console.log(myAtoi1("- 234"));
    console.log(myAtoi1("3.14159"));
})();