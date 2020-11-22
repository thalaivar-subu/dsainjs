class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.visited = new Set();
  }
  addNode(v) {
    this.adjacencyList.set(v, []);
  }
  addEdge(from, to) {
    this.adjacencyList.get(from).push(to);
    this.adjacencyList.get(to).push(from);
  }
  removeNode(v) {
    // deleting node from list
    this.adjacencyList.delete(v);

    // Remove Edges of the node
    for (let [key, value] of this.adjacencyList.entries()) {
      const index = value.indexOf(v);
      if (index >= 0) {
        const splicedValue = value.filter((x) => x !== v);
        this.adjacencyList.set(key, splicedValue);
      }
    }
  }
  breadFirstSearch(start, nodeToFind) {
    const queue = [start];
    const visited = new Set();
    while (queue.length > 0) {
      const origin = queue.shift(); // mutates the array and returns first element
      const destinations = this.adjacencyList.get(origin);
      for (const destination of destinations) {
        if (nodeToFind === destination) {
          console.log(`Found -> ${destination} `, visited);
        }
        if (!visited.has(destination)) {
          visited.add(destination);
          queue.push(destination);
        }
      }
    }
  }
  depthFirstSearch(start, nodeToFind) {
    this.visited.add(start);
    const destinations = this.adjacencyList.get(start);
    for (const destination of destinations) {
      if (destination === nodeToFind) {
        console.log(`Found -> ${nodeToFind}`, this.visited);
      }
      if (!this.visited.has(destination)) {
        this.depthFirstSearch(destination, nodeToFind);
      }
    }
  }
}

const graph = new Graph();
graph.addNode("Trichy");
graph.addNode("Chennai");
graph.addNode("Coimbatore");
graph.addNode("Bangalore");
graph.addNode("Namakal");
graph.addNode("Karur");

graph.addEdge("Trichy", "Coimbatore");
graph.addEdge("Chennai", "Coimbatore");
graph.addEdge("Bangalore", "Trichy");

// console.log(graph);
//   console.log("After Removing Node Trichy");
//   graph.removeNode("Trichy");
//   console.log(graph);
graph.breadFirstSearch("Trichy", "Chennai");

graph.depthFirstSearch("Trichy", "Chennai");
