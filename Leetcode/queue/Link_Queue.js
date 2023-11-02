class Node {
    constructor(value){
        this.value=value;
        this.next =null;
    }
}

class LinkedQueue{
    constructor(){
        this.front = null;
        this.rear =null;
        this.size =0;
    }
    enqueue(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.front = newNode;
            this.rear = newNode;
        }
        else{
            this.rear.next = newNode;
            this.rear= newNode;
        }

        this.size++;
    }
    dequeue(){
        if(this.isEmpty()){
            return null;
        }

        const dequeuedValue = this.front.value;
        if(this.front === this.rear){
            this.rear=null;
        }

        this.front = this .front.next;

        this.size--;

        return dequeuedValue;

    }

    peek(){
        return this.front?this.front.value:null;
    }
    isEmpty(){
        return this.size === 0;
    }

    getSize (){
        return this.size;
    }
}
const queue = new LinkedQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.isEmpty()); // Output: false
console.log(queue.getSize()); // Output: 2

// 创建一个链表