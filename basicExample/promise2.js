const promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HI')
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'THERE')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "It's me")
})

const promise4  = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Doing Promises')
})

// Promise.all() static method takes a iterable of promises as input and returns a single Promise.
// This returned promise fulfills when all of the input's promises fulfill, with an array of the fulfillment values.
// It rejects when any of the input's promises rejects, with this first rejection reasom.

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
})

// ANOTHER EXAMPLE

const p1 = Promise.resolve(3);
const p2 = 42;
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hello');
});

Promise.all([p1, p2, p3])
    .then((values) => {
        console.log(values);
    })

// OUTPUT
// [3, 42, 'Hello']