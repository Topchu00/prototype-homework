// Array.prototype.myMap = function(callback) {
//     const result = []

//     for (let i = 0; i < this.length; i++) {
//         result.push(callback(this[i], i, this));
//     }

//     return result;
// }

// const arr = [1, 2, 3, 4, 5, 6]

// const test = arr.myMap((item, idx, array) => {
//     console.log('item => ', item);
//     console.log('idx => ', idx);
//     console.log('array => ', array);

//     return item * 3;
// })

// console.log(test);

// Array.prototype.myReverse = function (callback) {
//     const result = []

//     for (let i = this.length - 1; i >= 0; i--) {
//         result.push(callback(this[i]))
//     }

//     return result
// }

// const arr = [1, 2, 3, 4, 5]

// const test = arr.myReverse((item) => {
//     return item
// })

// console.log(test);


// Array.prototype.mySort = function () {
//     const result = []
//     const len = this.length

//     for (let i = 0; i < len; i++) {
//         result[i] = this[i]
//     }

//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len - 1; j++) {
//             if (result[j] > result[j + 1]) {
//                 const temp = result[j]
//                 result[j] = result[j + 1]
//                 result[j + 1] = temp
//             }
//         }
//     }
//     return result
// }

// const arr = ['bad', 'apple', 'cat', 'either', 'duck']


// const test = arr.mySort()
// console.log(test);


// Array.prototype.myJoin = function(sep = ',') {
//     let result = ''

//     for (let i = 0; i < this.length; i++) {
//         result += this[i]

//         if(i < this.length - 1) {
//             result += sep
//         }
//     }

//     return result
// }

// const arr = [1, 2, 3, 4, 5]
// const joined = arr.myJoin()

// console.log(joined);

// Array.prototype.myForEach = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this)
//     }
// }

// const arr = [1, 2, 3, 4, 5]

// arr.myForEach((item, idx, array) => {
//     console.log('item => ', item);
//     console.log('idx => ', idx);
//     console.log('array => ', array);
// })