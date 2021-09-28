
// function Array(array) {
//     this.array = array
// }
// constructor function(has to be capitalized): initialize the array prototype for the new instance
// on line 16.
Array.prototype.uniq = function (){
    let a = [];
    for (let i = 0; i < this.length; i++) {
        if (!a.includes(this[i])){
            a.push(this[i]);
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
    for (let i = 0; i < this.length; i++) {
        for (let j = 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                a.push([i, j]);
            }
        }
    }
    return a;
}

// console.log([-1, 2, 1, -2, 2, 3, -3, 3, 3].twoSum());

Array.prototype.transpose = function() {
    let a = [];
    debugger
    // let sub = this[i];
    for (let i = 0; i < this[0].length; i++) {
        debugger
        // looping through sub arrays
        let b = [];
        for (let j = 0; j < this.length; j++) {
            debugger 
            b.push(this[j][i]);
        }
        a.push(b);
    }
    return a;
}

console.log([[1,2,3], [4,5,6]].transpose());


// [[1,2,3]
//  [4,5,6]]

// [[1,4]
//  [2, 5]
//  [3, 6]]

// [[1,2,3], [4,5,6]]
// [[1,4],[2, 5], [3, 6]]