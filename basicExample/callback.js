// Example

function one(two) {
    console.log('One');
    two(three);
}

function two(callback2) {
    console.log('Two');
    callback2();
}

function three() {
    setTimeout(() => {
        console.log('Three');
    }, 2000);
}

// invoke one() and pass two() as an argument
one(two);

// Another example

console.log('1');
setTimeout(() => {
    console.log('2');
}, 3000);
console.log('3');