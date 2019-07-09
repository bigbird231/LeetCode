//第九题，回文数
(()=>{
    /**
     * @param {number} x
     * @return {boolean}
     */
    //316ms,46.3MB
    //普通解法，将数字转换为字符串，就转化为一个解回文字符串的问题
    var isPalindrome = function(x) {
        let str=x.toString();
        let backStr="";
        for(let i=str.length-1;i>=0;i--){
            backStr+=str[i];
        }
        if(str==backStr){
            return true;
        }else{
            return false;
        }
    };

    //进阶
    var isPalindromeAdvanced = function(x) {
        let backFowardX=0;
        let pow=0,i,tempX;
        if(x<0){
            return false;
        }
        for(i=1;;i++){
            pow=Math.pow(10,i);
            if(pow>x){
                i--;
                pow/=10;
                break;
            }
        }
        tempX=x;
        for(let j=1;i>=0;j++,i--){
            let jPow=Math.pow(10,j);
            backFowardX+=(tempX%jPow)/(jPow/10)*pow;
            pow/=10;
            tempX-=tempX%jPow;
        }
        console.log(backFowardX);
        if(backFowardX==x){
            return true;
        }else{
            return false;
        }
    };

    console.log(isPalindromeAdvanced(121));
})();