// 定义二叉搜索树节点
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // 插入节点到二叉搜索树
  function insertNode(root, value) {
    if (root === null) {
      return new Node(value);
    }
  
    if (value < root.value) {
      root.left = insertNode(root.left, value);
    } else if (value > root.value) {
      root.right = insertNode(root.right, value);
    }
  
    return root;
  }
  
  // 查找二叉搜索树中的最小节点
  function findMinNode(root) {
    if (root === null) {
      return null;
    }
    while (root.left !== null) {
      root = root.left;
    }
    return root;
  }
  
  // 删除节点从二叉搜索树
  function deleteNode(root, value) {
    if (root === null) {
      return null;
    }
  
    if (value < root.value) {
      root.left = deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = deleteNode(root.right, value);
    } else {
      // 找到要删除的节点
  
      // 情况1: 要删除的节点没有子节点
      if (root.left === null && root.right === null) {
        root = null;
      }
      // 情况2: 要删除的节点只有一个子节点
      else if (root.left === null) {
        root = root.right;
      } else if (root.right === null) {
        root = root.left;
      }
      // 情况3: 要删除的节点有两个子节点
      else {
        const minRight = findMinNode(root.right);
        root.value = minRight.value;
        root.right = deleteNode(root.right, minRight.value);
      }
    }
  
    return root;
  }
  
  // 示例用法
  let bst = null;
  bst = insertNode(bst, 5);
  bst = insertNode(bst, 3);
  bst = insertNode(bst, 7);
  bst = insertNode(bst, 2);
  bst = insertNode(bst, 4);
  bst = insertNode(bst, 6);
  bst = insertNode(bst, 8);
  
  console.log('Before Deletion:', bst);
  
  bst = deleteNode(bst, 3);
  
  console.log('After Deletion:', bst);
  