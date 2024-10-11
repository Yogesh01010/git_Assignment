function processArray(arr) {
    return arr
        .filter(num => num % 2 === 0)
        .map(num => num * num)        
        .reduce((acc, curr) => acc + curr, 0); 
}

const input4 = [1, 2, 3, 4, 5];
console.log(processArray(input4));