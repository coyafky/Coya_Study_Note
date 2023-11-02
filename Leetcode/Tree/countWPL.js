// 定义霍夫曼树节点
class Node {
    constructor(data, freq) {
      this.data = data;
      this.freq = freq;
      this.left = null;
      this.right = null;
    }
  }
  
  // 构建霍夫曼树
  function buildHuffmanTree(data, freq) {
    const nodeList = [];
    for (let i = 0; i < data.length; i++) {
      nodeList.push(new Node(data[i], freq[i]));
    }
  
    while (nodeList.length > 1) {
      nodeList.sort((a, b) => a.freq - b.freq);
      const left = nodeList.shift();
      const right = nodeList.shift();
      const parent = new Node('$', left.freq + right.freq);
      parent.left = left;
      parent.right = right;
      nodeList.push(parent);
    }
  
    return nodeList[0];
  }
  
  // 计算霍夫曼树的带权路径长度（WPL）
  function calculateWPL(root, depth = 0) {
    if (!root.left && !root.right) {
      return root.freq * depth;
    }
    return calculateWPL(root.left, depth + 1) + calculateWPL(root.right, depth + 1);
  }
  
  // 示例用法
  const data = ['a', 'b', 'c', 'd', 'e'];
  const freq = [4, 1, 1, 1, 1];
  
  const huffmanTree = buildHuffmanTree(data, freq);
  const wpl = calculateWPL(huffmanTree);
  
  console.log('WPL:', wpl);