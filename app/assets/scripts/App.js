// function person(name, favColor) {
//     console.log("Hello, my name is " + name + " and my favorite color is " + favColor +".");
// }

// person("John Doe", "blue");
// person("Jane Smith", "green");



// function person(name, favColor) {
//         console.log("Hello, my name is " + name + " and my favorite color is " + favColor +".");
// }

// var johnName = "John Doe"
// var johnFavColor = "blue"
    
// person(johnName, johnFavColor);
// person("Jane Smith", "green");



// function person(name, favColor) {
//     console.log("Hello, my name is " + name + " and my favorite color is " + favColor +".");
// }

// var john = {
//     name: "John Doe",
//     favoriteColor: "blue"
// }

// person(john.name, john.favoriteColor);
// person("Jane Smith", "green");




// var john = {
//     name: "John Doe",
//     favoriteColor: "blue",
//     greet: function() {
//         console.log("Oh hello!")
//     }
// }

// john.greet()


//reuseable
// function Person(fullName, favColor) {
//     this.name = fullName
//     this.favoriteColor = favColor
//     this.greet = function() {
//         console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".")
//     }
// }

// var john = new Person("John Doe", "blue")
// john.greet()

// var jane = new Person("Jane Smith", "green")
// jane.greet()


// start using modules
// var Person = require('./modules/Person')

// alert("This is an automatic refresh!")

// var john = new Person("John Doe", "blue")
// john.greet()

// var jane = new Person("Jane Smith", "green")
// jane.greet()


//Extends
// var $ = require('jquery')
// //var Person = require('./modules/Person')

// //use Javascript ES6 to import modules
// import Person from './modules/Person'

// class Adult extends Person {
//     payTaxes() {
//         console.log(this.name + " now owns $0 in taxes.")
//     }
// }

// alert("This is an automatic refresh!")

// var john = new Person("John Doe", "blue")
// john.greet()

// var jane = new Adult("Jane Smith", "orange")
// jane.greet()
// jane.payTaxes()

/* ====== Start MobileMenu.js ====== */

import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'


var mobileMenu = new MobileMenu()
var revealOnScroll = new RevealOnScroll()