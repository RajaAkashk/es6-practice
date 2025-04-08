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

//       const isBirthday = true;
//       let age = 23;
//       if (isBirthday) {
//         age++;
//       }
//       console.log("Program 1:");
//       console.log(`Current Age: ${age}`);
//       console.log("\n");

//       console.log("Program 2:");
//       const passengerAge = 65;
//       const ticketPrice = 500;
//       if (passengerAge >= 65) {
//         const discountedPrice = ticketPrice - ticketPrice * 0.15;
//         console.log(`Ticket price for age greater than 60: ${discountedPrice}`);
//       } else {
//         console.log(
//           `Ticket price for age less than or equal to 60: ${ticketPrice}`
//         );
//       }
//       console.log("\n");

//       console.log("Program 3:");
//       const num1 = 1;
//       const num2 = 2;
//       const num3 = 3;
//       if (num1 > num2 && num1 > num3) {
//         console.log("num1 is greater.");
//       } else if (num2 > num3 && num2 > num1) {
//         console.log("num2 is greater.");
//       } else {
//         console.log("num3 is greater.");
//       }
//       console.log("\n");

//       console.log("calculateBonus");
//       const calculateBonus = (workedHours, marks, salary) => {
//         let bonus = 0;
//         if (workedHours > 25 && marks > 85) {
//           bonus = salary + salary * 0.1;
//         } else if (workedHours > 15 && marks > 75) {
//           bonus = salary + salary * 0.05;
//         } else {
//           bonus = 0;
//         }
//         return bonus;
//       };
//       console.log(calculateBonus(20, 80, 5000));
//       const array = [5, 12, 7, 25, 18, 3];

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

// console.log("program 3");
// const convertAllToEven = () => {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       newArr.push(array[i]);
//     } else {
//       newArr.push(array[i] + 1);
//     }
//   }
//   return newArr;
// };
// console.log(convertAllToEven());

// console.log("program 4");
// const numDivisibleByTwo = () => {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr;
// };
// console.log(numDivisibleByTwo());

// console.log("program 5");
// const sumOfAll = () => {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     total = total + array[i];
//   }
//   return total;
// };
// console.log(sumOfAll());

// console.log("program 6");
// const sumOfOddAndEven = () => {
//   let sumOfOdd = 0;
//   let sumOfEven = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       sumOfEven = sumOfEven + array[i];
//     } else {
//       sumOfOdd = sumOfOdd + array[i];
//     }
//   }
//   return { sumOfEven, sumOfOdd };
// };
// console.log(sumOfOddAndEven());

// console.log("program 1");
// const car = {
//   brand: "Honda",
//   model: "Corolla",
// };
// console.log(car.brand);
// console.log(car.model);

// car.brand = "Toyota";

// console.log(car);
// car["year"] = 2022;
// car["color"] = "blue";
// console.log(car);
// const printVal = () => {
//   for (val in car) {
//     console.log(val, ":", car[val]);
//   }
// };
// printVal();

// console.log("\n");
// console.log("program 2");
// const citizen = {
//   name: "ramu",
//   age: 29,
//   occupation: "Doctor",
// };
// citizen.age = 68;
// citizen.age = citizen.age + 2;
// citizen["city"] = "Delhi";
// for (value in citizen) {
//   console.log(value, ":", citizen[value]);
// }
// console.log("\n");

// console.log("Program 3");
// const students = [
//   { name: "Rahul", rollNo: 101, hindi: 80, english: 75, maths: 90 },
//   { name: "Amit", rollNo: 102, hindi: 85, english: 70, maths: 95 },
//   { name: "Priya", rollNo: 103, hindi: 78, english: 92, maths: 87 },
// ];

// for (let i = 0; i < students.length; i++) {
//   const marksForComputer = [88, 92, 95];
//   students[i]["computer"] = marksForComputer[i];
// }

// for (let i = 0; i < students.length; i++) {
//   const marksForScience = [82, 90, 88];
//   students[i]["science"] = marksForScience[i];
// }
// console.log("students", students);

// const newStudent = {
//   name: "Kaveri",
//   rollNo: 104,
//   hindi: 84,
//   english: 88,
//   maths: 78,
//   computer: 90,
//   science: 86,
// };
// students.push(newStudent);

// const updatedStudentdata = () => {
//   for (let i = 0; i < students.length; i++) {
//     for (val in students[i]) {
//       console.log(val, ":", students[i][val]);
//     }
//   }
// };

// console.log("updated Student data:", updatedStudentdata());

// const checkNum = (num) => num % 2 === 0;
// console.log(checkNum(3));
// const convert = (str) => str.toUpperCase();
// console.log(convert("raj"));

// const joinName = (firstName, lastName) => ({ firstName, lastName });
// console.log(joinName("raja", "akash"));

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

// const isAnyBelow18 = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].age < 18) {
//       newArr.push(arr[i].name);
//     }
//   }
//   if (newArr.length === 0) {
//     return false;
//   } else {
//     return newArr;
//   }
// };
// console.log(isAnyBelow18(students));

// const logFirstAndRest = (first, ...rest) => console.log(first, ",", rest);
// logFirstAndRest("a", "b", "c", "d");

// const logFirstAndSecond = (first, second, ...string) =>
//   console.log(first, second, string);
// logFirstAndSecond(12, 22, 33, 44, 55);

// const calculateProduct = (...numbers) => {
//   console.log(numbers);
//   let total = 1;
//   for (let i = 0; i < numbers.length; i++) {
//     total *= numbers[i];
//   }
//   return total;
// };
// console.log(calculateProduct(2, 3, 4));
// console.log(calculateProduct(5, 2, 1, 3));

// const createSentence = (...strings) => strings.join();
// console.log(createSentence("JavaScript", "is", "awesome"));

// const containsValue = (value, ...array) => array.includes(value);
// console.log(containsValue(3, 1, 2, 3, 4));
// console.log(containsValue("apple", "banana", "orange"));

// const copyAndAdd = (arr, element) => [...arr, element];
// console.log(copyAndAdd([10, 20], 30));

// const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
// console.log(mergeArrays([10, 20], [30, 40, 50]));

// const copyPersonObject = (obj, key, value) => ({ ...obj, [key]: value });
// console.log(
//   copyPersonObject({ firstName: "Alice", age: 20 }, "lastName", "Johnson")
// );

// const copyEmployeeObject = (obj, key, value) => ({
//   ...obj,
//   [key]: value,
// });
// console.log(
//   copyEmployeeObject(
//     { employeeId: 243, name: "Bob", age: 20 },
//     "department",
//     "IT department"
//   )
// );

// const modifyObjectProperties = (obj1, obj2) => ({ ...obj1, ...obj2 });
// console.log(
//   modifyObjectProperties({ name: "Alice", age: 25 }, { age: 30 })
// );

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
