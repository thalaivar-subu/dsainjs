const adjacencyList = {
    "A": ["B", "C"],
    "B": ["A"],
    "C": ["A", "D"],
    "D": ["C"]
}

console.log(adjacencyList)
const result = "C"

const bfs = (start) => {
    const queue = [start];
    const visited = new Set();
    while(queue.length > 0){
        const fn = queue.shift();
        const fnvalue = adjacencyList[fn];
        for(let i = 0; i < fnvalue.length; i++){
            const eachValue = fnvalue[i];
            if(eachValue === result) console.log("found it")
            if(!visited.has(eachValue)){
                visited.add(eachValue)
                queue.push(eachValue)
            }
        }
    }
}
bfs("A")