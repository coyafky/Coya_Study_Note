// 创建平衡树节点，需要高度和权重
// key是数据
class Node {
    constructor(key, value){
        this.value = value;
        this.left =null;
        this.right = null;
        this.height = 1;
    }

}

// AVL树

class AVLtree {
    constructor(){
        this.root = null;
    }


    // 获取节点高度

    getHeight(node){
        // 节点是空
        if(node == null){
            return 0;

        }

        return node.height;
    }

    // 更新节点高度
    updateHeight(node){
        if(node == null){
            return
        }
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

    }

    // 获取节点的平衡yingzi

    getBalanceFactor(node){
        if(node == null){
            return 0;
        }

        return this.getHeight(node.left) - this.getHeight(node.right);
    }
    // 左旋转

    

}