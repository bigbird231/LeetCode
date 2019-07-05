//LeetCode第二题，两数相加
(function(){
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    /**
     * Definition for singly-linked list.
     * function ListNode(val) {
     *     this.val = val;
     *     this.next = null;
     * }
     */
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    //runtime:208ms,memory:37.9MB
    //思路：按位字符串相加，大于10则进一，需要处理好头尾的各个条件判断
    var addTwoNumbers = function(l1, l2) {
        let firstNode,currNode,lastNode,counter,l3,digit;
        //初始化
        digit=l1.val+l2.val;
        if(digit<10){
            counter=0;
        }else{
            counter=1;
            digit-=10;
        }
        firstNode=new ListNode(digit);
        lastNode=firstNode;
        //每一轮算的是next的值
        while(l1.next!==null && l2.next!==null){
            l1=l1.next;
            l2=l2.next;
            digit=l1.val+l2.val+counter;
            if(digit<10){
                counter=0;
                currNode=new ListNode(digit);
            }else{
                counter=1;
                currNode=new ListNode(digit-10);
            }
            lastNode.next=currNode;
            lastNode=currNode;
        }
        //两个长度不一样
        if(l1.next!==null){
            l3=l1.next;
        }else if(l2.next!==null){
            l3=l2.next;
        }
        //l3是next
        if(l3!==undefined){
            //每一轮算当前Node
            while(l3.next!==null){
                digit=l3.val+counter;
                if(digit<10){
                    counter=0;
                    currNode=new ListNode(digit);
                }else{
                    counter=1;
                    currNode=new ListNode(digit-10);
                }
                lastNode.next=currNode;
                lastNode=currNode;
                l3=l3.next;
            }
            //tail
            digit=l3.val+counter;
            if(digit<10){
                currNode=new ListNode(digit);
            }else{
                currNode=new ListNode(digit-10);
                currNode.next=new ListNode(1);
            }
            lastNode.next=currNode;
        }else{
            if(counter===1){
                lastNode.next=new ListNode(1);
            }
        }

        return firstNode;
    };


    //[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
    //[5,6,4]
    function arrayToListNode(arr){
        let currNode,lastNode;
        for(let i=arr.length-1;i>=0;i--){
            currNode=new ListNode(arr[i]);
            if(lastNode!==undefined){
                currNode.next=lastNode;
            }
            lastNode=currNode;
        }
        return currNode;
    }
    let arg1,arg2;
    //arg1=[2,4,3],arg2=[5,6,4];
    //arg1=[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],arg2=[5,6,4];
    arg1=[5],arg2=[5];
    console.log(addTwoNumbers(arrayToListNode(arg1),arrayToListNode(arg2)));



    //runtime:204ms,memory:39MB
    //思路：第一次看题的时候，没注意输入是ListNode，
    //所以写了一个数组解题的方法，本质上还是按位字符串相加，大于10则进一。
    var addTwoNumbers1 = function(l1, l2) {
        //
        function listNodeToArray(node){
            let arr=[];
            while(node.next){
                arr.push(node.val);
                node=node.next;
            }
            arr.push(node.val);
            return arr;
        }
        //
        function arrayToListNode(arr){
            let currNode,lastNode;
            for(let i=arr.length-1;i>=0;i--){
                currNode=new ListNode(arr[i]);
                if(lastNode!==undefined){
                    currNode.next=lastNode;
                }
                lastNode=currNode;
            }
            return currNode;
        }
        l1=listNodeToArray(l1);
        l2=listNodeToArray(l2);
        let input,result,i,counter;
        result=[];
        counter=0;
        if(l1.length>l2.length){
            input=[l1,l2];
        }else{
            input=[l2,l1];
        }
        for(i=0;i<input[1].length;i++){
            let bit=l1[i]+l2[i]+counter;
            counter=0;
            if(bit<10){
                result.push(bit);
            }else{
                counter=1;
                result.push(bit-10);
            }
        }
        if(counter===0){
            result.push(...(input[0].slice(i)));
        }else{
            for(;i<input[0].length;i++){
                let bit=input[0][i]+counter;
                counter=0;
                if(bit<10){
                    result.push(bit);
                }else{
                    counter=1;
                    result.push(bit-10);
                }
            }
            if(counter===1){
                result.push(1);
            }
        }
        result=arrayToListNode(result);
        return result;
    };
})();