// https://www.youtube.com/watch?v=x16Z_U1tGrc     youtube Link

// const str = "Code Explained code";
// const str1 = new String("Code Explained");
// const s = "The code undefined code code!";
// const string = "The morning is upon us.";

// console.log(str.length);
// console.log(typeof str);
// console.log(str[20]);
// console.log(str1[-1]);
// undefined
// console.log(str[str.length - 1]);

// console.log(str1);
// console.log(typeof str1);
// console.log(str1.length);
// console.log(str1[0]);

// console.log(str.charAt(0));
// console.log(str.charAt(str.length - 1));

// console.log(s.indexOf("Code"));
// console.log(s.lastIndexOf("Code"));
// console.log(s.indexOf("code"));
// console.log(s.lastIndexOf("code"));
// console.log(s.indexOf("code", 4));
// console.log(s.lastIndexOf("code", 24));
// console.log(s.indexOf("code", 5));
// console.log(s.lastIndexOf("code", 23));
// console.log(s.indexOf("code", -5));
//  negative value starts from zero index
// console.log(s.lastIndexOf("code", -5));
// console.log(s.indexOf(""));
// console.log(s.lastIndexOf(""));
// console.log(s.indexOf());
// console.log(s.lastIndexOf());

// if indexStart is greater then length of string or in negative in substring then it treated as 0
// if indexStart & indexEnd are negative in substring then it treated as 0
// if indexStart is greater then indexEnd the both replace to each other in substring only not in slice
// console.log(string.slice(12));
// console.log(string.substring(12));
// console.log(string.slice(12, 50));
// console.log(string.substring(12, 50));
// console.log(string.slice(-11));
// console.log(string.substring(-11));
// console.log(string.slice(23));
// console.log(string.substring(23));
// console.log(string.slice(13, 16));
// console.log(string.substring(13, 16));
// console.log(string.slice(16, 13));
// console.log(string.substring(16, 13));
// console.log(string.slice(-8, -4));
// console.log(string.substring(-8, -4));
// console.log(string.slice(-8, 4));
// console.log(string.substring(-8, 4));
// console.log(string.slice(8, -4));
// console.log(string.substring(8, -4));

// split()
// string.split("seperator", limit)
// const arr0 = string.split();
// console.log(arr0);
// console.log(string);
// console.log(string.split(""));
// console.log(string.split(" "));
// console.log(string.split(","));
// console.log(string.split("o"));
// console.log(string.split("o", 2));
// console.log(string.split("o", 0));

//includes()
//includes("string", position)
// console.log(string.includes("is"));
// console.log(string.includes("Is"));
// console.log(string.includes("Is", 10));
// console.log(string.includes("is", 0));
// console.log(string.includes("is", 20));

// startsWith()
// startsWith("searchString", Position)
// console.log(string.startsWith("The"));
// console.log(string.startsWith("the"));
// console.log(string.startsWith("The", 5));
// console.log(string.startsWith("is", 5));
// console.log(string.startsWith("is", 12));

// endsWith()
// endsWith("searchString", length)
// const str = "Cats are the best!";
// console.log(str.endsWith("best!"));
// console.log(str.endsWith("best"));
// console.log(str.endsWith("best!", 18));
// console.log(str.endsWith("best", 17));

//concat()
// str1.concat(str2,str3);
// const str1 = "Hello";
// const str2 = "World";
// console.log(str1.concat(" ", str2));
// console.log(str1 + " " + str2);

//repeat()
// string.repeat(count)
// count must be in integer
// const str = "abc";
// const newStr = str.repeat(2);
// console.log(str);
// console.log(newStr);
// console.log(str.repeat(3.5));
// console.log(str.repeat(-1));
// console.log(str.repeat(1 / 0));

// trimStart()
// trimEnd()
// trim()
// const greeting = "          Hello World              ";
// console.log(greeting);
// console.log(greeting.length);
// console.log(greeting.trimStart());
// console.log(greeting.trimStart().length);
// console.log(greeting.trimEnd());
// console.log(greeting.trimEnd().length);
// console.log(greeting.trim());
// console.log(greeting.trim().length);

// padStart();
// padEnd();
// padStart(targetLength);
// padEnd(targetLength);
// padStart(targetLength, padString);
// padEnd(targetLength, padString);
// const str = "abc";
// console.log(str.padStart(10));
// console.log(str.padEnd(10));
// console.log(str.padStart(10, "foo"));
// console.log(str.padEnd(10, "foo"));
// console.log(str.padStart(10, "12345678"));
// console.log(str.padEnd(10, "12345678"));
// console.log(str.padStart(2));
// console.log(str.padEnd(2));

// "use strict";

// console.log(this);

// function sum() {
//   let add = 2 + 2;
//   console.log("add", add);
//   console.log(this);
// }

// sum();

// const sum = () => {
//   let add = 2 + 2;
//   console.log("add", add);
//   console.log(this);
// };
// sum();

// const person = {
//   firstName: "Anshu",
//   lastName: "Singh",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const person = {
//   firstName: "Anshu",
//   lastName: "Singh",
//   fullName: () => {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(person.fullName());

// function calculateTotal(price, taxRate) {
//   let tax = price * taxRate;
//   let total = price + tax;

//   console.log("hekko");

//   debugger;

//   console.log("hiiii");

//   return total;
// }

// let itemPrice = 50;
// let taxPercentage = 0.08;
// let finalAmount = calculateTotal(itemPrice, taxPercentage);
// console.log(`The final amount is $${finalAmount}`);

// Ops concept prototype , class start here

/////////////////////////////////////////////////////
// function Creature(ls) {
//   this.lifeSpan = ls;
// }

// Creature.prototype.breath = function () {
//   console.log("Breathing....");
// };

// const creature1 = new Creature(100);
// console.log(creature1);

// function Person(first, last, a) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = a;
// }
// Person.prototype.fullName = function () {
//   console.log(this.firstName + " " + this.lastName);
// };

// Person.prototype.__proto__ = Object.create(Creature.prototype);

// const person1 = new Person("Anshu", "Kumar", 30);
// const person2 = new Person("Ajay", "Singh", 28);

// console.log(person1);
// console.log(person2);
////////////////////////////////////////////////

// new es 6

/////////////////////////////////////class & constructor
// class Person {
//   constructor(n, a) {
//     this.name = n;
//     this.age = a;
//   }
//   sayHii() {
//     console.log("Hiiiii....");
//   }
//   static sayHello() {
//     console.log("Hello...");
//   }
//   static sproperty = "something...";
// }
// const person1 = new Person("Anshu", 30);
// person1.sayHii();
// Person.sayHello();
// console.log(Person.sproperty);
// console.log(person1);
////////////////////////////////////

//////////////////////////////// class & constructor & Inheritance
// class emp {
//   constructor(n) {
//     this.name = n;
//   }
//   msg() {
//     console.log("hii....");
//   }
// }

// class manager extends emp {
//   constructor(n, d) {
//     super(n);
//     this.department = d;
//   }
//   msg() {
//     console.log("Hello....");
//   }
//   info() {
//     super.msg();
//     this.msg();
//     console.log(this.name + " is a manger of department " + this.department);
//   }
// }

// const manager1 = new manager("Anshu", "Web Development");
// console.log(manager1.msg());

// class admin extends manager {}

// const admin1 = new admin("Anshu", "Web Development");
// console.log(admin1);
//////////////////////////////////////////////////

//////////////////////////////////////////////////public & private property
// class emp {
//   #name = "";
//   constructor(n) {
//     this.#name = n;
//   }

//   #getName() {
//     console.log(this.#name);
//   }

//   pubFun() {
//     this.#getName();
//   }
// }
// let Emp1 = new emp("Anshu");
// console.log(Emp1.pubFun());
///////////////////////////////////////////

///////////////////////////////////////////// mixing

let usefulMethod = {
  sayHi() {
    console.log("Hiii...");
  },
  sayBye() {
    console.log("Bye....");
  },
};

class user {
  constructor() {
    this.name = "Anshu";
  }
}

Object.assign(user.prototype, usefulMethod);

let usr1 = new user();
console.log(usr1.sayHi());

////////////////////////////////////////

// Ops concept prototype , class end here
