Array.prototype.myEach = function (callback) { // [1,2,3,4,5].myEach = function(addOne)
    for (let i = 0; i < this.length; i++) {
        callback(this[i]); 
    }
}

function addOne(ele) { // addOne(1)
    return ele; // return 2
}

function addTwo(feifei) {
    return feifei + 2;
}
// Array.prototype.forEach(function(item) {
//     console.log(item)
// })

// function eachEle() {

// }
// fruits.forEach(function(item, index, array) {
//   console.log(item, index)
// })
// // Apple 0
// // Banana 1

// [1,2,3,4,5].myEach(addOne);

Array.prototype.myMap = function (callback) {
    let result = [];

    this.myEach(ele => { // [1,2,3,4,5]
        result.push(callback(ele)); // result.push(callback(this[i]))
    })

    return result;
    // result.push(this.myEach(callback));
    // return result
}

// console.log([1,2,3,4,5].myMap(addOne));
// console.log([1,2,3,4,5].myMap(addTwo)); //addTwo = line 29 callback

Array.prototype.myReduce = function (callback, initialValue) {
    let acc = 0
    if (initialValue !== undefined) {
        acc = initialValue;
    }

    this.myEach(ele => {
        acc += callback(ele)
    })

    return acc
}

console.log([1,2,3,4,5].myReduce(returnEle, 2000));

function returnEle(ele) { 
    return ele; // return 2
}




