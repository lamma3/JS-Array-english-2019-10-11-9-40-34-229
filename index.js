// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log('b');


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var res = a.map(n => n * 2);
console.log(res);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var case1 = colors.join(' ');
var case2 = colors.join('+');
var case3 = colors.join(',');
console.log(case1);
console.log(case2);
console.log(case3);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var sorted = a.sort((a, b) => b - a);
console.log(sorted);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var counts = a.reduce((counts, element) => {
    counts[element] = (counts[element] || 0) + 1;
    return counts;
}, {});
var max = Object.keys(counts)
    .reduce(
        (max, element) => counts[element] > counts[max] ? element : max,
        Object.keys(counts)[0]
    );
console.log(max);
