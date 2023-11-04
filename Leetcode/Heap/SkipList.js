class Node {
    constructor(key, value, level) {
      this.key = key;
      this.value = value;
      this.forward = new Array(level);
    }
  }
  
  class SkipList {
    constructor() {
      // 初始化头节点，level为16
      this.head = new Node(null, null, 16);
      this.level = 1;
    }
  
    // 随机生成level
    randomLevel() {
      let level = 1;
      while (Math.random() < 0.5 && level < 16) {
        level++;
      }
      return level;
    }
  
    // 插入节点
    insert(key, value) {
      // 随机生成level
      let level = this.randomLevel();
      // 如果level大于当前level，更新level
      if (level > this.level) {
        this.level = level;
      }
      // 创建新节点
      let newNode = new Node(key, value, level);
      // 当前节点
      let current = this.head;
      // 从当前节点开始，从高层向低层遍历
      for (let i = level - 1; i >= 0; i--) {
        // 如果当前节点有前向指针，且前向指针的key小于插入的key，则更新当前节点
        while (current.forward[i] && current.forward[i].key < key) {
          current = current.forward[i];
        }
        // 如果当前节点有前向指针，且前向指针的key等于插入的key，则将新节点插入到当前节点的前向指针上
        if (current.forward[i]) {
          let tmp = current.forward[i];
          current.forward[i] = newNode;
          newNode.forward[i] = tmp;
        } else {
          // 否则，将新节点插入到当前节点的前向指针上
          current.forward[i] = newNode;
        }
      }
    }
  
    // 查找节点
    find(key) {
      // 当前节点
      let current = this.head;
      // 从当前节点开始，从高层向低层遍历
      for (let i = this.level - 1; i >= 0; i--) {
        // 如果当前节点有前向指针，且前向指针的key小于查找的key，则更新当前节点
        while (current.forward[i] && current.forward[i].key < key) {
          current = current.forward[i];
        }
      }
      // 如果当前节点有前向指针，且前向指针的key等于查找的key，则返回当前节点的前向指针的value
      if (current.forward[0] && current.forward[0].key === key) {
        return current.forward[0].value;
      } else {
        return null;
      }
    }
  }