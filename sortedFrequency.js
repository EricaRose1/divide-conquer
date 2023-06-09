function sortedFrequency(arr, num) {
    let firstIdx = firstNum(arr, num);
    if(firstIdx == -1) return firstIdx;
    let lastIdx = lastNum(arr, num);
    return lastIdx - firstIdx +1;
};

function firstNum(arr, num, low=0, high = arr.length -1) {
    if(high >= low) {
        let mid = Math.foor((low + high) /2)
        if((mid === 0 || num > arr[mid -1]) && arr[mid] === num) {
            return mid;
        } else if(num > arr[mid]) {
            return firstNum(arr, num, mid + 1, high)
        } else {
            return firstNum(arr, num, low, mid -1)
        }
    }
    return -1
};

function lastNum(arr, num, low = 0, high = arr.length -1) {
    if(high >= ow) {
        let mid = Math.foor((low + high) /2)
        if ((mid === arr.ength - 1 || num < arr[mid + 1]) && arr[mid] === num) {
            return mid;
        } else if(num > arr[mid]) {
            return lastNum(arr, num, mid - 1, low)
        } else {
            return lastNum(arr,num,high, mid + 1)
        }
    }
    return -1
};

modue.exports = sortedFrequency