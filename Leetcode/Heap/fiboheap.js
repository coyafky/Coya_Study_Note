class Node {
    constructor(key) {
      this.key = key;
      this.degree = 0;
      this.parent = null;
      this.child = null;
      this.mark = false;
      this.left = this;
      this.right = this;
    }
  }
  
  class FibonacciHeap {
    constructor() {
      this.min = null;
      this.rootList = null;
      this.nodeCount = 0;
    }
  
    insert(key) {
      let node = new Node(key);
      this.rootList = this.mergeLists(this.rootList, node);
      if (!this.min || node.key < this.min.key) {
        this.min = node;
      }
      this.nodeCount++;
    }
  
    mergeLists(a, b) {
      if (!a && !b) {
        return null;
      }
      if (!a) {
        return b;
      }
      if (!b) {
        return a;
      }
      if (a.key > b.key) {
        let temp = a;
        a = b;
        b = temp;
      }
      a.right = b.right;
      a.right.left = a;
      b.right = a;
      return a;
    }
  
    // Other operations like extractMin, decreaseKey, delete etc.
  }