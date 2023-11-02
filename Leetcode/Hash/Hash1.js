class HashTable {
    // 构造函数，初始化哈希表
    constructor() {
      this.table = new Array(127); // 初始化存储空间为长度为127的数组
      this.size = 0; // 初始化哈希表的大小为0
    }
  
    // 哈希函数，返回键在哈希表中的索引
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.table.length; // 返回哈希值模哈希表长度的结果，保证索引在哈希表长度范围内
    }
  
    // set方法，向哈希表中添加键值对
    set(key, value) {
      const index = this._hash(key); // 计算键的哈希值
      // 判断该索引位置是否已经有值
      if (this.table[index]) {
        // 如果有值，遍历该索引位置的数组，查看是否已经存在相同的键
        for (let i = 0; i < this.table[index].length; i++) {
          // 如果存在相同的键，更新对应的值
          if (this.table[index][i][0] === key) {
            this.table[index][i][1] = value;
            return;
          }
        }
        // 如果不存在相同的键，将键值对添加到该索引位置的数组
        this.table[index].push([key, value]);
      } else {
        // 如果该索引位置没有值，初始化为一个数组，并将键值对添加到数组
        this.table[index] = [];
        this.table[index].push([key, value]);
      }
      this.size++; // 哈希表大小加1
    }
  
    // get方法，通过键从哈希表中获取值
    get(key) {
      const index = this._hash(key); // 计算键的哈希值
      // 判断该索引位置是否有值
      if (this.table[index]) {
        // 如果有值，遍历该索引位置的数组，查找对应的键值对
        for (let i = 0; i < this.table.length; i++) {
          // 如果找到对应的键值对，返回对应的值
          if (this.table[index][i][0] === key) {
            return this.table[index][i][1];
          }
        }
      }
      // 如果没有找到对应的键值对，返回undefined
      return undefined;
    }
  
    // remove方法，从哈希表中删除一个键值对
    remove(key) {
      const index = this._hash(key); // 计算键的哈希值
      // 判断该索引位置是否有值，并且长度大于0
      if (this.table[index] && this.table[index].length) {
        // 如果有值，遍历该索引位置的数组，查找对应的键值对
        for (let i = 0; i < this.table.length; i++) {
          // 如果找到对应的键值对，删除该键值对，并减小哈希表的大小
          if (this.table[index][i][0] === key) {
            this.table[index].splice(i, 1);
            this.size--;
            return true;
          }
        }
      } else {
        // 如果没有找到对应的键值对，返回false
        return false;
      }
    }
  
    // display方法，显示哈希表中的所有键值对
    display() {
      this.table.forEach((values, index) => {
        const chainedValues = values.map(
          ([key, value]) => `[ ${key}: ${value} ]`
        );
        console.log(`${index}: ${chainedValues}`);
      });
    }
  }