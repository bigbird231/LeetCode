//LeetCode第一题，两数之和
(function(){
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    //runtime:176ms,memory:34.4MB
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