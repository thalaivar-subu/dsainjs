/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let noOfIslands = 0;
    for(let i=0;i<grid.length; i++){
        for(let j=0;j<grid[i].length; j++){
            if(grid[i][j] === '1'){
                noOfIslands++;
                trackIslandsAndMarkZero(i, j, grid)
            }
        }
    }
    return noOfIslands;
};

const trackIslandsAndMarkZero = (rowIndex, colIndex, grid) => {
    if(!grid[rowIndex] || !grid[rowIndex][colIndex] || grid[rowIndex][colIndex] === '0') return;
    grid[rowIndex][colIndex] = '0';
    trackIslandsAndMarkZero(rowIndex - 1, colIndex, grid)
    trackIslandsAndMarkZero(rowIndex + 1, colIndex, grid)
    trackIslandsAndMarkZero(rowIndex, colIndex + 1, grid)
    trackIslandsAndMarkZero(rowIndex, colIndex - 1, grid)

}