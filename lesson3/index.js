// Примитивные типы данных:

// Number

// console.log(1 / 0);
 console.log(typeof NaN);

//  Оператор typeof показывает тип данных, указанный после typeof 

// String

const myString = "строка";

const anotherString = "строка";

console.log(myString);

let myString = "строка";

// Boolean

const isAdmin = true;
const isUser = false;

// Null
const emptyVariable = null;

// undifiend
const userName;
// console.log(userName);

// Непримитивные типы данных;
// Object

const user = {
    name: 'Vasya',
    lastName: 'Ivanov',
    age: 23,
    citizenship: "Russia",
    newObject :{
        newProperty:'property' 
    }
   };

   const myVar = true;

   const myVarToString = String(myVar);
   console.log(myVarToString);


const myVar = "123";

const myVarToNumber = Number(myVar)

console.log(typeof myVarToNumber);

const myVar = 1;

console.log(!!myVar);

const myNumber = 1;
const newNumber = 2;
const myString = "строка";

console.log(myNumber + myString);

const userType = {
    admin: "admin",
    user: "user",
    teacher: "teacher",
    contentManager: "contentManager",
};

const serverDataUserType = "user";

if (serverDataUserType === userTypes.admin) {
    console.log("показать весь кониент");
} else {
    console.log("показать весь контент");
}

console.log("\t \n"-2);
