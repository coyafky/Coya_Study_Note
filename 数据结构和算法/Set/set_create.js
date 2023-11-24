// - `add(value)` 向集合添加一个新的项。
// - `remove(value)` 从集合移除一个值。
// - `has(value)` 如果值在集合中，返回 `true`，否则返回` false`。
// - `clear()` 移除集合中的所有项。
// - `size()` 返回集合所包含元素的数量。与数组的 `length` 属性类似。
// - `values()` 返回一个包含集合中所有值的数组。

class Set{
    constructor() {
        this.items ={};
    }

    has(value){
        return this.items.hasOwnProperty(value);
    }

    add(value){
        if(this.has(value)){
            return false;
        }
        this.items[value] = value;
        return true;
    }

    remove (value){
        if(!this.has(value)){
            return false
        }
        delete this.items[value];
    }

    clear(){
        this.items ={};

    }

    size(){
        return Object.keys(this.items).length
    }

    values(){
        return Object.keys(this.items)
    }

    // 实现并集和交集

    
    
}