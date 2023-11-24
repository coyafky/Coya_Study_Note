class Nodec {
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
// 二叉树的基本操作
// insert（key）向树中插入一个节点
// search(key) 通过在树中查找一个键（key） 如果节点存在就return true 如果不存在就return false
// `preOrderTraverse` 通过先序遍历方式遍历所有节点

    // insert  使用递归的方式完成
    insert(key){
        const newNode = new Node(key);
        // 插入前要判断节点是否为空
        //
        if(this.root = null){
            this.root = newNode
        }
        else{
            this.insert(this.root,newNode);
        }
    }
    // 递归解法
    search(key){
        return this.search(this.root,key)
    }

    searchNode(node,key){
        if(node === null){
            return false;
        }

        if(key<node.key){
            return this.searchNode(node.left,key)
        }
        else if(key>node.key){
            return this.searchNode(node.right,key)
        }else{
            return true;
        }
    }
    // 通过while循环来实现

   search2(key){
    let node = this.root ;
    while(node!== null){
        if(key<node.key){
            node=node.left
        }
        else if(key>node.key){
            node = node.right;
        }
        else{
            return true
        }
    }
    
    return false
   }

   // `preOrderTraverse` 通过先序遍历方式遍历所有节点

   PreOrderTraversal(){
    const result =[];
    this.PreOrderTraversalNode(this.root,result)
    return result;
   }

   PreOrderTraversalNode(node,result){
    if(node === null){
        return result;
    }
    result.push(node.key);
    this.PreOrderTraversalNode(node.left,result);
    this.PreOrderTraversalNode(node.right,result)
   }

   // 中序遍历
   inorderTraversal() {
    const result = [];
    this.inorderTraversalNode(this.root, result);
    return result;
  }
  inorderTraversalNode(node,result){
    if(ndoe === null){
        return result;
    }
    this.inorderTraversalNode(node.left,result);
    result.push(node.key)
    this.inorderTraversalNode(node.right,result)
  }

  // 后序遍历
  postorderTraversal() {
    const result = [];
    this.postorderTraversalNode(this.root, result);
    return result;
  }
  
  postorderTraversalNode(node, result) {
    if (node === null) return result;
    this.postorderTraversalNode(node.left, result);
    this.postorderTraversalNode(node.right, result);
    result.push(node.key);
  }

  // 查找数据 查找最大最小值

  min(){
    if(!this.root){
        return null
    }
    let node = this.root 
    while(node.left!==null){
        node = node.left
    }
    return node.key
  }

  max(){
    if(!this.root){
        return null
    }
    let node = this.root;
    while(node.right!==null){
        node = node.right
    }
    return node.key
  }

  // 删除数据

  

}


