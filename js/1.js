//LeetCode第一题，两数之和
(function(){
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    //runtime:176ms,memory:34.4MB
    //思路：暴力求解即可，n^2时间
    var twoSum1 = function(nums, target) {
        for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
                if(nums[i]+nums[j]===target){
                    return [i,j];
                }
            }
        }

    };

    //runtime:2524ms,memory:35.9MB
    //思路：用集合来做，第一次循环在map中存下每个值以及对应target-i的值，
    //第二次循环查看输入值中是否有target-i的值，即两个数组的重合项，有一个就行。
    //耗费n^2的时间。思路是不错的，但是语言本身对集合的调用太损耗性能，
    //执行结果反而不如数组循环暴力求解，这告诉我们在做算法题时不要使用语言内置的高级数据结构
    var twoSum2=function(nums, target) {
        let map=new Map();
        let i;
        for(i=0;i<nums.length;i++){
            map.set(i,target-nums[i]);
        }
        for(i--;i>=0;i--){
            for(let j of map.keys()){
                if(map.get(j)===nums[i]){
                    if(j!==i){
                        return [j,i];
                    }
                }
            }
        }
    };

})();