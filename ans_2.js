function forEachCustom(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

const numbers = [10, 20, 30];

forEachCustom(numbers, (element, index, array) => {
    console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
});
