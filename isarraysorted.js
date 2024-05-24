const array = [1, 2, 3, 4, 5, 6, 7, 8];

const sorted = (array, index) => {
    if(index === array.length-1) return true;
    return array[index] < array[index + 1] && sorted(array, index + 1);
}

console.log(sorted(array, 0))