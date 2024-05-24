const adjacencyList = {
    "A": ["B", "C"],
    "B": ["A"],
    "C": ["A", "D"],
    "D": ["C"]
}

console.log(adjacencyList)
const result = "C"

const dfs = (start, visited = new Set()) => {
    visited.add(start);
    const destinations = adjacencyList[start];
    for(const destination of destinations){
        if(destination === result){
            console.log("Found It")
            return 
        }
        if(!visited.has(destination)){
            dfs(destination, visited)
        }
    }
}

console.log(dfs('C'))