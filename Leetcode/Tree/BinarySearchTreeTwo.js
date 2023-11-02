class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;

    }
}

function insertNode ( root, value){
    // 节点空-创造一个新节点
    if(root === null){
        return new Node(value);
    }
    // 不是空
    if(value < root.value){
        // 是在左子树
        root.left = insertNode(root.left, value);
    }else if(value > root.value){
        // 是在右子树
        root.right = insertNode(root.right, value);
    }
    // 如果出现在相等的情况逻辑该怎么处理
    return root;
}

// 遍历二叉搜索树

// 中序遍历
function inOrderTraverse (root, result =[]){
    if(root !== null){
        inOrderTraverse(root.left);
        result.push(root.value);
        inOrderTraverse(root.right);
    }
    return result;
}

// 先序遍历

function preOrderTraverse (root, result =[]){
    if(root !== null){
        result.push(root.value);
        preOrderTraverse(root.left);
        preOrderTraverse(root.right);
    }
    return result;
}

// 后序遍历

function postOrderTraverse (root, result =[]){
    if(root !== null){
        postOrderTraverse(root.left);
        postOrderTraverse(root.right);
        result.push(root.value);
    }
    
    return result;
}


const bst = null;
bst = insertNode(bst, 5);
bst = insertNode(bst, 3);
bst = insertNode(bst, 7);
bst = insertNode(bst, 2);
bst = insertNode(bst, 4);
bst = insertNode(bst, 6);
bst = insertNode(bst, 8);

console.log('Inorder Traversal:', inorderTraversal(bst));
console.log('Preorder Traversal:', preorderTraversal(bst));
console.log('Postorder Traversal:', postorderTraversal(bst));