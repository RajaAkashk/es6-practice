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
console.log(
  modifyObjectProperties({ name: "Alice", age: 25 }, { age: 30 })
);

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

      // greet();
      // function greet() {
      //   console.log("Hello!");
      // }

      // sayHi();
      // const sayHi = () => {
      //   console.log("Hi");
      // };

      // let count = 0;
      // (function () {
      //   count++;
      //   console.log(count);
      // })();

      // const obj = {
      //   name: "JS",
      //   print: function () {
      //     console.log(this.name);
      //   },
      // };
      // obj.print();

      // const arr = [10, 20, 30];
      // const [a, , b] = arr;
      // console.log(a, b);
      // // 10 20

      // const person = {
      //   name: "Raja",
      //   age: 21,
      // };

      // const updated = { ...person, age: 22 };
      // console.log(updated.age);
      // //22

      // function sum(...nums) {
      //   return nums.reduce((acc, cur) => acc + cur, 0);
      // }

      // sum(5, 10, 15);
      // //30

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
