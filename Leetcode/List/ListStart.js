class LinkedList{
    length =0;//长度
    head =null;//指针

    //内部类
    Node =class{
        data;
        next =null;
        constructor(data){
            this.data =data;
        }
    };

    // append是在尾部添加新节点
    append(data){
        const newNode = new this.Node(data);
        if(this.length===0){
            this.head=newNode;
        }
        //头指针不为空->尾部添加
        else{
        let currentNode=this.head;
        //遍历到尾部
            while(currentNode.next!==null){
                currentNode=currentNode.next;
            }
        // 插入
        currentNode.next= newNode;
        }
        //记录节点个数
        this.length++;
    }

    //实现tostring 方法

    toString(){
        let currentNode = this.head;
        let result ='';// 定义空节点字符

        while (currentNode){
            result+=currentNode.data+"";
            currentNode =currentNode.next
        }
        return result;
    }

    // 指定位置插入节点

    insert (position,data){
        // position 新插入的节点
        // position =0 表示行插入后第一的节点

        //1.越界
        if(position<0||position>this.length){
            return false
        }
        //2
        const newNode = new this.Node(data);
        // 插入
        if(position ==0){
            newNode.next = this.head;
            this.head = newNode;

        }
        else{
            let currentNode = this.head;
            let previousNode = null;
            let index =0;
            while(index<position){
                previousNode =currentNode;
                currentNode =currentNode.next;

                index++;
            }
            newNode.next=currentNode;
            previousNode.next=newNode;
        }
        this.length++
        return newNode;

    }
    //1
   getData(position){
    if(position<0||position>=this.length){
        return null
    }
    let currentNode = this .head;
    let index= 0;
    while(index<position){
        currentNode=currentNode.next;
        index++;
    }
    return currentNode.data;
   }
//     indexOf(data) 返回指定 data 的 index，如果没有，返回 -1。


   indexOf(data){
    let currentNode = this.head;
    let index =0;
    while(currentNode){
        if(currentNode.data===data){
            return index;
        }
        currentNode=currentNode.next;
        index++;
    }
    return -1;
    }

    update(position,data){

        if(position<0||position>=this.length){
            return false;
        }

        let currentNode = this.head;
        let index =0;
        while(index<position){
            currentNode=currentNode.next;
            index++;
        }
        currentNode.data=data;

        return currentNode;
    }

    removeAt(position){
        if(position<0||position>=this.length){
            return null;
        }

        let currentNode = this.head;
        if (position ===0){
            this.head = this.head.next;
        }
        else{
            let previousNode = null;
            let index =0;
            while(index++<position){
                previousNode =currentNode;
                currentNode =currentNode.next;
            }
               // 巧妙之处，让上一节点的 next 指向到当前的节点的 next，相当于删除了当前节点。
            previousNode.next=currentNode.next

        }
        this.length-1;
        return currentNode;
    }
    remove(data) {
        this.removeAt(this.indexOf(data));
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }


   

}

const linkedList = new LinkedList();
// 测试 append 方法
linkedList.append("A");
linkedList.append("B");
linkedList.append("C");
console.log(linkedList);

console.log(linkedList.toString());// ABC

linkedList.insert(0, "123");
linkedList.insert(2, "456");
// console.log(linkedList.toString()); //--> 123 AA 456 BB CC  123A456BC

// 测试 getData 方法
console.log(linkedList.getData(0)); //--> 123
console.log(linkedList.getData(1)); //--> AA

// 测试 update 方法
linkedList.update(0, "12345");
console.log(linkedList.toString()); //--> 12345 AA 456 BB CC
linkedList.update(1, "54321");
console.log(linkedList.toString()); //--> 12345 54321 456 BB CC

// 测试 removeAt 方法
linkedList.removeAt(3);
console.log(linkedList.toString()); //--> 12345 54321 456 CC 1234554321456C

// 测试 remove 方法
linkedList.remove("CC");
console.log(linkedList.toString()); //--> 12345 54321 456
// 测试 isEmpty 方法
console.log(linkedList.isEmpty()); //--> false