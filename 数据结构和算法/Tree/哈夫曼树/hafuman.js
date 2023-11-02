class HafumanNode{
    constructor(char ,freq,left,right){
        this.char = char;
        this.freq = freq;
        this.left = left;
        this.right = right;
    }
}

// 定义一个函数HufumanTree，用于构建哈夫曼树
function HufumanTree(chars,freqs){
    // 创建一个数组nodes，用于存储节点
    let nodes =[];
    // 遍历字符数组chars，创建节点，并将其加入数组nodes
    for(let i=0;i<chars.length;i++){
        nodes.push(new HafumanNode(chars[i],freqs[i],null,null));
    }
    // 当nodes数组中元素个数大于1时，循环执行
    while(nodes.length>1){
        // 对nodes数组进行排序，按照freq属性进行排序
        nodes.sort((a,b)=>a.freq-b.freq);
        // 从nodes数组中取出第一个元素，赋值给left
        let left = nodes.shift();
        // 从nodes数组中取出第二个元素，赋值给right
        let right = nodes.shift();
        // 创建一个新的节点，将left和right的属性值赋值给新节点，并将其加入数组nodes
        let node = new HafumanNode(null,left.freq+right.freq,left,right);
        nodes.push(node);
    }
    // 当nodes数组中元素个数等于1时，返回第一个元素
    return nodes[0];
}

// 定义一个函数printHuffmancode，用于打印哈夫曼编码
function printHuffmancode(node,prefix=''){
   // 如果node为空，则返回
   if(node===null){
    return 
   }
   // 如果node的char属性不为空，则打印prefix和node的char属性
   if(node.char!==null){
    console.log(prefix+node.char);
    
   }

   // 递归调用函数，打印node的left和right属性
   printHuffmancode(node.left,prefix+'0');
   printHuffmancode(node.right,prefix+'1');
}

// 定义一个字符数组chars，用于存储字符
let chars = ['a', 'b', 'c', 'd', 'e', 'f'];
// 定义一个频率数组freqs，用于存储频率
let freqs = [5, 9, 12, 13, 16, 45];

// 调用函数HufumanTree，构建哈夫曼树
let root = HufumanTree(chars,freqs);
// 调用函数printHuffmancode，打印哈夫曼编码
printHuffmancode(root);

// 0f
// 100c
// 101d
// 1100a
// 1101b
// 111et = HufumanTree(chars,freqs);
// 调用printHuffmancode函数，打印哈夫曼编码
