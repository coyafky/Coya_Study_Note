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


function ispalindriome(word){
    let s =new Stack();
    for(let i =0;i<word.length;i++){
        s.push(word[i]);

    }
    let rword ='';
    while(s.length()>0){
        rword+=s.pop();

    }

    if(word===rword){
        return true;
    }
    else{
        return false
    }
}
console.log( ispalindriome('level') )    // true
console.log(ispalindriome('1001') )     // true
console.log( ispalindriome('word') )   //flase  
