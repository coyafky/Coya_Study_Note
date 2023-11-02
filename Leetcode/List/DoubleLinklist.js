// 先定义双相链表的结构

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.headrev = null;
  }
}

function InsertDOublyLinkedList(head, data) {
  const node = new Node(data);
  //   无插入节点就create
  if (head == null) {
    head = node;
    return head;
  } else {
    node.headrev = head;
    node.next = head.next;
    head.next.headrev = node;
    head.next = node;
  }
  return head;
}

function deleteNode(head, data) {
  if (head === null) {
    return null;
  }

  let current = head;
  while (current.data !== data) {
    current = current.next;
    if (current === head) {
      return head;
    }
  }

  if (current.headrev === current && current.next === current) {
    head = null;
  } else {
    current.headrev.next = current.next;
    current.next.headrev = current.headrev;

    if (current === head) {
      head = current.next;
    }
  }
  return head;
}
// Cmd + Shift +L 单个变量替换