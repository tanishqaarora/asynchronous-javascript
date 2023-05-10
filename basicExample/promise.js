// creating a promise

const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve('Hey');
    } else {
        reject('Oops error!!');
    }
})

// .catch() catches any error that may happen
// between the chains .then()
promise
    .then(result => {
        // throw Error
        return result + '!'
    })
    .then(result2 => {
        // throw Error;
        console.log(result2);
    })
    .catch((error) => {
        console.log('error..', error);
    })

// .catch() catches error that may occur above it
promise
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('error..'))
    .then(result3 => {
        throw Error;
        console.log(result3 + '!')
    })