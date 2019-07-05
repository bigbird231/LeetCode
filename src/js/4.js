//第四题，寻找两个有序数组的中位数
(function(){
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    //168ms
    //思路：难点在于合并两个数组成为一个有序数组。合并之后判断数组的长度是偶数还是奇数，直接计算中位数
    var findMedianSortedArrays = function(nums1, nums2) {
        let nums=[];
        let i=0,j=0;
        //合并两个数组
        while(i<nums1.length && j<nums2.length){
            while(nums1[i]<nums2[j]){
                nums.push(nums1[i++]);
            }
            while(nums2[j]<=nums1[i]){
                nums.push(nums2[j++]);
            }
        }
        while(i<nums1.length){
            nums.push(nums1[i++]);
        }
        while(j<nums2.length){
            nums.push(nums2[j++]);
        }
        //--------------------
        if(nums.length%2===1){
            return nums[(nums.length-1)/2];
        }else{
            let index=nums.length/2;
            return (nums[index]+nums[index-1])/2;
        }
    };

    console.log(findMedianSortedArrays([1,2],[3,4]));
})();