const array = [1,2,3,4,5,6,7,8]

const findIndexLast = (array, target, index) => {
    if(index === -1) return -1;
    if(array[index] === target) return index;
    else return findIndexLast(array, target, index - 1);
}

const target = 19;
console.log(findIndexLast(array, target, array.length))