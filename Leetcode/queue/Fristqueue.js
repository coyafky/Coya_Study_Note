class Queue{
    constructor(){
        this.items=[];
    }
    enqueue(items){
       this.items.push(items); 
    }
    dequeue(){
        return this.items.shift();
    }
    front (){
        return this.items[0];
    }
    isEmpty(){
        return this.items.length===0;
    }
    size (){
        return this.items.length;
    }

    toString(){
        let result ='';
        for(let item of this.items){
            result+=item +" ";
        }

        return result;
    }


}

class QueueElement{
    constructor(element ,prioity){
        this.element=element;
        this.prioity=prioity;
    }
}

class Priority extends Queue{
    constructor(){
        super();
    }
     // enqueue(element, priority) 入队，将元素按优先级加入到队列中
     // 重写 enqueue()
    enqueue(element,prioity){
         // 根据传入的元素，创建 QueueElement 对象
        const queueElement = new QueueElement (element,prioity);

        // 判断队列是否为空
        if(this.isEmpty()){
            this.items.push(queueElement);
        }
        else{
             let added =false;
             for(let i =0;i<this.items.length;i++){
                if(queueElement.prioity<this.items[i].prioity)
               {
                this.items.splice(i,0,queueElement);
                added=true;
                break;
               }
               if(!added){
                this.items.push(queueElement);
               }
             }
        }
    }
    dequeue(){
        return super.dequeue();
    }
    front(){
        return super.front();
    }
    isEmpty(){
        return super.isEmpty();
    }
    size(){
        return super.size();
    }

    toString(){
        let result ="";
        for (let item of this.items){
            result+=item.element+'-'+item.prioity+" ";
        }

        return result;
    }


}

const priorityQueue = new Priority();
priorityQueue.enqueue("A", 10);
priorityQueue.enqueue("B", 15);
priorityQueue.enqueue("C", 11);
priorityQueue.enqueue("D", 20);
priorityQueue.enqueue("E", 18);
console.log(priorityQueue.items);
//--> output:
// QueueElement {element: "A", priority: 10}
// QueueElement {element: "C", priority: 11}
// QueueElement {element: "B", priority: 15}
// QueueElement {element: "E", priority: 18}
// QueueElement {element: "D", priority: 20}

// 出队 dequeue() 测试
priorityQueue.dequeue();
priorityQueue.dequeue();
console.log(priorityQueue.items);
//--> output:
// QueueElement {element: "B", priority: 15}
// QueueElement {element: "E", priority: 18}
// QueueElement {element: "D", priority: 20}

// isEmpty() 测试
console.log(priorityQueue.isEmpty()); //--> false

// size() 测试
console.log(priorityQueue.size()); //--> 3

// toString() 测试
console.log(priorityQueue.toString()); //--> B-15 E-18 D-20


