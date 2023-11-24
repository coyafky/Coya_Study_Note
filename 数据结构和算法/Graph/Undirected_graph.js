class Graph {
    constructor(){
         // key ～ 节点
        // value ～ 相邻节点的列表

        this.adjacencyList =  new Map();
    }

    // 添加节点

    addNode(node){
        if(!this.adjacencyList.has(node)){
            this.adjacencyList.set(node,[]);
        }else
        {
            throw('节点已经存在');
        }
    }

    addEdge(node1,node2){
        if(this.adjacencyList.has(node1) && this.adjacencyList.has(node2)){
            let toAdjacent = this.adjacencyList.get(node1);
            let formAdjacent = this.adjacencyList.get(node2);
            toAdjacent = [...new Set([...toAdjacent,node2])];
            formAdjacent = [...new Set([...formAdjacent,node1])];
            // 无向图需要链接2边
            this.adjacencyList.set(node1,toAdjacent);   
            this.adjacencyList.set(node2,formAdjacent)

        }
    }

    print(){
        const nodes = this.adjacencyList.keys();;
        for(let node of nodes){
            const neighbors = this.adjacencyList.get(node);
            const neighborsString = neighbors.join('');
            console.log(`'节点'${node},相邻节点${neighborsString}`);
        }
    }
}

const graph = new Graph()
// 添加节点
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('E')
graph.addNode('F')
// 添加边
graph.addEdge('A', 'B')
graph.addEdge('A', 'D')
graph.addEdge('A', 'E')
graph.addEdge('B', 'A')
graph.addEdge('B', 'C')
graph.addEdge('C', 'B')
graph.addEdge('C', 'E')
graph.addEdge('C', 'F')
graph.addEdge('D', 'A')
graph.addEdge('D', 'E')
graph.addEdge('E', 'A')
graph.addEdge('E', 'C')
graph.addEdge('E', 'D')
graph.addEdge('E', 'F')
graph.addEdge('F', 'C')
graph.addEdge('F', 'E')
// 打印
graph.print()


// '节点'A,相邻节点BDE
// '节点'B,相邻节点AC
// '节点'C,相邻节点BEF
// '节点'D,相邻节点AE
// '节点'E,相邻节点ACDF
// '节点'F,相邻节点CE