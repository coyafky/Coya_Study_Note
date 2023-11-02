class Queue{
    constructor(){
        this.items=[];
    }

    enqueue (items){
        this.items.push(items)
    }

    dequeue (){
        return this.items.shift();
    }
    front(){
        return this.items[0];
    }
    isEmpty(){
        return this.items.length===0;
    }
    size(){
        return this.items.length;
    }

    toString (){
        let result ='';
        for(let item of this.items){
            result+=item+"";
        }
        return result;
    }

}

const queue = new Queue();

// enqueue() 测试
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.enqueue("d");
console.log(queue.items); //--> ["a", "b", "c", "d"]

// dequeue() 测试
queue.dequeue();
queue.dequeue();
console.log(queue.items); //--> ["c", "d"]

// front() 测试
console.log(queue.front()); //--> c

// isEmpty() 测试
console.log(queue.isEmpty()); //--> false

// size() 测试
console.log(queue.size()); //--> 2

// toString() 测试
console.log(queue.toString()); //--> c d