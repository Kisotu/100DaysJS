// Asynchroonous Javascript => programming pattern where multiple tasks are exec simultaenously.
//Promises => an obj that rep the eventual completion or failure of an asycn operation. Has 3 possible states:


// pending: The initial state of a Promise, representing that the
// value is not yet available.
// • fulfilled: The state of a Promise representing a successful
// operation, meaning that the value has become available.
// • rejected: The state of a Promise representing a failed operation, meaning that an error occurr


//promise that reolves after 5 seconds delay.
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data retrieved successfully!");
    }, 5000)
});
console.log(myPromise)

myPromise.then((value) => {
    // console.log(value)
})

//promise that is rejected after 5 seconds/

let rejPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise rejected after 5 seconds");
    }, 5000);
});

rejPromise.then((value) => {
    // console.log(value);
})

rejPromise.catch((err) => {
    // console.log(err)
})



//function that adds 2 numbers but rejects if above 20.

const addNumbers = (a, b) => {
    return new Promise((resolve, reject) => {
        const result = a + b;

        if(result > 20){
            reject("result rejected, above required number")
        }
        else{
            resolve(result);
        }
    })
}

addNumbers(18,2)
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })


    // promises.all()

    let promise1 = new Promise((resolve, reject) => {
        resolve("Promise 1 resolved")
    });

    let promise2 = new Promise((resolve, reject) => {
        resolve("Promise 2 resolved")
    })

    let promise3 = new Promise((resolve, reject) => {
        resolve("Promise 3 resolved")
    })

    Promise.all([promise1, promise2, promise3])
        .then((value) => {
            console.log(value)
        }).catch((err) => {
            console.log(err)
        })

//Promise.race; // firsr to finish wins, either resolved or rejected.

let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Prom1 is resolved!')
    }, 5000);
});

let prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Prom2 is resolved!')
    }, 3000);
});

let prom3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Prom3 is rejected!')
    }, 1000);
});

Promise.race([prom1, prom2, prom3])
    .then((value) => {
        console.log(value)
    }).catch((error) => {
        console.log(error)
    })


    //finally() method to run tasks regardless whether the promise id fulfilled or rejected.