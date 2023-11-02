function Stack(){
    this.dataStore =[];
    this.top=0;
    this.pop=pop;
    this.push=push;
    this.peek=peek;
    this.length =length;
    this.clear =clear;
}



function push (element){
    this.dataStore[this.top++] =element;

}

function pop(){
    return this.dataStore[--this.top];
}

function peek(){
    if(this.top >0){
        return this.dataStore[this.top-1];
    }
    else 
    return "Empty"
}

let stack =new Stack();
console.log(stack.peek());

stack.push('Apple');
stack.push('Banana');
stack.push('Pear');

//查看当前栈顶元素
console.log( stack.peek() );   
console.log( stack.pop() );     


function length (){
    return this.top;
}

console.log(stack.length());
stack.pop();
console.log(stack.length());

function clear(){
    delete this.dataStore
    this.dataStore =[];
    this.top =0;

}

stack.clear();
console.log(stack.length());
console.log(stack.peek());

