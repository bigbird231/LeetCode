//第三题，最长子字符串
(function(){
    /**
     * @param {string} s
     * @return {number}
     */
    //runtime:140ms,memory:37.8MB
    //思路：一次循环。依次向一个缓存数组中填入循环值，当遇到重复项时，就计算一次长度，
    //并把缓存数组中上一个重复项的索引及之前的项全部删掉。最终得到数组最长length值。耗费n的时间
    var lengthOfLongestSubstring = function(s) {
        let subStorage,lengthStorage;
        subStorage=[];
        lengthStorage=[];
        for(let i=0;i<s.length;i++){
            let index=subStorage.indexOf(s[i]);
            if(index>-1){
                lengthStorage.push(subStorage.length);
                subStorage.splice(0,index+1);
            }
            subStorage.push(s[i]);
        }
        lengthStorage.push(subStorage.length);
        let max=lengthStorage[0];
        for(let i=1;i<lengthStorage.length;i++){
            if(lengthStorage[i]>max){
                max=lengthStorage[i];
            }
        }
        return max || s.length;
    };

    //runtime:296ms,memory:63.5MB
    //思路：和前面那个方法是一样的，多加了一个标记，第一次编写调试用。
    var lengthOfLongestSubstring1 = function(s) {
        let subStorage,lengthStorage,historyStorage;
        subStorage=[];
        lengthStorage=[];
        historyStorage=[];
        for(let i=0;i<s.length;i++){
            let index=subStorage.indexOf(s[i]);
            if(index>-1){
                lengthStorage.push(subStorage.length);
                historyStorage.push(subStorage.join(","));
                subStorage.splice(0,index+1);
            }
            subStorage.push(s[i]);
        }
        lengthStorage.push(subStorage.length);
        historyStorage.push(subStorage.join(","));
        let max=lengthStorage[0];
        for(let i=1;i<lengthStorage.length;i++){
            if(lengthStorage[i]>max){
                max=lengthStorage[i];
            }
        }
        //console.log(lengthStorage,historyStorage);
        return max || s.length;
    };

    let param=" ";
    console.log(lengthOfLongestSubstring(param));
})();