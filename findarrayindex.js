const array = [1,2,3,4,5,6,7,8]

const findIndex = (array, target, index) => {
    if(index === array.length) return -1;
    if(array[index] === target) return index;
    else return findIndex(array, target, index + 1);
}

const target = 7;
console.log(findIndex(array, target, 0))



