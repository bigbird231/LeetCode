//15题，3数之和
(()=>{
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
        //暴力求解，超出时间限制
    var threeSum = function(nums) {
        let limit=3,temp=[],result=[];
        for(let i=0;i<=nums.length-limit;i++){
            for(let j=i+1;j<=nums.length-(limit-1);j++){
                for(let k=j+1;k<nums.length;k++){
                    if(nums[i]+nums[j]+nums[k]===0){
                        let repeat=false;
                        temp=[nums[i],nums[j],nums[k]].sort();
                        //去重判断
                        for(let l of result){
                            if(l.toString()===temp.toString()){
                                repeat=true;
                                break;
                            }
                        }
                        if(!repeat){
                            result.push(temp);
                        }
                    }
                }
            }
        }
        return result;
    };

    console.log(threeSum([-1, 0, 1, 2, -1, -4]));
})();