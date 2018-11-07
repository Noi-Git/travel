class Person {
    constructor(fullName, favColor) {
        this.name = fullName
        this.favoriteColor = favColor
    }

    greet() {
        console.log("Hi there, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".")
    }
}

//module.exports = Person

//use Javascript ES6 to export modules
export default Person