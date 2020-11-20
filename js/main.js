function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

function minEl(arr) {
    let tmparr = quickSort(arr)
    return tmparr[0]
}

function maxEl(arr) {
    let tmparr = quickSort(arr)
    return tmparr[tmparr.length - 1]
}

function medianEl(arr) {
    let tmparr = quickSort(arr)
    if (tmparr.length % 2 == 0) {
        return Math.floor((tmparr[tmparr.length / 2] + tmparr[tmparr.length / 2 + 1]) / 2)
    } else {
        return Math.floor(tmparr[tmparr.length / 2 + 1])
    }
}

function tagCalculator() {
    var tagList = document.querySelectorAll("*");
    var tagMap = new Map();

    for (i = 0; i < tagList.length; i++) {
        tagMap.set(tagList[i].tagName, tagMap.has(tagList[i].tagName) ? tagMap.get(tagList[i].tagName) + 1 : 1)
    }

    console.log(tagMap);

}

let arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
console.log(arr);

let sortedArr = quickSort(arr);
console.log("Sorted array:");
console.log(sortedArr);

console.log("Min element:");
console.log(minEl(arr));

console.log("Max element:");
console.log(maxEl(arr));

console.log("Median:");
console.log(medianEl(arr));

tagCalculator();