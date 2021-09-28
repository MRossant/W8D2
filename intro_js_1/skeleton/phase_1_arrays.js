
function Array(array) {
    this.array = array
}
// constructor function(has to be capitalized): initialize the array prototype for the new instance
// on line 16.
Array.prototype.uniq = function (){
    let a = [];
    for (let i = 0; i < this.array.length; i++) {
        if (!a.includes(this.array[i]) ){
            a.push(this.array[i]);
        }
    }
    return a;
}
// line 7 is the function that can be only invoked on line 2

// const array = new Array([1,2,2,3,3,3]);
// geerating a new instance in the array prototype on line 2

// console.log(array.uniq());
// using the new instance has the function uniq we defined above.
// it can only be invoked by the constant variable we saved on line 17

Array.prototype.twoSum = function () {
    let a = [];
    for (let i = 0; i < this.array.length; i++) {
        for (let j = 1; j < this.array.length; j++) {
            if (this.array[i] + this.array[j] === 0) {
                a.push([i, j]);
            }
        }
    }
    return a;
}

// const banana_array = new Array([-1, 2, 1, -2, 2, 3, -3, 3, 3]);
// console.log(banana_array.twoSum());

Array.prototype.transpose = function() {
    let a = [];
    console.log("hello")
    // debugger
    // let sub = this.array[i];
    for (let i = 0; i < this.array.length; i++) {
        // debugger
        // looping through sub arrays
        let sub = this.array[i];
        let b = [];
        for (let j = 0; j < this.array.length; j++) {
            // debugger 
            b.push(this.array[i][j]);
        }
        a.push(b);
    }
    return a;
}
const array = new Array([[1,2,3], [4,5,6]]);
console.log(array.transpose())


// [[1,2,3]
//  [4,5,6]]

// [[1,4]
//  [2, 5]
//  [3, 6]]

// [[1,2,3], [4,5,6]]
// [[1,4],[2, 5], [3, 6]]