
//  Ques 1 ===============
var myVar = 'globalVar';
let myLet = 'globalLet';
const myConst = 'globalConst';

console.log(myVar); // Output: globalVar
console.log(myLet); // Output: globalLet
console.log(myConst); // Output: globalConst

function myFunction() {
  console.log(myVar); // Output: globalVar
  console.log(myLet); // Output: globalLet
  console.log(myConst); // Output: globalConst
}

myFunction(); 

//  Ques 2 ===============

function testFunctionScope() {
    var functionScopedVar = 'functionVar';
    let functionScopedLet = 'functionLet';
    const functionScopedConst = 'functionConst';
}

testFunctionScope();

console.log(functionScopedVar); // ReferenceError: functionScopedVar is not defined
console.log(functionScopedLet); // ReferenceError: functionScopedLet is not defined
console.log(functionScopedConst); // ReferenceError: functionScopedConst is not defined




//  Ques 3 ===============
console.log(declaredLet); // ReferenceError: Cannot access 'declaredLet' before initialization
let declaredLet = 'letVar'; 
console.log(declaredConst); // ReferenceError: Cannot access 'declaredConst' before initialization
const declaredConst = 'constVar';

//  Ques 4 ===============
var school = 'jwp';
school = 'newJwp';
console.log(school); // Output: newJwp
let college = 'letVar';
college = 'jawan college';
console.log(college); // Output: jawan college

const constVar = 'constVar';
constVar = 'newConstVar'; // TypeError: Assignment to constant variable.

//  Ques 5 ===============
{
    console.log(letVar); // ReferenceError: Cannot access 'letVar' before initialization
    let letVar = 'letVar';
}

{
    console.log(constVar); // ReferenceError: Cannot access 'constVar' before initialization
    const constVar = 'constVar';
}


// Ques 6 ===============
Use case for var
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// Use case for let
if (true) {
    let letVar = 10;
    console.log(letVar);
}

// Use case for const
const PI = 3.14;
console.log(PI);



// Ques 7 ===============
const firstName = 'Huzaifa';
const lastName = 'Asghar';
const fullName = `${firstName} ${lastName}`;
console.log(fullName); //output: Huzaifa Asghar

//ques 8 ===============
const num1 = 5;
const num2 = 10;
const sumString = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
console.log(sumString); // Output: The sum of 5 and 10 is 15.


//ques 9 ===============

function multiply(num1, num2) {
    return num1 * num2;
}

const result = `The product of 5 and 10 is ${multiply(5, 10)}.`;
console.log(result); // Output: The product of 5 and 10 is 50.

function logTemplate(strings, ...values) {
    console.log(strings[0]);
    for (let i = 0; i < values.length; i++) {
        console.log(values[i]);
    }
    console.log(strings[1]);
}

logTemplate`Hey, I'm ${'Huzaifa'}. I'm ${'awesome'}.`; //output: Hey, I'm Huzaifa. I'm awesome.


//ques 10 ===============

const currentHour = 13;

const message = currentHour < 12 ?
    `Good morning! It's ${currentHour} o'clock.` :
    `Good afternoon! It's ${currentHour} o'clock.`;

console.log(message); // Output: Good afternoon! It's 13 o'clock.


// Loops within Template Literals:
const shoppingList = ['Apples', 'Bananas', 'Carrots', 'Dates', 'Eggs'];

const htmlList = `
<ul>
  ${shoppingList.map(item => `<li>${item}</li>`).join('')}
</ul>
`;

console.log(htmlList);

// Escaping Backticks:

const stringWithBacktick = `This string contains a backtick: \` `;
console.log(stringWithBacktick);

// Nested Template Literals:----------------

const tableData = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 25, city: "Los Angeles" },
    { name: "Charlie", age: 35, city: "Chicago" }
];

const tableHTML = `
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
    </thead>
    <tbody>
        ${tableData.map(person => `
            <tr>
                <td>${person.name}</td>
                <td>${person.age}</td>
                <td>${person.city}</td>
            </tr>
        `).join('')}
    </tbody>
</table>
`;

console.log(tableHTML);


// Simple Condition:------------------------


const age = 19;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);


// Even or Odd:---------------
const number = 8;
const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd);


// Grade Evaluation:-----------
const score = 87;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(grade);


// Login Status:-------
const isLoggedIn = true;
const statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(statusMessage);


// Discount Eligibility:
const isMember = true;
const purchaseAmount = 150;
const discount = isMember && purchaseAmount > 100 ? purchaseAmount * 0.1 : 0;
console.log(discount);


// Determine Max Value:
function maxValue(a, b) {
    return a > b ? a : b;
}
console.log(maxValue(10, 20));


// Greeting Message:
function greet(name) {
    return name ? `Hello, ${name}!` : "Hello, guest!";
}

console.log(greet("John"));
console.log(greet());


// Mapping Values:
const numbers = [1, 2, 3, 4, 5];
const mappedNumbers = numbers.map(number => number % 2 === 0 ? number * 2 : number * 3);
console.log(mappedNumbers);


// Filtering Values:
const strings = ["Hello", "World", "a", "b", "c"];
const filteredStrings = strings.filter(string => string.length > 3);
console.log(filteredStrings);

// Copying an Array:
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(originalArray);
console.log(copiedArray);

// Merging Arrays:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);

// Adding Elements to an Array:
const numbers1 = [2, 4, 6];
const newNumbers = [1, ...numbers1, 8];
console.log(newNumbers1);

// Copying an Object:
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
console.log(originalObject);
console.log(copiedObject);

// Merging Objects:
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject);

// Updating Object Properties:
const user = { name: "John", age: 30, email: "john@example.com" };
const updatedUser = { ...user, email: "john.doe@example.com", address: "123 Main St" };
console.log(updatedUser);


// Passing Array Elements as Arguments:
function sum(a, b, c) {
    return a + b + c;
}

const numbers2 = [2, 4, 6];
console.log(sum(...numbers2));


// Combining Multiple Arrays:
function combineArrays(...arrays) {
    return [...arrays].flat();
}

const array4 = [1, 2, 3];
const array5 = [4, 5, 6];
const array3 = [7, 8, 9];
console.log(combineArrays(array4, array5, array3));


// Rest Parameter with Spread Operator:
function multiply(number, ...numbers) {
    return numbers.map(num => number * num);
}

console.log(multiply(2, 3, 4, 5));


// Spread Operator with Nested Structures:
const nestedArray = [[1, 2], [3, 4]];
const shallowCopy = [...nestedArray];

shallowCopy[0].push(5);
shallowCopy[1].push(6);

console.log(nestedArray);
console.log(shallowCopy);


// Sum Function:
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 20, 30));
console.log(sum(4, 5, 6, 7, 8, 9));


// Average Function:
function average(...numbers) {
    return numbers.reduce((total, num) => total + num, 0) / numbers.length;
}

console.log(average(1, 2, 3, 4, 5));
console.log(average(10, 20, 30));
console.log(average(4, 5, 6, 7, 8, 9));



// First and Rest
const numbers4 = [10, 20, 30, 40, 50];
const [first, ...rest] = numbers4;
console.log(first); // 10
console.log(rest); // [20, 30, 40, 50]

// Skip and Rest
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
const [, , ...remainingColors] = colors;
console.log(remainingColors); // ['blue', 'yellow', 'purple']

// Basic Destructuring
const person = { name: 'Alice', age: 25, email: 'alice@example.com', address: '123 Main St' };
const { name, email, ...restPerson } = person;
console.log(name); // Alice
console.log(email); // alice@example.com
console.log(restPerson); // { age: 25, address: '123 Main St' }

// Nested Destructuring
const student = {
    id: 1,
    name: 'Bob',
    grades: [90, 80, 85],
    info: { age: 20, major: 'Computer Science' }
};
const { id, name: studentName, info: { major }, ...restStudent } = student;
console.log(id); // 1
console.log(studentName); // Bob
console.log(major); // Computer Science
console.log(restStudent); // { grades: [90, 80, 85], info: { age: 20 } }

// Filter Even Numbers
function filterEven(...numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterEven(1, 2, 3, 4, 5)); // [2, 4]
console.log(filterEven(10, 15, 20, 25)); // [10, 20]
console.log(filterEven(6, 7, 8, 9, 10)); // [6, 8, 10]


// Combine and Sort Arrays:
function combineAndSort(...arrays) {
    return [...arrays].flat().sort((a, b) => a - b);
}

console.log(combineAndSort([3, 1], [2, 4], [10, 5]));
console.log(combineAndSort([10, 20], [5, 15], [7, 12]));


// Basic Destructuring:
const fruits = ["apple", "banana", "cherry"];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit); // apple
console.log(secondFruit); // banana
console.log(thirdFruit); // cherry


// Skipping Elements:
const colors = ["red", "green", "blue", "yellow"];
const [primaryColor, , tertiaryColor] = colors;
console.log(primaryColor); // red
console.log(tertiaryColor); // blue


// Rest Operator:
const numbers = [1, 2, 3, 4, 5];
const [firstNumber, ...remainingNumbers] = numbers;
console.log(firstNumber); // 1
console.log(remainingNumbers); // [2, 3, 4, 5]


// Basic Destructuring:
const person = {
    name: "Ali",
    age: 30,
    city: "New York"
};
const { name, age, city } = person;
console.log(name); // Ali
console.log(age); // 30
console.log(city); // New York


// Renaming Variables:
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2015
};
const { make: carMake, model: carModel, year: carYear } = car;
console.log(carMake); // Toyota
console.log(carModel); // Corolla
console.log(carYear); // 2015

const settings = {
    theme: "light",
    language: "English"
};
const { theme, language = "English" } = settings;
console.log(theme); // light
console.log(language); // English


const nestedArray = [[1, 2], [3, 4], [5, 6]];
const [a, b, c] = nestedArray.map(([x]) => x);
console.log(a); // 1
console.log(b); // 3
console.log(c); // 5


const profile = {
    username: "Ali",
    details: {
        email: "Ali@example.com",
        address: "123 Main St"
    }
};
const { username, details: { email, address } } = profile;
console.log(username); // Ali
console.log(email); // Ali@example.com
console.log(address); // 123 Main St


const data = {
    id: 1,
    info: [{ name: "Ali" }, { age: 25 }]
};
const { id, info: [{ name }, { age }] } = data;
console.log(id); // 1
console.log(name); // Ali
console.log(age); // 25


function printCoordinates([x, y]) {
    console.log(x);
    console.log(y);
}
printCoordinates([10, 20]);
printCoordinates([30, 40]);


function displayUser({ name, age }) {
    console.log(name);
    console.log(age);
}
displayUser({ name: "Alice", age: 25 });
displayUser({ name: "Bob", age: 30 });


const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};
console.log(Object.keys(book)); // ["title", "author", "year"]


const student = {
    name: "John",
    age: 20,
    grade: 85,
    school: "Harvard"
};
console.log(Object.keys(student).length); // 4


const product = {
    name: "iPhone",
    price: 999,
    category: "electronics"
};
Object.keys(product).forEach(key => {
    console.log(`${key}: ${product[key]}`);
});


const movie = {
    title: "The Matrix",
    director: "The Wachowskis",
    year: 1999,
    genre: "sci-fi"
};
console.log(Object.values(movie)); // ["The Matrix", "The Wachowskis", 1999, "sci-fi"]


const scores = {
    math: 90,
    science: 85,
    english: 95
};
const sum = Object.values(scores).reduce((total, num) => total + num);
console.log(sum); // 270


const user = {
    username: "Ali",
    email: "Ali@example.com",
    location: "New York"
};
Object.values(user).forEach(value => {
    console.log(value);
});


const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2015
};
console.log(Object.entries(car)); // [["make", "Toyota"], ["model", "Corolla"], ["year", 2015]]


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};
const personArray = Object.entries(person);
console.log(personArray);
// [["firstName", "John"], ["lastName", "Doe"], ["age", 25]]


const settings = {
    theme: "light",
    notifications: true,
    privacy: false
};
Object.entries(settings).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
// theme: light
// notifications: true
// privacy: false


const inventory = {
    apples: 15,
    bananas: 27,
    oranges: 36,
    grapes: 19
};
const keys = Object.keys(inventory).filter(key => inventory[key] > 10);
console.log(keys);
// ["apples", "bananas", "oranges"]


const temperatures = {
    morning: 10,
    afternoon: 20,
    evening: 30
};
const fahrenheit = Object.fromEntries(
    Object.entries(temperatures).map(([key, value]) => [key, value * 9 / 5 + 32])
);
console.log(fahrenheit);
// { morning: 50, afternoon: 68, evening: 86 }


const roles = {
    admin: "Manage all",
    editor: "Edit all",
    viewer: "View all"
};
const newRoles = Object.fromEntries(
    Object.entries(roles).map(([key, value]) => [value, key])
);
console.log(newRoles);
// { "Manage all": "admin", "Edit all": "editor", "View all": "viewer" }

// Filter and Map
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterAndMap = (array, filterFn, mapFn) => array.filter(filterFn).map(mapFn);
const result = filterAndMap(numbers, num => num % 2 !== 0, num => num ** 2);
console.log(result); // [1, 9, 25, 49, 81]

// Sort and Reduce
const words = ["apple", "banana", "cherry", "date"];
const sortAndReduce = (array, sortFn, reduceFn) => array.sort(sortFn).reduce(reduceFn, "");
const message = sortAndReduce(words, (a, b) => a.localeCompare(b), (acc, curr) => acc + curr);
console.log(message); // "applebananacherrydate"

// Simple Callback
const greet = (name, callback) => callback(`Hello, ${name}!`);
const printGreeting = message => console.log(message);
greet("John", printGreeting);

// Asynchronous Callback
const fetchData = (callback) => {
    setTimeout(() => {
        const data = "Data from the server";
        callback(data);
    }, 2000);
};
const displayData = data => console.log(data);
fetchData(displayData);

// Simple Arrow Function
const add = (a, b) => a + b;
console.log(add(3, 5)); // 8

// Arrow Function with Array Methods
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]


// Variable Scope:

function outer() {
    let x = 10;
    function inner() {
        console.log(x);
    }
    inner();
}
outer();

// Closure:

function createCounter() {
    let counter = 0;
    return function() {
        counter++;
        console.log(counter);
    }
}
const counter1 = createCounter();
const counter2 = createCounter();

counter1();
counter1();
counter2();
counter2();

// Simple Default Parameters:

function greet(name, message = "Hello") {
    console.log(`${message}, ${name}!`);
}
greet("John");
greet("John", "Hi");

// Default Parameters with Other Arguments:

function calculateArea(width = 10, height = 5) {
    return width * height;
}
console.log(calculateArea());
console.log(calculateArea(20, 10));

// Square Numbers:

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers);

// Convert to Uppercase:

const words = ["apple", "banana", "cherry"];
const upperWords = words.map(word => word.toUpperCase());
console.log(upperWords);

// Filter Even Numbers:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Filter Long Words:

const words = ["apple", "banana", "cherry", "date"];
const longWords = words.filter(word => word.length > 5);
console.log(longWords);

// Log Numbers:

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));



// Log Word Lengths:
const words = ["apple", "banana", "cherry"];
words.forEach(word => console.log(word.length));

// Sum of Numbers:
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr);
console.log(sum);

// Concatenate Strings:
const words = ["Hello", "world", "this", "is", "JavaScript"];
const sentence = words.reduce((acc, curr) => acc + " " + curr);
console.log(sentence);

// Check for Even Number:
const numbers = [1, 3, 5, 7, 8];
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber);

// Check for Long Word:
const words = ["apple", "banana", "cherry", "date"];
const hasLongWord = words.some(word => word.length > 5);
console.log(hasLongWord);

// Check All Even Numbers:
const numbers = [2, 4, 6, 8, 10];
const allEvenNumbers = numbers.every(num => num % 2 === 0);
console.log(allEvenNumbers);

// Check All Long Words:
const words = ["elephant", "giraffe", "hippopotamus"];
const allLongWords = words.every(word => word.length > 5);
console.log(allLongWords);

// Find First Even Number:
const numbers = [1, 3, 5, 7, 8];
const firstEvenNumber = numbers.find(num => num % 2 === 0);
console.log(firstEvenNumber);

// Find Long Word:
const words = ["apple", "banana", "cherry", "date"];
const longWord = words.find(word => word.length > 5);
console.log(longWord);

// Find Index of First Even Number:
const numbers = [1, 3, 5, 7, 8];
const index = numbers.findIndex(num => num % 2 === 0);
console.log(index);

// Find Index of Long Word:
const words = ["apple", "banana", "cherry", "date"];
const index = words.findIndex(word => word.length > 5);
console.log(index);

// Simple Promise:
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
delay(2000).then(() => console.log("Hello, world!"));

// Promise Chain:
function fetchData() {
    return new Promise(resolve => {
        const data = { name: "John", age: 30 };
        setTimeout(() => resolve(data), 1000);
    });
}
fetchData().then(data => console.log(data));

// Error Handling:
function fetchUserData() {
    return new Promise((resolve, reject) => {
        const userData = { name: "Jane" };
        setTimeout(() => {
            if (userData.age) {
                resolve(userData);
            } else {
                reject("User data is missing age property");
            }
        }, 1000);
    });
}
fetchUserData()
    .then(userData => console.log(userData))
    .catch(error => console.error(error));

// Simulate Network Request:
function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve({ temperature: 25, description: "Sunny" });
            } else {
                reject("Error fetching weather data");
            }
        }, 1000);
    });
}
getWeather()
    .then(weather => console.log(weather))
    .catch(error => console.error(error));



// Simple async Function:
async function sayHello() {
    await delay(2000);
    console.log("Hello, world!");
}

// Fetch Data with async/await:
async function getUserData() {
    try {
        const userData = await fetchUserData();
        console.log(userData);
    } catch (error) {
        console.error(error);
    }
}

// Fetch and Process Data:
function fetchUser() {
    return new Promise((resolve, reject) => {
        const userData = { name: "John", age: 30 };
        setTimeout(() => {
            if (userData) {
                resolve(userData);
            } else {
                reject("User data not found");
            }
        }, 1000);
    });
}

function fetchPosts(user) {
    return new Promise((resolve, reject) => {
        const posts = [
            { title: "Post 1", content: "This is the first post" },
            { title: "Post 2", content: "This is the second post" },
        ];
        setTimeout(() => {
            if (posts) {
                resolve(posts);
            } else {
                reject("Posts not found");
            }
        }, 1000);
    });
}

async function getUserAndPosts() {
    try {
        const userData = await fetchUser();
        const posts = await fetchPosts(userData);
        console.log(userData);
        console.log(posts);
    } catch (error) {
        console.error(error);
    }
}

// Error Handling in async/await:
function fetchUserWithErrors() {
    return new Promise((resolve, reject) => {
        const userData = { name: "Jane", age: 25 };
        setTimeout(() => {
            if (userData) {
                resolve(userData);
            } else {
                reject("User data not found");
            }
        }, 1000);
    });
}

async function getUserInfo() {
    try {
        const userData = await fetchUserWithErrors();
        console.log(userData);
    } catch (error) {
        console.error(error);
    }
}

// Simulate API Calls:
function apiCall() {
    return new Promise((resolve, reject) => {
        const data = { message: "Hello, world!" };
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve(data);
            } else {
                reject("Error occurred during API call");
            }
        }, Math.random() * 2000);
    });
}

async function getData() {
    try {
        const data1 = await apiCall();
        console.log(data1);
        const data2 = await apiCall();
        console.log(data2);
        const data3 = await apiCall();
        console.log(data3);
    } catch (error) {
        console.error(error);
    }
}








































