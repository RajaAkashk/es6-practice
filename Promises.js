// Question 1:
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('End');


// Question 2:
console.log('Start');

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');


// Question 3:
setTimeout(() => {
  console.log('setTimeout 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
});

setTimeout(() => {
  console.log('setTimeout 2');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 2');
});


// Question4:
console.log('script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('promise1');
}).then(() => {
  console.log('promise2');
});

console.log('script end');

// Question 5:
setTimeout(() => {
  console.log('A');
}, 0);

Promise.resolve().then(() => {
  console.log('B');
  setTimeout(() => {
    console.log('C');
  }, 0);
});

console.log('D');

// Question 6:
console.log('1');

setTimeout(() => {
  console.log('2');
  Promise.resolve().then(() => console.log('3'));
}, 0);

Promise.resolve().then(() => {
  console.log('4');
});

console.log('5');

// Question 7:
async function foo() {
  console.log('foo start');
  return 'foo result';
}

console.log('script start');
console.log(foo());
console.log('script end');


const promise1 = new Promise((resolve) => setTimeout(() => resolve("Done1"), 100));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Done2"), 200));
const promise3 = new Promise((_, reject) => setTimeout(() => reject("Error in promise3"), 150));

// Promise.all
Promise.all([promise1, promise2, promise3])
  .then((result) => console.log("all:", result))
  .catch((error) => console.error("all error:", error));

// Promise.allSettled 
Promise.allSettled([promise1, promise2, promise3])
  .then((results) => console.log("allSettled:", results));

// Promise.race 
Promise.race([promise1, promise2, promise3])
  .then((result) => console.log("race resolved:", result))
  .catch((error) => console.error("race rejected:", error));

// Promise.any 
Promise.any([promise3, promise2, promise1])
  .then((result) => console.log("any resolved:", result))
  .catch((error) => console.error("any error:", error));