// 哈夫曼树的结构

class HafumanNode {
    constructor (weight, parent, left, right){
        this.weight = weight;
        this.left =left;
        this.parent=parent;
        this.right=right;
    }
}
// 叶子节点的创建


function createLeafNode(weight){
    const nodes = weight.map(weight=> new HafumanNode(weight,null,null,null));
    while(nodes.length>1){
        nodes.sort((a,b)=>a.weight-b.weight);
        const left = nodes.shift();
        const right = nodes.shift();
        const parent = new HafumanNode(left.weight+right.weight,null,left,right);
        left.parent = parent;
        nodes.push(parent);
    }

    return nodes[0];
}
const weights = [2, 3, 4, 6];
const root = createLeafNode(weights);
console.log(root);

// 