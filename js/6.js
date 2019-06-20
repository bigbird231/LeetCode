//第六题，Z字形变换
(function(){
    /**
     * @param {string} s
     * @param {number} numRows
     * @return {string}
     */
    //思路：题目本身具有诱导性，会引导读者去纵向排列，其实横向排列才能更快的写出原始的解题代码
    /*
     * L E E T
     * 0 0 C 0
     * 0 O 0 0
     * D E I S
     * 0 0 H 0
     * 0 I 0 0
     * R I N G
     */
    //184ms,49.3MB
    var convert = function(s, numRows) {
        //输入判断
        if(numRows>=s.length || numRows===1){
            return s;
        }
        //1-向右插入；0-向左插入
        let direct=1;
        //行内索引
        let row=0;
        //Z排列
        let zArr=[];
        //行内数组
        let currArr=[];
        //初始化
        zArr.push(currArr);
        //一次循环生成横向Z排列
        for(let i=0;i<s.length;i++){
            if(direct===1){
                currArr[row]=s[i];
                row++;
                //判断结尾
                if(row===numRows){
                    currArr=[];
                    zArr.push(currArr);
                    direct=0;
                    row=numRows-2;
                    if(row<=0){
                        direct=1;
                        row=0;
                    }
                }
            }else if(direct===0){
                currArr[row]=s[i];
                row--;
                currArr=[];
                zArr.push(currArr);
                //判断结尾
                if(row===0){
                    direct=1;
                }
            }
        }
        console.log(zArr);
        //纵向读取Z排列
        let result="";
        for(let i=0;i<numRows;i++){
            for(let j=0;j<zArr.length;j++){
                if(zArr[j][i]!==undefined){
                    result+=zArr[j][i];
                }
            }
        }
        console.log(result);
        return result;
    };

    convert("LEETCODEISHIRING",3);
    //convert("AB",1);
    //convert("ABCD",2);
})();