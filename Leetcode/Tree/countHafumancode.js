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
  
  // 构建编码表
  function buildCodeTable(root) {
    const codeTable = {};
    const code = '';
  
    function traverse(node, code) {
      if (node.left) {
        traverse(node.left, code + '0');
      }
      if (node.right) {
        traverse(node.right, code + '1');
      }
      if (!node.left && !node.right) {
        codeTable[node.data] = code;
      }
    }
  
    traverse(root, code);
    return codeTable;
  }
  
  // 示例用法
  const data = ['a', 'b', 'c', 'd', 'e'];
  const freq = [4, 1, 1, 1, 1];
  
  const huffmanTree = buildHuffmanTree(data, freq);
  const codeTable = buildCodeTable(huffmanTree);
  
  console.log('Huffman Code Table:', codeTable); 
//    Huffman Code Table: { a: '0', b: '100', c: '101', d: '110', e: '111' }