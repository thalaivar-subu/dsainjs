class Graph {
  static #adjacencyList = new Map();
  static #visited = new Set();
  static #path = new Set();
  static #isFound = false;
  static addNode(v, type) {
    this.#adjacencyList.set(v, []);
  }
  static addEdge(from, to) {
    this.#adjacencyList.get(from).push(to);
    this.#adjacencyList.get(to).push(from);
  }
  static clearVisited() {
    this.#visited = new Set();
    this.#isFound = false;
    this.#path = new Set();
  }
  static removeNode(v) {
    // deleting node from list
    this.#adjacencyList.delete(v);

    // Remove Edges of the node
    for (let [key, value] of this.#adjacencyList.entries()) {
      const index = value.indexOf(v);
      if (index >= 0) {
        const splicedValue = value.filter((x) => x !== v);
        this.#adjacencyList.set(key, splicedValue);
      }
    }
  }
  static depthFirstSearch(start, nodeToFind, strength) {
    this.#visited.add(start);
    const destinations = this.#adjacencyList.get(start);
    if (destinations.includes(nodeToFind)) {
      this.#visited.add(nodeToFind);
      this.#isFound = true;
      return;
    }
    for (let destination of destinations) {
      if (!this.#visited.has(destination)) {
        this.depthFirstSearch(destination, nodeToFind);
        if (this.#isFound) return;
      }
    }
    this.#visited.delete(start);
  }
  static breadFirstSearch(start, nodeToFind) {
    this.clearVisited();
    const queue = [start];
    while (queue.length > 0) {
      const origin = queue.shift(); // mutates the array and returns first element
      this.#visited.add(origin);
      this.#path.add(origin);
      const destinations = this.#adjacencyList.get(origin);
      if (destinations.includes(nodeToFind)) {
        this.#isFound = true;
        this.#visited.add(nodeToFind);
        this.#path.add(nodeToFind);
        return;
      }
      for (const destination of destinations) {
        if (nodeToFind === destination) {
          this.#visited.add(nodeToFind);
          this.#isFound = true;
          return;
        }
        if (!this.#visited.has(destination)) {
          this.#visited.add(destination);
          queue.push(destination);
        }
      }
    }
  }
  static getPath(start, nodeToFind, searchType = "dfs") {
    this.clearVisited();
    if (start === nodeToFind) return `${start}->${nodeToFind}`;

    if (searchType === "dfs") {
      this.depthFirstSearch(start, nodeToFind);
      return `Path Using DFS-> ${
        this.#visited.size > 0 ? Array.from(this.#visited).join("->") : ""
      }`;
    } else {
      this.breadFirstSearch(start, nodeToFind);
      return `Path Using BFS -> ${
        this.#path.size > 0 ? Array.from(this.#path).join("->") : ""
      }`;
    }
  }
  static getAdjacencyList() {
    return this.#adjacencyList;
  }
}

Graph.addNode("Trichy");
Graph.addNode("Chennai");
Graph.addNode("Coimbatore");
Graph.addNode("Bangalore");
Graph.addNode("Namakal");
Graph.addNode("Karur");

Graph.addEdge("Trichy", "Coimbatore");
Graph.addEdge("Chennai", "Coimbatore");
Graph.addEdge("Bangalore", "Trichy");
console.log(Graph.getAdjacencyList());
console.log(Graph.getPath("Trichy", "Chennai", "bfs"));
console.log(Graph.getPath("Trichy", "Chennai", "dfs"));
console.log(Graph.getPath("Trichy", "Bangalore", "bfs"));
console.log(Graph.getPath("Trichy", "Bangalore", "dfs"));
console.log(Graph.getPath("Coimbatore", "Bangalore", "bfs"));
console.log(Graph.getPath("Coimbatore", "Bangalore", "dfs"));

Graph.removeNode("Trichy");
