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



function length (){
    return this.top;
}


function clear(){
    delete this.dataStore
    this.dataStore =[];
    this.top =0;

}
function mulBase (num,base){
    var s=new Stack();
    do{
        s.push(num % base)
        num =Math.floor(num/=base);
    }
    while(num>0)
    var converted ='';
    while (s.length()>0){
        converted+=s.pop();
    }
    return converted
}


console.log(mulBase(125,2));
console.log(mulBase(125,8));