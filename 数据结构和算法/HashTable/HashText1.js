class Hashtable{
    constructor(){
        this.table = new Array(10);
        this.size =0;
    }
    _setKey(key){
        return  key%10;
    }


    insert(value){
        const index = this._setKey(value);
        this.table[index] = value;
        this.size++; 
    }

    get(key){
        const target = this._setKey(key);
        return this.table[target];
    }

    search(value){
        const index = this._setKey(value);
        if(this.table[index] === value){
            console.log("这个值被在index找到",index);
            
        }
        else{
            console.log("这个值没有被找到");
        }

    }
    delete(key){
        const index = this._setKey(key);
        if(this.table[index]){
            this.table[index] = [];
            this.size--;
            return true;
        }else{
            return false;
        }
    }
}


const hashExample = new Hashtable();

hashExample.insert(100); 
hashExample.insert(87); 
hashExample.insert(86); 
hashExample.insert(12); 
hashExample.insert(9); 
  
  
console.log(hashExample.table); // -> shows the hash table 
  
// search 
hashExample.search(87); // found 
hashExample.search(10); // not found 
  
// delete 
hashExample.delete(12); 
  
// showing table after deletion 
console.log(hashExample.table); 


// [ 100, <1 empty item>, 12, <3 empty items>, 86, 87, <1 empty item>, 9 ]
// 这个值被在index找到 7
// 这个值没有被找到
// [ 100, <1 empty item>, [], <3 empty items>, 86, 87, <1 empty item>, 9 ]