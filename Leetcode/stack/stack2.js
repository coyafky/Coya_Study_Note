class Stack {
    constructor(){
        this.items =[];
    }
    push(item){
        this.items.push(item);//数组的push方法
    }

    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];

    }
    clear (){
        this.items=[];
    }
    isEmpty(){
        return this.items.length===0;
    }
    size(){
        return this.items.length;
    }
}

const stack = new Stack()
stack.push('c++');
stack.push('swift');
stack.push('python');
stack.push('javascript');
console.log(stack.isEmpty()); // false
console.log(stack.size());    // 4
console.log(stack.peek());    // javascript
const removedItem = stack.pop();
console.log(removedItem);     // javascript
console.log(stack.peek());    // python
stack.clear();
console.log(stack.isEmpty()); // true
console.log(stack.size());    // 0
 