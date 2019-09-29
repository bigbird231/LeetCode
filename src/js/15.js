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

    //代码调优，先对输入数组nums进行排序，这样每次找到一个解之后就可以continue。仍然超出时间限制
    var threeSum1 = function(nums) {
        nums=nums.sort();
        //console.log(nums);
        //全部遍历
        let limit=3,temp=[],result=[];
        for(let i=0;i<=nums.length-limit;i++){
            //代码调优，跳过重复项
            if(i>0 && nums[i]===nums[i-1]){
                continue;
            }
            for(let j=i+1;j<=nums.length-(limit-1);j++){
                //代码调优，跳过重复项
                if(j>1 && j-1!==i && nums[j]===nums[j-1]){
                    continue;
                }
                for(let k=j+1;k<nums.length;k++){
                    //代码调优，跳过重复项
                    if(k>2 && k-1!==j && nums[k]===nums[k-1]){
                        continue;
                    }
                    //判断是否和为零
                    if(nums[i]+nums[j]+nums[k]===0){
                        temp=[nums[i],nums[j],nums[k]];
                        result.push(temp);
                        break;
                    }
                }
            }
        }
        return result;
    };

    //先排序，然后将三数和化为两数和问题，仍然超时
    var threeSum2 = function(nums) {
        let result=[],numberResult=[];
        nums=nums.sort();
        for(let i=0;i<nums.length-2;i++){
            //两数和问题
            for(let j=i+1;j<nums.length-1;j++){
                for(let k=j+1;k<nums.length;k++){
                    if(nums[j]+nums[k]===(-1*nums[i])){
                        //去重判断
                        let repeat=false;
                        let temp=nums[j]+"*"+nums[k];
                        for(let l of result){
                            if(l===temp){
                                repeat=true;
                                break;
                            }
                        }
                        if(!repeat){
                            result.push(temp);
                        }
                        break;
                    }
                }
            }
        }
        for(let i of result){
            let value=i.split("*");
            let item=[parseInt(value[0]),parseInt(value[1])];
            item.push(-1*(item[0]+item[1]));
            numberResult.push(item);
        }
        return numberResult;
    };

    console.log(threeSum2([-1, 0, 1, 2, -1, -4]));
    console.log(threeSum2([-2,0,0,0,1,1,2]));
})();