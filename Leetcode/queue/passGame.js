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

function passGame(namelist , number) {
        const queue =new Queue();
        for (Name of namelist){
            queue.enqueue(Name);
        }
        while(queue.size>1){
            for(let i =0; i<number-1;i++){
                queue.enqueue(queue.dequeue());
            }
            queue.dequeue();
        }

        const endName =queue.front();
        return namelist.indexOf(endName);

}

const names = ["lily", "lucy", "tom", "tony", "jack"];
const targetIndex = passGame(names, 4);
console.log("击鼓传花", names[targetIndex]); //--> lily