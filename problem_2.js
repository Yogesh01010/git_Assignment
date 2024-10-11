function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

const input2 = [1, 2, 8, 4, 5, 9];
console.log(filterEvenNumbers(input2));
