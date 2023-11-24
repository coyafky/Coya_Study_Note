class Graph {
    constructor() {
      this.vertices = [];
      this.edges = {};
    }
  
    addVertex(vertex) {
      this.vertices.push(vertex);
      this.edges[vertex] = [];
    }
  
    addEdge(vertex1, vertex2) {
      this.edges[vertex1].push(vertex2);
      this.edges[vertex2].push(vertex1);
    }
  
    printGraph() {
      let graph = "";
      for (let i = 0; i < this.vertices.length; i++) {
        graph += this.vertices[i] + " -> ";
        const neighbors = this.edges[this.vertices[i]];
        for (let j = 0; j < neighbors.length; j++) {
          graph += neighbors[j] + " ";
        }
        graph += "\n";
      }
      console.log(graph);
    }
  }
  
  // Example usage
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addEdge("A", "B");
  graph.addEdge("B", "C");
  graph.printGraph();