class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(value) {
      this.queue.push(value);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.queue.shift();
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.queue[0];
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    getSize() {
      return this.queue.length;
    }
  }
  
  // Usage example
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.dequeue()); // Output: 1 (Remove and return the first element)
  console.log(queue.peek()); // Output: 2 (Return the first element without removing it)
  console.log(queue.isEmpty()); // Output: false (Check if the queue is empty)
  console.log(queue.getSize()); // Output: 2 (Get the size of the queue)
  