function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

const input3 = [5, 10, 15, 20];
console.log(sumArray(input3));
