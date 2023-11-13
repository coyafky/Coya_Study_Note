function get(key) {
    // 获取哈希表的存储数组
    const storage = this._storage;
  
    // 使用哈希函数计算 `key` 的哈希值
    const index = this._hash(key);
  
    // 获取哈希值对应的桶
    const bucket = storage[index];
  
    // 如果桶不存在，则返回 `null`
    if (!bucket) {
      return null;
    }
  
    // 遍历桶中的所有元素，找到与 `key` 相等的元素
    for (const entry of bucket) {
      if (entry.key === key) {
        return entry.value;
      }
    }
  
    // 未找到与 `key` 相等的元素，返回 `null`
    return null;
  }

  const map = new Map();
  map.set("a", 1);
  map.set("b", 2);
  
  const value = map.get("a");
  console.log(value); // 1