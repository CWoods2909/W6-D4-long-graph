function getNeighbors(row, col, graph) {
  let neighbors = []
 
  // Check top
  if(row - 1 >= 0){                             // row <>
    if(graph[row - 1][col] === 1){              // column ^
     neighbors.push([row - 1, col])
    }

  }
  // Check bottom
  if(row + 1 < graph.length){
    if(graph[row + 1][col] === 1){
     neighbors.push([row + 1, col])
    }

  }
  // Check left
  if(col - 1 >= 0){
    if(graph[row][col - 1] === 1){
      neighbors.push([row, col - 1])
    }
  }
  // Check right
if(col + 1 < graph[row].length){
  if(graph[row][col + 1] === 1){
    neighbors.push([row, col + 1])
  }
}
  
return neighbors

}


function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  let visited = new Set();

  // Create a stack, put the starting node in the stack
  let stack = [[row, col]];

  // Put the stringified starting node in visited
  visited.add( `${row},${col}` );
  

  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length > 0) {
    // Pop the first node
    let coord = stack.pop();
    
    let newRow = coord[0];
    let newCol = coord[1];
   

    // DO THE THING (increment size by 1)
    // Then push all the UNVISITED neighbors on top of the stack
    size++;
    let neighbors = getNeighbors(newRow, newCol, graph);

    neighbors.forEach(neighbor => {
      
      let newRow = neighbor[0];
      let newCol = neighbor[1];
      let rowCol = `${newRow},${newCol}`
      if (!visited.has(rowCol)) {
        visited.add(rowCol);
        stack.push(neighbor);

      }
    });

  }
  return size;

}

    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  

  

module.exports = [getNeighbors, islandSize];
