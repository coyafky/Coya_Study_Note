// JavaScript code for inserting element in skip list

// Class to implement node
class Node {
  constructor(key, level) {
    this.key = key;

    // Array to hold pointers to node of different level
    this.forward = new Array(level + 1).fill(null);
  }
}

// Class for Skip list
class SkipList {
  // Maximum level for this skip list
  MAXLVL;

  // P is the fraction of the nodes with level
  // i pointers also having level i+1 pointers
  P;

  // current level of skip list
  level;

  // pointer to header node
  header;

  constructor(MAXLVL, P) {
    this.MAXLVL = MAXLVL;
    this.P = P;
    this.level = 0;

    // create header node and initialize key to -1
    this.header = new Node(-1, MAXLVL);
  }

  // create random level for node
  randomLevel() {
    let r = Math.random();
    let lvl = 0;
    while (r < this.P && lvl < this.MAXLVL) {
      lvl++;
      r = Math.random();
    }
    return lvl;
  }

  // create new node
  createNode(key, level) {
    let n = new Node(key, level);
    return n;
  }

  // Insert given key in skip list
  insertElement(key) {
    let current = this.header;

    // create update array and initialize it
    let update = new Array(this.MAXLVL + 1).fill(null);

    /* start from highest level of skip list
            move the current pointer forward while key
            is greater than key of node next to current
            Otherwise inserted current in update and
            move one level down and continue search
        */
    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] != null && current.forward[i].key < key) {
        current = current.forward[i];
      }
      update[i] = current;
    }

    /* reached level 0 and forward pointer to
        right, which is desired position to
        insert key.
        */
    current = current.forward[0];

    /* if current is NULL that means we have reached
        to end of the level or current's key is not equal
        to key to insert that means we have to insert
        node between update[0] and current node */
    if (current == null || current.key != key) {
      // Generate a random level for node
      let rlevel = this.randomLevel();

      // If random level is greater than list's current
      // level (node with highest level inserted in
      // list so far), initialize update value with pointer
      // to header for further use
      if (rlevel > this.level) {
        for (let i = this.level + 1; i < rlevel + 1; i++) {
          update[i] = this.header;
        }

        // Update the list current level
        this.level = rlevel;
      }

      // create new node with random level generated
      let n = this.createNode(key, rlevel);

      // insert node by rearranging pointers
      for (let i = 0; i <= rlevel; i++) {
        n.forward[i] = update[i].forward[i];
        update[i].forward[i] = n;
      }
      console.log(`Successfully Inserted key ${key}`);
    }
  }

  // Display skip list level wise
  displayList() {
    console.log("\n*****Skip List*****");
    for (let i = 0; i <= this.level; i++) {
      let node = this.header.forward[i];
      console.log(`Level ${i}: `);
      while (node != null) {
        console.log(`${node.key} `);
        node = node.forward[i];
      }
      console.log("\n");
    }
  }
}

// Driver to test above code
let lst = new SkipList(3, 0.5);

lst.insertElement(3);
lst.insertElement(6);
lst.insertElement(7);
lst.insertElement(9);
lst.insertElement(12);
lst.insertElement(19);
lst.insertElement(17);
lst.insertElement(26);
lst.insertElement(21);
lst.insertElement(25);
lst.displayList();

// This code is contributed by ishankhandelwals.
