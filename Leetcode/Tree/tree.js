class TreeNode{
    constructor(data,parentSub){
        this.data=data;
        this.parent=parentSub;
    }
}

class Tree{
     constructor(){
        this.data =[];
     }
     treeDepth(){
        if(this.data.filter(Boolean).length ===0 ){
            return 0;
        }
        let lastChild = Math.max.apply(
            null,
            this.data.map(node=>node&&node.parent),
        );
        lastChild = this.data[lastChild];
        let depth =1;
        while(~lastChild.parent){
            lastChild =this.data[lastChild.parent];
            depth++;
        }
     }
     insertChild(node){
        if(this.data[0]&&!this.data[node.parent]){
            return false;
        }

        for (let i=0; i<this.data.length;i++){
            if(this.data[i]===null){
                this.data[i]=node;
                return true;
            }
        }
        this.data.push(node);
        return true;
     }
     deleteChild(node){
        const nodeSub = this.data.indexOf(node);
        if(nodeSub!==-1){
            this.data[nodeSub]=null;
            const needDels = [nodeSub];
            for(let i=0,n;i<this.data.length;i++){
                n=this.data[i];
                if(n&&needDels.indexOf(n.parent)!==-1){
                    this.data[i]=null;
                    needDels.push[i]
                }
            }
            return true
        }
        return false
     }
}
// 初始化树，结点
const tree = new Tree();
const A = new TreeNode('A', -1);
const B = new TreeNode('B', 0);
const C = new TreeNode('C', 0);
const D = new TreeNode('D', 1);
const E = new TreeNode('E', 2);
const F = new TreeNode('F', 2);
const G = new TreeNode('G', 3);
const H = new TreeNode('H', 3);
const I = new TreeNode('I', 3);
const J = new TreeNode('J', 4);
const K = new TreeNode('K', 9);
const L = new TreeNode('L', 9);
const M = new TreeNode('M', 9);

// 插入结点
tree.insertChild(A);
tree.insertChild(B);
tree.insertChild(C);
tree.insertChild(D);
tree.insertChild(E);
tree.insertChild(F);
tree.insertChild(G);
tree.insertChild(H);
tree.insertChild(I);
tree.insertChild(J);
tree.insertChild(K);
tree.insertChild(L);

// 测试
tree.deleteChild(M); // false 结点不存在树内
tree.deleteChild(D); // true
tree.treeDepth(); // 5
tree.deleteChild(J); // true
tree.treeDepth(); // 3
tree.insertChild(J);
tree.treeDepth(); // 4
