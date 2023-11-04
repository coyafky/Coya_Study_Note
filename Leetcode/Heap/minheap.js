class Minheap {
  constructor() {
    this.heap = [];
    // HEAP 是 使用数组来存储的
  }

  //  通过父母位置来获取左孩子节点位置

  //  通过父母节点位置获取右孩子节点位置{
  //  通过孩子节点还获取父母节点位置

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  // 通过父母节点位置获取右孩子节点位置{
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  // 根据孩子节点还获取父母节点位置

  //  通过左右子节点获取父节点位置

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  // 判断是否有左子节点
  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heap.length;
  }

  // 判断是否有右子节点
  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heap.length;
  }

  // 判断是否有父节点
  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  // 获取左子节点
  leftChild(parentIndex) {
    return this.heap[this.getLeftChildIndex(parentIndex)];
  }

  // 获取右子节点
  rightChild(parentIndex) {
    return this.heap[this.getRightChildIndex(parentIndex)];
  }

  // 获取父节点
  parent(childIndex) {
    return this.heap[this.getParentIndex(childIndex)];
  }

  swap(indexOne, indexTwo) {
    let temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  peek() {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }
    return this.heap[0];
  }

  poll() {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }
    let item = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
}
let heap = new Minheap();
heap.add(3);
heap.add(1);
heap.add(5);
console.log(heap.peek());  // 输出：1
console.log(heap.poll());  // 输出：1
console.log(heap.peek());  // 输出：3
