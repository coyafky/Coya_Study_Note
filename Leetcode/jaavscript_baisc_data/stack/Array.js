function Stack(){
    this.size =0;//size： 栈的数据长度，当栈新增加(push)一个数据,时，size长度加1，当栈弹出(pop)一个数据，size长度减1。
    this.storage={};// storage: 存储栈的数据，使用对象作为栈数据的集合；
}


// push(data)方法需要具备以下两个功能：
// 1.每次增加一个数据，我们希望增加栈的数据长度；
// 2.每次增加一个数据，我们希望将此数据加在栈的顶端。
Stack.prototype.push =function(data){
    let size=this.size++;

    this.storage[size]=data;
}

// push(data)方法之后就是pop()方法，针对pop()的设计思想是：

// 1.通过栈的当前的长度获取栈顶数据；
// 2.删除第一步获得的栈顶数据；
// 3.栈长度size减1；
// 4.返回弹出栈的数据。

Stack.prototype.pop =function(){
    let size=this.size;
    let deleteddata;
    if(size){
        deleteddata=this.storage[size];
        delete this.storage[size];
        this.size--;
        return deleteddata;
    }
}

  //创建一个数组来模拟堆栈
  var a=new Array();
  console.log(a);
  //push: 在数组的末尾添加一个或更多元素，并返回新的长度
  console.log("入栈");
  a.push(1)
  console.log(a);//----->1
  a.push(2);
  console.log(a);//----->1,2
  a.push(3);
  console.log(a);//----->1,2,3
  a.push(4);
  console.log(a);//----->1,2,3,4
  console.log("出栈，后进先出");
  console.log(a);
  //pop：从数组中把最后一个元素删除，并返回这个元素的值
  a.pop();//----->4
  console.log(a);
  a.pop();//----->3
  console.log(a);
  a.pop();//----->2
  console.log(a);
  a.pop();//----->1
  console.log(a);