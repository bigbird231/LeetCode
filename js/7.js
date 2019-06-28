//第七题
(()=>{
    /**
     * @param {number} x
     * @return {number}
     */
    //112ms,35.6MB
    //利用一个栈结构，直接反转
    var reverse = function(x) {
        x=x.toString();
        if(x.length===1){
            return x;
        }
        let str,reverseStr,result;
        if(x[0]==="-"){
            result="-";
            str=x.slice(1);
        }else{
            result="";
            str=x;
        }
        reverseStr="";
        let i=str.length-1;
        //判断0位
        for(;i>=0;i--){
            if(str[i]==="0"){
                continue;
            }else{
                break;
            }
        }
        //拼接有效位
        for(;i>=0;i--){
            reverseStr+=str[i];
        }
        result+=reverseStr;
        let max=2147483647;
        let min=-2147483648;
        result=parseInt(result);
        if(result>max || result<min){
            result=0;
        }
        return result;
    };

    //1534236469,901000,-0?
    console.log(reverse(1534236469));
})();