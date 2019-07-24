//11题
(()=>{
    /**
     * @param {number[]} height
     * @return {number}
     */
    //解题思路：最大面积一定产生在两个最高的柱之间，如果不是，则从两个最高的柱依次向外部延伸
    var maxArea = function(height) {

    };

    //暴力求解法
    //1444ms,34.7MB
    var maxArea1 = function(height) {
        let max=0;
        for(let i=0;i<height.length;i++){
            for(let j=i+1;j<height.length;j++){
                let area=(j-i)*(Math.min(height[i],height[j]));
                if(max<area){
                    max=area;
                }
            }
        }
        return max;
    };

    console.log(maxArea1([1,8,6,2,5,4,8,3,7]));
})();