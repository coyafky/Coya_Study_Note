class Set {
    constructor() {
      this.items = {};
    }
  
    // has(value) 判断集合中是否存在 value 值，存在返回 true，否则返回 false
    has(value) {
      return this.items.hasOwnProperty(value);
    }
  
    // add(value) 往集合中添加 value
    add(value) {
      if (this.has(value)) return false;
      this.items[value] = value;
      return true;
    }
  
    // remove(value) 删除集合中指定的 value
    remove(value) {
      // 如果集合不存在该 value，返回 false
      if (!this.has(value)) return false;
      delete this.items[value];
    }
  
    // clear() 清空集合中所有 value
    clear() {
      this.items = {};
    }
  
    // size() 获取集合中的 value 个数
    size() {
      return Object.keys(this.items).length;
    }
  
    // values() 获取集合中所有的 value
    values() {
      return Object.keys(this.items);
    }
  }

  const set = new Set();

// add() 测试
set.add("abc");
set.add("abc");
set.add("123");
set.add("zxc");
console.log(set); //--> {items: {123: "123", abc: "abc", zxc: "zxc"}}

// has() 测试
console.log(set.has("123")); //--> true
console.log(set.has("456")); //--> false

// remove() 测试
set.remove("abc");
console.log(set); //--> {items: {123: "123", zxc: "zxc"}}

// size() 测试
console.log(set.size()); //--> 2

// values() 测试
console.log(set.values()); //--> ["123", "zxc"]

// clear() 测试
set.clear();
console.log(set.values()); //--> []
