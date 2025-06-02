// console.log("question 1 :- ");
// let age = 20;
// console.log("Original age", age);
// age = 22;
// console.log("Updated age", age);

// console.log("question 2 :- ");
// let num1 = 20;
// let num2 = 5;
// console.log("Product of num1 and num2", num1 * num2);
// console.log("Difference between num1 and num2", num1 - num2);

// console.log("question 4 :- ");
// const person = {
//   name: "Ramu",
//   age: 30,
// };
// console.log("Original Person", person);
// person.age = 31;
// console.log("Updated Person", person);

// console.log("question 5 :- ");
// const colors = { primary: "red", secondary: "blue" };
// console.log("Original Person", colors);
// colors["tertiary"] = "green";
// colors["Secondary"] = "grey";
// console.log("Updated Person", colors);

// console.log("question 6 :- ");
// const numbers = [1, 2, 3, 4];
// numbers[2] = 99;
// console.log(numbers);

// console.log("question 7 :- ");
// let coordinates = { x: 10, y: 20 };
// console.log(coordinates);
// let newCoordinates = { x: 30, y: 40 };
// coordinates = newCoordinates;
// console.log(coordinates);

// console.log("question 8 :- ");
// let obj = { a: 1, b: 2 };
// const obj2 = { a: 3, b: 4 };
// obj = obj2;
// console.log(obj);
// console.log(obj2);

const isBirthday = true;
let age = 23;
if (isBirthday) {
  age++;
}
console.log("Program 1:");
console.log(`Current Age: ${age}`);
console.log("\n");

console.log("Program 2:");
const passengerAge = 65;
const ticketPrice = 500;
if (passengerAge >= 65) {
  const discountedPrice = ticketPrice - ticketPrice * 0.15;
  console.log(`Ticket price for age greater than 60: ${discountedPrice}`);
} else {
  console.log(`Ticket price for age less than or equal to 60: ${ticketPrice}`);
}
console.log("\n");

console.log("Program 3:");
const num1 = 1;
const num2 = 2;
const num3 = 3;
if (num1 > num2 && num1 > num3) {
  console.log("num1 is greater.");
} else if (num2 > num3 && num2 > num1) {
  console.log("num2 is greater.");
} else {
  console.log("num3 is greater.");
}
console.log("\n");

console.log("calculateBonus");
const calculateBonus = (workedHours, marks, salary) => {
  let bonus = 0;
  if (workedHours > 25 && marks > 85) {
    bonus = salary + salary * 0.1;
  } else if (workedHours > 15 && marks > 75) {
    bonus = salary + salary * 0.05;
  } else {
    bonus = 0;
  }
  return bonus;
};
console.log(calculateBonus(20, 80, 5000));
const array = [5, 12, 7, 25, 18, 3];

// console.log("program 1");
// const print = () => {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// };
// print();

// console.log("program 2");
// const addTenEach = () => {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     newArr.push(array[i] + 10);
//   }
//   return newArr;
// };
// console.log(addTenEach());

console.log("program 3");
const convertAllToEven = () => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArr.push(array[i]);
    } else {
      newArr.push(array[i] + 1);
    }
  }
  return newArr;
};
console.log(convertAllToEven());

console.log("program 4");
const numDivisibleByTwo = () => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};
console.log(numDivisibleByTwo());

console.log("program 5");
const sumOfAll = () => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return total;
};
console.log(sumOfAll());

console.log("program 6");
const sumOfOddAndEven = () => {
  let sumOfOdd = 0;
  let sumOfEven = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sumOfEven = sumOfEven + array[i];
    } else {
      sumOfOdd = sumOfOdd + array[i];
    }
  }
  return { sumOfEven, sumOfOdd };
};
console.log(sumOfOddAndEven());

console.log("program 1");
const car = {
  brand: "Honda",
  model: "Corolla",
};
console.log(car.brand);
console.log(car.model);

car.brand = "Toyota";

console.log(car);
car["year"] = 2022;
car["color"] = "blue";
console.log(car);
const printVal = () => {
  for (val in car) {
    console.log(val, ":", car[val]);
  }
};
printVal();

console.log("\n");
console.log("program 2");
const citizen = {
  name: "ramu",
  age: 29,
  occupation: "Doctor",
};
citizen.age = 68;
citizen.age = citizen.age + 2;
citizen["city"] = "Delhi";
for (value in citizen) {
  console.log(value, ":", citizen[value]);
}
console.log("\n");

console.log("Program 3");
const students = [
  { name: "Rahul", rollNo: 101, hindi: 80, english: 75, maths: 90 },
  { name: "Amit", rollNo: 102, hindi: 85, english: 70, maths: 95 },
  { name: "Priya", rollNo: 103, hindi: 78, english: 92, maths: 87 },
];

for (let i = 0; i < students.length; i++) {
  const marksForComputer = [88, 92, 95];
  students[i]["computer"] = marksForComputer[i];
}

for (let i = 0; i < students.length; i++) {
  const marksForScience = [82, 90, 88];
  students[i]["science"] = marksForScience[i];
}
console.log("students", students);

const newStudent = {
  name: "Kaveri",
  rollNo: 104,
  hindi: 84,
  english: 88,
  maths: 78,
  computer: 90,
  science: 86,
};
students.push(newStudent);

const updatedStudentdata = () => {
  for (let i = 0; i < students.length; i++) {
    for (val in students[i]) {
      console.log(val, ":", students[i][val]);
    }
  }
};

console.log("updated Student data:", updatedStudentdata());

const checkNum = (num) => num % 2 === 0;
console.log(checkNum(3));
const convert = (str) => str.toUpperCase();
console.log(convert("raj"));

const joinName = (firstName, lastName) => ({ firstName, lastName });
console.log(joinName("raja", "akash"));

// const objectReturn = (str1, str2) => ({
//   concatenation: str1 + " " + str2,
//   totalLength: (str1 + str2).length,
// });
// console.log(objectReturn("Raj", "kumar"));

// const calculateAverage = (arr) => {
//   let average = 0;
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total = total + arr[i];
//   }
//   return (average = total / arr.length);
// };
// console.log(calculateAverage([5, 10, 15]));

// const reverseString = (str) => {
//   let reverseStr = "";
//   for (i = str.length - 1; i > -1; i--) {
//     reverseStr = reverseStr + str[i];
//   }
//   return reverseStr;
// };
// console.log(reverseString("World"));

// const students = [
//   { name: "Alice", age: 20, grade: 85 },
//   { name: "Bob", age: 22, grade: 92 },
//   { name: "Charlie", age: 19, grade: 88 },
// ];

// const calculateAverageGrade = (arr) => {
//   let totalGrade = 0;
//   for (let i = 0; i < arr.length; i++) {
//     totalGrade = totalGrade + arr[i].grade;
//   }
//   return (totalGrade / arr.length).toFixed(2);
// };
// console.log(calculateAverageGrade(students));

// const getNames = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i].name);
//   }
//   return newArr;
// };
// console.log(getNames(students));

const isAnyBelow18 = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age < 18) {
      newArr.push(arr[i].name);
    }
  }
  if (newArr.length === 0) {
    return false;
  } else {
    return newArr;
  }
};
console.log(isAnyBelow18(students));

const logFirstAndRest = (first, ...rest) => console.log(first, ",", rest);
logFirstAndRest("a", "b", "c", "d");

const logFirstAndSecond = (first, second, ...string) =>
  console.log(first, second, string);
logFirstAndSecond(12, 22, 33, 44, 55);

const calculateProduct = (...numbers) => {
  console.log(numbers);
  let total = 1;
  for (let i = 0; i < numbers.length; i++) {
    total *= numbers[i];
  }
  return total;
};
console.log(calculateProduct(2, 3, 4));
console.log(calculateProduct(5, 2, 1, 3));

const createSentence = (...strings) => strings.join();
console.log(createSentence("JavaScript", "is", "awesome"));

const containsValue = (value, ...array) => array.includes(value);
console.log(containsValue(3, 1, 2, 3, 4));
console.log(containsValue("apple", "banana", "orange"));

const copyAndAdd = (arr, element) => [...arr, element];
console.log(copyAndAdd([10, 20], 30));

const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
console.log(mergeArrays([10, 20], [30, 40, 50]));

const copyPersonObject = (obj, key, value) => ({ ...obj, [key]: value });
console.log(
  copyPersonObject({ firstName: "Alice", age: 20 }, "lastName", "Johnson")
);

const copyEmployeeObject = (obj, key, value) => ({
  ...obj,
  [key]: value,
});
console.log(
  copyEmployeeObject(
    { employeeId: 243, name: "Bob", age: 20 },
    "department",
    "IT department"
  )
);

const modifyObjectProperties = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(modifyObjectProperties({ name: "Alice", age: 25 }, { age: 30 }));

// const sumAndDifference = (arr) => {
//   const [a, b] = arr;
//   let sum = a + b;
//   let difference = a - b;
//   return `Sum: ${sum}, Difference: ${difference}`;
// };
// console.log(sumAndDifference([5, 3]));

// const extractFirstAndLast = (str) => {
//   let first = str[0];
//   let last = str[str.length - 1];
//   return `First char:${first} and last char:${last}`;
// };
// console.log(extractFirstAndLast("hello"));

// const calculateRectangleArea = (obj) => {
//   const { length, width } = obj;
//   return ` The area of the rectangle is: ${length * width}`;
// };
// console.log(calculateRectangleArea({ length: 5, width: 3 }));

// const extractNestedInfo = (obj) => {
//   const {
//     data: { name, age, country },
//   } = obj;
//   return `${name} is ${age} lives in ${country}`;
// };
// console.log(
//   extractNestedInfo({ data: { name: "John", age: 35, country: "USA" } })
// );

// const createObjectWithDynamicField = (key, value) => ({ [key]: value });
// console.log(createObjectWithDynamicField("age", 25));
// console.log(createObjectWithDynamicField("name", "Alice"));

// const addObjField = (obj, key, val) => ({ ...obj, [key]: val });
// console.log(
//   addObjField(
//     { productName: "Side Table", color: "Walnut Brown" },
//     "inStock",
//     true
//   )
// );

// const printProductDetails = ({
//   name: productName,
//   price: productPrice,
// }) => `Product: ${productName}, Price: $${productPrice}`;
// console.log(printProductDetails({ name: "Laptop", price: 899 }));

// const createPerson = (name, age) => ({ name, age });
// console.log(createPerson("Alice", 25));

// const createBookObj = (name, author, genre) => ({ name, author, genre });
// console.log(
//   createBookObj("The Great Gatsby", "F. Scott Fitzgerald", "Classic")
// );

// let aaloo = 1;
// let bhaaloo = 2;
// const createObj2 = (aaloo, bhaaloo) => ({ aaloo, bhaaloo });
// console.log(createObj2(aaloo, bhaaloo));

// const printObjOfArrays = (arr1, arr2) => ({ arr1, arr2 });
// console.log(printObjOfArrays([1, 2, 3], ["a", "b"]));

// const createTriangle = (side1, side2, side3) => {
//   let perimeter = side1 * side2 * side3;
//   return { side1, side2, side3, perimeter };
// };
// console.log(createTriangle(3, 4, 5));

// const taskForm = document.querySelector("#taskForm");

// taskForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const weekDays = document.querySelector("#weekDays");
//   const weekEndDays = document.querySelector("#weekEndDays");

//   const task = document.querySelector("#task").value;
//   const selectDay = document.querySelector("#selectDay").value;
//   console.log(task, selectDay);
//   const li = document.createElement("li");
//   if (selectDay === "saturday" || selectDay === "sunday") {
//     li.textContent = task;
//     weekEndDays.appendChild(li);
//   } else {
//     li.textContent = task;
//     weekDays.appendChild(li);
//   }
// });

// const taskForm = document.querySelector("#taskForm");

// taskForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const weekDays = document.querySelector("#weekDays");
//   const weekEndDays = document.querySelector("#weekEndDays");

//   const task = document.querySelector("#task").value;
//   const selectDay = document.querySelector("#selectDay").value;

//   const li = document.createElement("li");
//   li.textContent = task;

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";
//   deleteBtn.style.marginLeft = "10px";

//   deleteBtn.addEventListener("click", () => {
//     li.remove();
//   });

//   li.appendChild(deleteBtn);

//   if (selectDay === "saturday" || selectDay === "sunday") {
//     weekEndDays.appendChild(li);
//   } else {
//     weekDays.appendChild(li);
//   }
// });

// const increment1 = document.querySelector("#increment1");
// const increment2 = document.querySelector("#increment2");
// const total = document.querySelector("#total");
// const count1Container = document.querySelector("#count1");
// const count2Container = document.querySelector("#count2");
// let count1 = 0;
// let count2 = 0;

// increment1.addEventListener("click", () => {
//   count1++;
//   count1Container.textContent = count1;
//   comapare();
// });
// increment2.addEventListener("click", () => {
//   count2++;
//   count2Container.textContent = count2;
//   comapare();
// });

// const comapare = () => {
//   if (count1 > count2) {
//     total.textContent = `count 1 is greater than count 2 by ${
//       count1 - count2
//     }`;
//   } else if (count2 > count1) {
//     total.textContent = `count 2 is greater than count 1 by ${
//       count2 - count1
//     }`;
//   } else {
//     total.textContent = `count 1 is equal to count 2`;
//   }
// };

// const printNumbers = () => {
//   let results = [];
//   for (let i = 1; i < 21; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       results.push("FizzBuzz");
//     } else if (i % 5 === 0) {
//       results.push("Buzz");
//     } else if (i % 3 === 0) {
//       results.push("Fizz");
//     } else {
//       results.push(i);
//     }
//   }

//   const printNumbers = document.getElementById("printNumbers");
//   results.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = item;
//     printNumbers.appendChild(li);
//   });
// };
// printNumbers();

const generateNumbers = () => {
  const results = [];
  for (let i = 1; i < 21; i++) {
    if (i % 2 !== 0) {
      results.push(`Odd: ${i * i}`);
    } else {
      results.push(`Even: ${i * i}`);
    }
  }
  console.log(results);
};
generateNumbers();

const generateBtn = document.querySelector("#generateBtn");

const generateMultiples = () => {
  const number = document.querySelector("#number").value;
  const printNumbers2 = document.querySelector("#printNumbers2");
  printNumbers2.innerHTML = "";
  for (let i = 1; i < 11; i++) {
    const li = document.createElement("li");
    li.textContent = `${number} * ${i} = ${number * i}`;
    printNumbers2.appendChild(li);
  }
};
generateBtn.addEventListener("click", generateMultiples);

// const generateSentenseBtn = document.querySelector(
//   "#generateSentenseBtn"
// );
// const generateSentense = () => {
//   const sentense = document.querySelector("#sentense").value;
//   const words = sentense.trim().split(" ");
//   const printNumbers3 = document.querySelector("#printNumbers3");

//   if (words.length <= 4) {
//     printNumbers3.textContent = words
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(" ");
//   } else {
//     printNumbers3.textContent =
//       words[0].charAt(0).toUpperCase() +
//       words[0].slice(1) +
//       " " +
//       words
//         .slice(1)
//         .map((word) => word.toLowerCase())
//         .join(" ");
//   }
// };
// generateSentenseBtn.addEventListener("click", generateSentense);

// const numbersArray = [2, -5, 6, 7, -8, 0, 10, 23, -13, 14, 18, -32];
// const printNumbersArray = () => {
//   const result2 = document.querySelector("#result2"); // ul
//   result2.innerHTML = "";
//   for (let i = 0; i < numbersArray.length; i++) {
//     const li = document.createElement("li");

//     if (numbersArray[i] > 0 && numbersArray[i] < 10) {
//       li.textContent = `${numbersArray[i]} : Single digit Positive number`;
//     } else if (numbersArray[i] < 0 && numbersArray[i] > -10) {
//       li.textContent = `${numbersArray[i]} : Single digit Negative number`;
//     } else if (numbersArray[i] < -9) {
//       li.textContent = `${numbersArray[i]} : Double digit Negative number`;
//     } else if (numbersArray[i] > 9) {
//       li.textContent = `${numbersArray[i]} : Double digit Positive number`;
//     } else {
//       li.textContent = `${numbersArray[i]} : Zero`;
//     }
//     result2.appendChild(li);
//   }
// };
// printNumbersArray();

// const strings = [
//   "apple",
//   "drumstick",
//   "orange",
//   "sweet potato",
//   "kiwi",
//   "cauliflower",
//   "grape",
//   "pear",
//   "bottle gourd",
//   "snake gourd",
// ];

// const printFruitsAndVegetable = () => {
//   const result3 = document.querySelector("#result3");

//   strings.forEach((string) => {
//     const li = document.createElement("li");
//     if (string.length <= 6) {
//       li.textContent = `${string} - Fruit`;
//     } else {
//       li.textContent = `${string} - Vegetable`;
//     }
//     result3.appendChild(li);
//   });
// };
// printFruitsAndVegetable()

// const words = ["apple", "banana", "kiwi", "orange", "grape"];
// const printWords = () => {
//   return words.map((word) => word.length);
// };
// console.log(printWords());

// const numbers = [1, 2, 3, 4, 5];
// const printNumbers = () => numbers.map((num) => num * num);
// console.log(printNumbers());
// var x;
// console.log(x);
// x = "raja";

// abc();
// function abc() {
//   console.log("raja");
// }

// def();
// def();
// var def;
// def();
// const def = () => {
// console.log("akash");
// };
// var def = () => {
// console.log("akash");
// };

// let def = () => {
//   console.log("akash");
// };

// outerFunction();
// outerFunction();
// outerFunction();

// function outerFunction() {
//   let count = 0;
//   function innerFunction() {
//     count++;
//     console.log(count);
//   }
//   return innerFunction();
// }

// Promises in js is an object which represent eventual completion of a async process

//1
// console.log("1");
// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 100);

// setTimeout(() => {
//   console.log("C");
// }, 0);
// console.log("D");

//2
// console.log("script start");
// setTimeout(() => {
//   console.log("timeout 1");
// }, 100);
// Promise.resolve().then(() => {
//   console.log("promise 1");
// });
// setTimeout(() => {
//   console.log("timeout 2");
// }, 50);
// console.log("script end");

// // script Start
// // p1
// // script end
// // t2
// // t1

// async function run() {
//   console.log("1");
//   console.log("2");
// }
// setTimeout(() => {
//   console.log("3");
// }, 50);
// run();
// console.log("4");

// // 4
// // 1
// // 2
// // 3

// console.log("A"); // sync

// setTimeout(() => {
//   console.log("B"); // macro task

//   Promise.resolve().then(() => {
//     console.log("C");
//   }); // micro task
// }, 100);

// Promise.resolve().then(() => {
//   console.log("D"); // micro task
// });

// console.log("E"); // sync code

// // A;
// // E;
// // D;
// // B;
// // C;

// console.log("start");

// setTimeout(() => {
//   console.log("timeout 1");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("promise 1");
// });

// async function asyncFunc() {
//   console.log("async start");
//   await Promise.resolve();
//   console.log("async end");
// }

// asyncFunc();

// setTimeout(() => {
//   console.log("timeout 2");
// }, 0);

// console.log("end");

// //       start
// // async start
// // end
// // promise 1
// // async end
// // timeout 1
// // timeout 2

// console.log("A");

// setTimeout(() => {
//   console.log("B");

//   Promise.resolve().then(() => {
//     console.log("C");
//   });
// }, 10);

// queueMicrotask(() => {
//   console.log("D");
// });

// Promise.resolve().then(() => {
//   console.log("E");
// });

// setTimeout(() => {
//   console.log("F");
// }, 0);

// console.log("G");

// // A;
// // G;
// // D;
// // E;

// console.log(foo());
// function foo() {
//   return "hello";
// }

// console.log(bar());
// var bar = function () {
//   return "hi";
// };

// // "hello"
// // ReferenceError

// console.log(typeof null);
// // Q1.2: Which of the following is a primitive data type in JavaScript?

// // 2. Variables
// // Q2.1: What will this code log?

// console.log(x);
// var x = 5;

// // Q2.2: Which variable declaration is block scoped and cannot be re-assigned?

// // 3. Operators
// // Q3.1: What is the result of 2 + "2" in JavaScript?

// // Q3.2: What will the following expression return?

// (true && false) || true;

// // 4. Conditionals
// // Q4.1: Fill in the blank: The switch statement compares values using the _______ operator.

// // Q4.2: What will be printed?

// let score = 85;
// let grade = score > 90 ? "A" : "B";
// console.log(grade);

// // 5. Loops
// // Q5.1: Which loop is guaranteed to run at least once, even if the condition is false?

// // Q5.2: What will this code output?

// const obj = { a: 1, b: 2 };
// for (let key in obj) {
//   console.log(key);
// }

// // Q5.3: What will be logged?
// const arr = [10, 20, 30];
// for (let value of arr) {
//   console.log(value);
// }

// // What will this code log?
// for (let i = 0; i < 3; i++) {
//   console.log("Loop:", i);
// }
// //  Loop: 0 Loop: 1 Loop: 2

// let i = 3;
// while (i > 0) {
//   console.log(i);
//   i--;
// }
// //3 2 1

// let count = 0;
// do {
//   count++;
// } while (count < 1);
// console.log(count);
// //0

// const obj2 = { x: 1, y: 2 };
// for (let key in obj2) {
//   console.log(`${key}: ${obj2[key]}`);
// }
// //. x: 1 y: 2

// const fruits = ["apple", "banana", "cherry"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// let str = "JS";
// for (let char of str) {
//   console.log(char);
// }
// // J S (on separate lines)

// for (let i = 0; i < 5; i++) {
//   if (i === 3) break;
//   console.log(i);
// }
// // 0 1 2

// let sum = 0;
// for (let i = 1; i <= 4; i++) {
//   sum += i;
// }
// console.log(sum);
// // 10

// const nums = [10, 20, 30];
// for (let index in nums) {
//   console.log(index);
// }
// 10 20 30

// function outer() {
//   let x = 10;
//   return function inner() {
//     console.log(x);
//   };
// }
// const fn = outer();
// fn();
// //10

// console.log(a); // undefined
// var a = 5;

// console.log(b); // ReferenceError
// let b = 10;

greet();
function greet() {
  console.log("Hello!");
}

sayHi();
const sayHi = () => {
  console.log("Hi");
};

let count = 0;
(function () {
  count++;
  console.log(count);
})();

const obj = {
  name: "JS",
  print: function () {
    console.log(this.name);
  },
};
obj.print();

const arr = [10, 20, 30];
const [a, , b] = arr;
console.log(a, b);
// 10 20

const person = {
  name: "Raja",
  age: 21,
};

const updated = { ...person, age: 22 };
console.log(updated.age);
//22

function sum(...nums) {
  return nums.reduce((acc, cur) => acc + cur, 0);
}

sum(5, 10, 15);
//30

// const user = {
//   name: "Akash",
//   greet() {
//     return `Hello, ${this.name}`;
//   },
// };

// const greetFn = user.greet;
// console.log(greetFn());
// //Error

// const nums = [1, 2, 3];
// const doubled = nums.map((n) => n * 2);
// console.log(doubled);
// //2,4,6

// const data = {
//   items: ["pen", "book"],
//   printItems() {
//     this.items.forEach(function (item) {
//       console.log(this, item);
//     });
//   },
// };

// data.printItems();
// //Error

// function multiplyBy(n) {
//   return function (x) {
//     return x * n;
//   };
// }

// const double = multiplyBy(2);
// console.log(double(5));

// (function (num) {
//   console.log(num * 2);
// })(4);
// //8

// var x = 5;

// function test() {
//   var x = 10;
//   console.log(x);
// }
// test();
// console.log(x);
// // 10 5

// {
//   let x = 10;
// }
// console.log(x);
// //error

// function outer() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = outer();
// console.log(counter());
// console.log(counter());
// // 1 2

// const obj = {
//   name: "Raja",
//   show: function () {
//     console.log(this.name);
//   },
// };
// obj.show();
// //Raja

// const person2 = {
//   age: 25,
//   getAge: () => {
//     console.log(this.age);
//   },
// };
// person2.getAge();
// // error

// const user2 = {
//   name: "Akash",
//   greet() {
//     setTimeout(() => {
//       console.log("Hello " + this.name);
//     }, 1000);
//   },
// };
// user2.greet();

// const createCounter = (step) => {
//   let count = 0;
//   return function () {
//     count += step;
//     console.log(count);
//   };
// };

// const counter2 = createCounter(5);
// counter2();
// counter2();
// counter2();
// console.log(this);

// const words = ["car", "bicycle", "airplane", "bus"];
// const wordsResult = words.reduce((acc, curr) => {
//   curr.length > acc.length ? (acc = curr) : acc;
//   return acc;
// }, "");
// console.log("wordsResult", wordsResult);

// const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
// const arrResult = arr.reduce((acc, curr) => {
//   acc = { ...acc, ...curr };
//   return acc;
// }, {});
// console.log("arrResult", arrResult);

// const sentence = "Hello World";
// const sentenseResult = sentence
//   .split("")
//   .filter((char) => char !== " ")
//   .reduce((acc, curr) => {
//     acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
//     return acc;
//   }, {});
// console.log("sentenseResult", sentenseResult);

// const animals = ["ant", "bear", "cat", "dog", "donkey"];
// const animalsResult = animals.reduce((acc, curr) => {
//   const firstLetter = curr[0];
//   if (!acc[firstLetter]) {
//     acc[firstLetter] = [];
//   }
//   acc[firstLetter].push(curr);
//   return acc;
// }, {});
// console.log("animalsResult", animalsResult);

// const numbers = [1, 2, 3, 4, 5, 6];
// const numbersResult = numbers.reduce((acc, curr) => {
//   let odd = 0;
//   let even = 0;
//   if (curr % 2 == 0) {
//     even++;
//     acc["even"] = (acc["even"] || 0) + 1;
//   } else {
//     odd++;
//     acc["odd"] = (acc["odd"] || 0) + 1;
//   }
//   return acc;
// }, {});
// console.log("numbersResult", numbersResult);

// const pairs = [
//   ["name", "Alice"],
//   ["age", 25],
//   ["role", "developer"],
// ];
// const pairsResult = pairs.reduce((acc, curr) => {
//   acc[curr[0]] = curr[1];
//   return acc;
// }, {});
// console.log("pairsResult", pairsResult);

// const users = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 24 },
//   { name: "Charlie", age: 28 },
// ];

// const totalAge = users.reduce((acc, curr) => acc + curr.age, 0);
// const averageAge = (totalAge / users.length).toFixed(2);

// console.log("Average Age:", averageAge);

// const users2 = [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Charlie", role: "admin" },
// ];

// const uniqueRoles = users2.reduce((acc, curr) => {
//   if (!acc.includes(curr.role)) {
//     acc.push(curr.role);
//   }
//   return acc;
// }, []);

// console.log("Unique Roles:", uniqueRoles);

// users2.forEach((user) => {
//   console.log(user.role);
// });

// console.log(users2.map((user) => user.role));

// const name = "raj";
// {
//   const name = "akash";
//   console.log(name);
// }
// console.log(name);

// console.log(name2);
// var name2 = "raj";

// printName();
// function printName() {
//   console.log("raj");
// }

// const printName2 = () => console.log("Akash");
// printName2();

// const obj1 = {
//   name: "raj kumar",
//   callTeacher: function () {
//     console.log(this.name);
//   },
// };

// obj1.callTeacher();

// const user = {
//   name: "Emma",
//   greet() {
//     console.log(`Hello, ${this.name}`);
//   },
// };

// const greetUser2 = user.greet;
// greetUser2();

// const person = {
//   name: "James",
//   logInfo: function () {
//     setTimeout(() => {
//       console.log(`${this.name}`);
//     }, 1000);
//   },
// };

// person.logInfo();

// const greeting = function () {
//   console.log(`Hello, ${this.name}`);
// };

// const user1 = { name: "John" };
// const user2 = { name: "Jane" };

// greeting.call(user1);
// greeting.call(user2);

// function displayInfo(age) {
//   console.log(`${this.name} is ${age} years old.`);
// }

// const obj2 = { name: "Lucas" };
// const obj3 = { name: "Anna" };

// displayInfo.apply(obj2, [25]);
// displayInfo.apply(obj3, [30]);

// function show() {
//   console.log(this);
// }

// show();

// const obj = {
//   count: 0,
//   increment: function () {
//     setInterval(() => {
//       this.count++;
//       console.log(this.count);
//     }, 1000);
//   },
// };

// obj.increment();

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     console.log(`Hello, ${this.name}`);
//   };
// }

// const person1 = new Person("John", 30);
// person1.greet();

// let promise1 = new Promise((resolve) => {
//   setTimeout(() => resolve("First"), 5000);
// });
// let promise2 = new Promise((resolve) =>
//   setTimeout(resolve, 2000, "Second got Error")
// );
// let promise3 = new Promise((resolve) =>
//   setTimeout(resolve, 3000, "Third")
// );

// Promise.all([promise1, promise2, promise3])
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// Promise.allSettled([promise1, promise2, promise3]).then((results) => {
//   console.log(results);
// });

// let promise4 = new Promise((resolve) =>
//   setTimeout(resolve, 1000, "First")
// );
// let promise5 = new Promise((resolve) =>
//   setTimeout(resolve, 2000, "Second")
// );

// Promise.race([promise4, promise5]).then((result) => {
//   console.log("race result: ", result);
// });

// const obj5 = { name: "Raj" };
// const obj6 = { ...obj5 };
// obj6.age = 23;
// console.log("Object ", obj5);
// console.log("Object ", obj6);

// const searchBtn = document.querySelector("#searchBtn");

// const debounce = (func, delay) => {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// };

// const handleSearch = () => {
//   const searchText = document.querySelector("#searchInput").value;
//   console.log("searchText", searchText);
// };

// searchBtn.addEventListener("click", debounce(handleSearch, 1000));

// const numbers = [10, 5, 8, 20, 15];
// const minnNum = numbers.reduce(
//   (acc, curr) => (acc > curr ? (acc = curr) : acc),
//   numbers[0]
// );
// console.log(minnNum);

// const numsArray = [10, 5, 8, 4, 6];
// const numNewArr = numsArray.reduce((acc, curr) => {
//   acc.push(curr - curr * curr);
//   return acc;
// }, []);
// console.log(numNewArr);

// const numArr2 = numsArray.map((num) => num - num * num);
// console.log(numArr2);

// const numbsArray = [3, -2, -5, 12, 8, -4, 7];
// const numArr3 = numbsArray.map((num) => (num < 0 ? num - num * 2 : num));
// console.log(numArr3);

// const sentencesArray = [
//   "JavaScript is a powerful programming language.",

//   "Web development involves frontend and backend technologies.",

//   "Coding is a skill that can be learned and mastered over time.",
// ];
// const sentenceArr = sentencesArray.map(
//   (str) => str + str.split(" ").length
// );
// console.log(sentenceArr);

// const cars = [
//   { brand: "Toyota", model: "Camry" },

//   { brand: "Honda", model: "Accord" },

//   { brand: "Ford", model: "Mustang" },
// ];
// const brandArr = cars.map((car) => car.brand);
// console.log(brandArr);

// const movies = [
//   { title: "Inception", genre: "Sci-Fi" },

//   { title: "The Shawshank Redemption", genre: "Drama" },

//   { title: "The Dark Knight", genre: "Action" },
// ];
// const moviesArr = movies.map((movie) => movie.genre);
// console.log(moviesArr);

// const printMovie = movies.forEach((movie) => console.log(movie.genre));

// const furniture = [
//   { type: "Sofa", width: 200, height: 80 },

//   { type: "Table", width: 120, height: 60 },

//   { type: "Chair", width: 50, height: 45 },
// ];
// const incresedDimension = furniture.map((data) => {
//   data.width = data.width + data.width * 0.1;
//   data.height = data.height + data.height * 0.1;
//   return data;
// });
// console.log(incresedDimension);

// const products = [
//   { name: "Laptop", price: 1200 },

//   { name: "Smartphone", price: 800 },

//   { name: "Headphones", price: 50 },

//   { name: "Camera", price: 300 },
// ];

// const NewProducts = products.map((product) => {
//   product.price <= 100 ? (product["affordable"] = true) : null;
//   return product;
// });
// console.log("NewProducts", NewProducts);

// const numbers = [12, 7, 15, -8, 22, -10, 5, 13, -18];
// const newNumArr = numbers.filter((num) => num < 0);
// console.log(newNumArr);

// const students = [
//   { name: "Alice", score: 85, activeParticipant: true, club: "Math" },

//   { name: "Bob", score: 55, activeParticipant: false, club: "History" },

//   {
//     name: "Charlie",
//     score: 75,
//     activeParticipant: true,
//     club: "Science",
//   },
// ];
// const filteresStudents = students.filter(
//   (student) =>
//     student.score > 70 &&
//     student.activeParticipant === true &&
//     (student.club === "Math" || "Science")
// );
// console.log(filteresStudents);

// const filteresStudents2 = () => {
//   let filteresArr = [];
//   for (let i = 0; i < students.length; i++) {
//     if (
//       (students[i].score > 75 &&
//         students[i].activeParticipant === true &&
//         students[i].club === "Math") ||
//       students[i].club === "Science"
//     ) {
//       filteresArr.push(students[i]);
//     }
//   }
//   return filteresArr;
// };
// console.log(filteresStudents2());

// const arrr = [11, 12, 12, 11, 23, 34];
// const arrResult = arrr.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {});
// console.log(arrResult);

// const words = [
//   "apple",
//   "banana",
//   "kiwi",
//   "grape",
//   "pear",
//   "orange",
//   "strawberry",
// ];
// const filterWord = words.filter(
//   (word) => word.length > 5 && word.includes("a")
// );
// console.log(filterWord);

// const books = [
//   {
//     title: "Harry Potter and the Sorcerer's Stone",
//     author: "J.K. Rowling",
//     genre: "Fantasy",
//   },

//   { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },

//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     genre: "Drama",
//   },

//   { title: "Dune", author: "Frank Herbert", genre: "Science Fiction" },
// ];

// const genreFilter = books.filter((book) => book.genre === "Fantasy");
// console.log(genreFilter);

const restaurants = [
  {
    name: "Pasta Paradise",
    stars: 4.5,
    cuisine: "Italian",
    openOnSundays: false,
  },

  {
    name: "Sushi Sensation",
    stars: 3.8,
    cuisine: "Japanese",
    openOnSundays: true,
  },

  {
    name: "Burger Binge",
    stars: 4.2,
    cuisine: "American",
    openOnSundays: true,
  },

  { name: "Nasi", stars: 4.5, cuisine: "Italian", openOnSundays: true },
];
const restaurantFilter = restaurants.filter(
  (restaurant) =>
    restaurant.stars > 4 &&
    restaurant.cuisine === "Italian" &&
    restaurant.openOnSundays === true
);
console.log(restaurantFilter);

const products2 = [
  { name: "Bread", price: 480, quantity: 3 },

  { name: "Clips", price: 200, quantity: 5 },

  { name: "green Bread Knife", price: 3077, quantity: 1 },

  { name: "Slipper", price: 150, quantity: 2 },
];

const newProductArr = products2
  .filter((product) => product.name.includes("Bread"))
  .map((product) => product.name);
console.log(newProductArr);

const employees = [
  { name: "David", salary: 60000 },

  { name: "Emma", salary: 75000 },

  { name: "Alex", salary: 90000 },

  { name: "Sophie", salary: 55000 },
];

const employeesTotalSalaray = employees.reduce((acc, curr) => {
  acc = acc + curr.salary;
  return acc;
}, 0);
const employeesAverageSalaray = employeesTotalSalaray / employees.length;
console.log(employeesAverageSalaray);

const newEmployees = employees.map((employee) => {
  employee["IsAbloveAverage"] =
    employee.salary > employeesAverageSalaray ? true : false;
  return employee;
});
console.log(newEmployees);

const community = [
  { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },

  { name: "Aakash", role: "mentor", hours: [1, 2, 3, 1, 2, 3, 0] },

  { name: "Ramesh", role: "student", hours: [1, 2, 3, 1, 2, 3, 3] },

  { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },

  { name: "Harsh", role: "student", hours: [1, 7, 3, 2, 2, 3, 0] },

  { name: "Akshay", role: "student", hours: [1, 6, 3, 1, 2, 3, 0] },

  { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },

  { name: "Mohan", role: "student", hours: [1, 8, 3, 0, 2, 3, 0] },
];

const communityResult = community.reduce((acc, curr) => {
  const mostHours = acc.hours.reduce(
    (acc, curr) => (acc = acc + curr),
    0
  );
  const currentHour = curr.hours.reduce(
    (acc, curr) => (acc = acc + curr),
    0
  );
  return mostHours > currentHour ? acc : curr;
});
console.log(communityResult);

const communityData = [
  { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },

  { name: "Aakash", role: "mentor", hours: [1, 2, 3, 4, 5, 6, 7] },

  { name: "Ramesh", role: "student", hours: [4, 5, 6, 4, 5, 6, 0] },

  { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },

  { name: "Harsh", role: "student", hours: [7, 8, 9, 7, 8, 9, 0] },

  { name: "Akshay", role: "student", hours: [1, 3, 5, 7, 9, 0, 2] },

  { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },

  { name: "Mohan", role: "student", hours: [4, 6, 8, 0, 1, 9, 2] },
];

const communityDataResult = communityData.map((person) => {
  const totalHours = person.hours.reduce((sum, h) => sum + h, 0);

  if (person.role === "student" && totalHours > 20) {
    return { ...person, tag: "regular" };
  }

  return person;
});

// most hour
// const communityDataResult = communityData.reduce((acc, curr) => {
//   const highestHour = acc.hours.reduce(
//     (acc, curr) => (acc = acc + curr),
//     0
//   );
//   const currentHour = acc.hours.reduce(
//     (acc, curr) => (acc = acc + curr),
//     0
//   );

//   return highestHour > currentHour ? acc : curr;
// });
console.log("communityDataResult", communityDataResult);

// const communityDataResult2 = communityData.map((data) => {
//   const totalHours = data.hours.reduce(
//     (acc, curr) => (acc = acc + curr),
//     0
//   );

//   if (data.role === "student" && totalHours > 20) {
//     return { ...data, tag: "regular" };
//   }
//   return data;
// });
// console.log("communityDataResult2", communityDataResult2);

// const checkNum = (a, b) => a / b;
// console.log(checkNum(4, 2));

// const reverseStr = (str) => {
//   let reverse = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse = reverse + str[i];
//   }
//   return reverse;
// };
// console.log(reverseStr("abc"));

// const createObj = (str) => ({
//   length: str.length,
//   uppercase: str.toUpperCase(),
// });
// console.log(createObj("Raja"));

// const calculateAverage = (arr) => {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total = total + arr[i];
//   }
//   let avg = total / arr.length;
//   return avg;
// };
// console.log(calculateAverage([5, 10, 15]));

const logFirstAndRest = (a, b, ...rest) => ({
  first: a,
  second: b,
  rest: rest,
});
console.log(logFirstAndRest(1, 2, 3, 4, 5));

// const calculateProduct = (...rest) =>
//   rest.reduce((acc, curr) => {
//     acc = acc * curr;
//     return acc;
//   }, 1);

// console.log(calculateProduct(2, 3, 4)); // Output: 24
// console.log(calculateProduct(5, 2, 1, 3)); // Output: 30

// const createSentence = (...rest) =>
//   rest.reduce((acc, curr) => {
//     acc = acc + curr + " ";
//     return acc;
//   }, "");
// console.log(createSentence("JavaScript", "is", "awesome"));

// const findSum = (str, ...rest) => {
//   let sum = rest.reduce((acc, curr) => {
//     acc = acc + curr;
//     return acc;
//   }, 0);
//   console.log(str, sum);
// };
// findSum("Sum of Numbers: ", 2, 4, 6, 8, 10);

// const containsValue = (a, ...rest) => (rest.includes(a) ? true : false);

// console.log(containsValue(3, 1, 2, 3, 4)); // Output: true
// console.log(containsValue("apple", "banana", "orange")); // Output: false

// const calculateAverage = (...rest) => {
//   let total = rest.reduce((acc, curr) => (acc = acc + curr), 0);
//   return (avg = total / rest.length);
// };

// console.log(calculateAverage(10, 5, 15)); // Output: 10
// console.log(calculateAverage(2, 4, 6, 8)); // Output: 5

// const copyAndAppend = (rest, a) => [...rest, a];
// console.log(copyAndAppend(["apple", "orange"], "banana"));

// const copyAndAdd = (arr, a) => [...arr, a];
// console.log(copyAndAdd([10, 20], 30));

// const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
// console.log(mergeArrays([10, 20], [30, 40, 50]));

// const mergeNameArrays = (arr1, arr2) => [...arr1, ...arr2];
// console.log(mergeNameArrays(["Alice", "Bob"], ["John", "Mac", "Maze"]));

// const copyPersonObject = (obj1, key, value) => ({
//   ...obj1,
//   [key]: value,
// });
// console.log(
//   copyPersonObject({ firstName: "Alice", age: 20 }, "lastName", "Johnson")
// );

// const copyEmployeeObject = (obj1, key, value) => ({
//   ...obj1,
//   [key]: value,
// });
// console.log(
//   copyEmployeeObject(
//     { employeeId: 243, name: "Bob", age: 20 },
//     "department",
//     "IT department"
//   )
// );

// const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
// console.log(mergeObjects({ x: "hello" }, { y: "world" }));

// const modifyObjectProperties = (obj1, obj2) => ({ ...obj1, ...obj2 });
// console.log(
//   modifyObjectProperties({ name: "Alice", age: 25 }, { age: 30 })
// );

// const mergeThreeArray = (arr1, arr2, arr3) => [...arr1, ...arr2, ...arr3];
// console.log(
//   mergeThreeArray([1, true], ["Are", "You", "Hungry"], [false, 2])
// );

// const sumAndDifference = (arr) => {
//   const [a, b] = arr;
//   return { sum: a + b, diffrence: a - b };
// };
// console.log(sumAndDifference([5, 3]));

// const extractFirstAndLast = (str) => {
//   return `firstCharacter: ${str[0]}, LastCharacter: ${
//     str[str.length - 1]
//   }`;
// };
// console.log(extractFirstAndLast("hello"));
// console.log(extractFirstAndLast("world"));

// const calculateRectangleArea = (obj) => {
//   const { length, width } = obj;
//   return `The area of the rectangle is: ${length * width}`;
// };
// console.log(calculateRectangleArea({ length: 5, width: 3 }));

// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
//   .then((message) => console.log(message))
//   .catch((error) => console.error(error));

// const p4 = Promise.resolve("A");
// const p5 = Promise.reject("B");

// Promise.all([p4, p5])
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

// async function load() {
//   console.log("Start");
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   console.log("End");
// }

// load();
// console.log("Outside");

// Promise.resolve()
//   .then(() => {
//     console.log("First");
//     return Promise.resolve("Second");
//   })
//   .then((res) => {
//     console.log(res);
//     throw new Error("Third");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// const SlovePromise = new Promise((resolve, reject) => {
//   const num = 5;
//   if (num > 2) {
//     resolve("Greater");
//   } else {
//     reject("Smaller");
//   }
// });

// SlovePromise.then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("finished"));
// promises
// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 1000);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("End");

// const num = [1, 2, 3, 4, 5, 6, 7];
// const align = num.reduce(
//   (acc, curr) => {
//     curr % 2 === 0 ? acc.even.push(curr) : acc.odd.push(curr);
//     return acc;
//   },
//   { even: [], odd: [] }
// );
// console.log(align)










     // call();
      // function call() {
      //   console.log("hello");
      // }

      // const call2 = () => {
      //   console.log("print 2");
      // };
      // call2();

      // const outerfunction = () => {
      //   let count = 0;
      //   return (inerfunction = () => {
      //     count++;
      //     return count;
      //   });
      // };

      // const print = outerfunction();
      // console.log(print());

      // const arr = [1, 2, 3, 4, 5];
      // for (let i = 0; i < arr.length; i++) {
      //   console.log(arr[i] * 2);
      // }

      // for (let val of arr) {
      //   console.log(val * 10);
      // }

      // const obj = { name: "raja", age: "23" };
      // for (let val in obj) {
      //   console.log(`${val} : ${obj[val]}`);
      // }

      // // let i = 0;
      // // while (i < 5) {
      // //   console.log(arr[i]);
      // //   i++;
      // // }

      // let i = 0;
      // do {
      //   console.log(i);
      //   i++;
      // } while (i < 5);

      // const doubleArray = arr.map((num) => num * 2);
      // console.log(doubleArray);

      // arr.forEach((num) => console.log(num));

      // const filteredArr = arr.filter((num) => num > 2);
      // console.log(filteredArr);

      // const total = arr.reduce((acc, curr) => {
      //   acc = acc + curr;
      //   return acc;
      // }, 0);
      // console.log(total);
      // console.log("average: ", total / arr.length);

      // const fruits = ["apple", "banana", "apple", "strawberry"];
      // const longestWord = fruits.reduce((acc, curr) => {
      //   curr.length > acc.length ? (acc = curr) : acc;
      //   return acc;
      // }, "");
      // console.log(longestWord);

      // const repeatedWord = fruits.reduce((acc, curr) => {
      //   acc[curr] = (acc[curr] || 0) + 1;
      //   return acc;
      // }, {});
      // console.log(repeatedWord);

      // const evenAndOdd = arr.reduce(
      //   (acc, curr) => {
      //     curr % 2 === 0 ? acc.even.push(curr) : acc.odd.push(curr);
      //     return acc;
      //   },
      //   { even: [], odd: [] }
      // );
      // console.log(evenAndOdd);

      // const newArr = [...arr];
      // console.log(arr);
      // console.log([...newArr, 6]);

      // const newObj = { ...obj };
      // console.log({ ...obj, ["city"]: "Delhi" });

      // const obj3 = {
      //   name: { firstname: "raja", middleName: "akash" },
      //   age: 23,
      // };

      // const shallowCopy = { ...obj3 };
      // // console.log(shallowCopy)
      // //  shallowCopy.name.firstname="Kumar";
      // console.log(obj3);
      // console.log("shallowCopy", { ...shallowCopy, ["city"]: "New Delhi" });

      // const deepCopy = structuredClone(obj3);
      // deepCopy.name.firstname = "kumar";
      // console.log("deepCopy", deepCopy);

      // console.log(this);

      // const teacher = {
      //   name: "Akash",
      //   greet: function (age = 23) {
      //     console.log("Hello,", this.name, age);
      //   },
      // };

      // teacher.greet();

      // const teacher2 = { name: "Ankita" };
      // teacher.greet.call(teacher2, 28);
      // teacher.greet.apply(teacher2, [58]);
      // const teacher3 = { name: "Ankit" };
      // const greet = teacher.greet.bind(teacher3);
      // greet(24);

      // const promise1 = new Promise((resolve) => resolve("Done1"));
      // const promise2 = new Promise((resolve) => resolve("Done2"));
      // const promise3 = new Promise((resolve, reject) => reject("reject"));

      // Promise.all([promise1, promise2, promise3])
      //   .then((message) => console.log(message))
      //   .catch((err) => console.error(err));

      // Promise.allSettled([promise1, promise2, promise3])
      //   .then((message) => console.log(message))
      //   .catch((err) => console.error(err));

      //   const p1 = 
      //   Prmise.race([promise1, promise2, promise3]).then((message) => console.log(message))