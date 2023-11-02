class Node{
    constructor (value){
        this.value = value ;
        this.next =null ;

    }
}
class LinkedStack{
    constructor(){
        this.top =null;
        this.size = 0;

    }

    push (value){
        const newNode = new Node (value);
        newNode.next= this.top;
        this.top = newNode ;
        this.size++;
    }

    pop(){
        if(!this.top){
            return null;
        }

        const poppedValue = this.top.value;

        this.top = this.top.next;
        this.size--;

        return poppedValue;
    }

    peek(){
        return this.top? this.top.value:null;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

}

const stack = new LinkedStack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.getSize());