//12题，整数转换罗马数字
(()=>{
    /**
     * @param {number} num
     * @return {string}
     */
    //236ms,42.2MB
    //解题思路：只要列出罗马数字与阿拉伯数字之间的对照关系表，然后从大到小遍历匹配即可解题。
    var intToRoman = function(num) {
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
        let romanNumber="";
        while(num>0){
            //console.log(num,"-------------------");
            for(let i of dictionary){
                if(num>=i[0]){
                    romanNumber+=i[1];
                    num-=i[0];
                    //console.log("Roman",i[0],num,romanNumber);
                    break;
                }
            }
        }
        return romanNumber;
    };

    console.log(intToRoman(1994));
})();