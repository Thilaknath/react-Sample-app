class Person {
    constructor(name = 'VADA', age = 0) {
        this.name = name;
        this.age = age;
    }


    getGreeting() {
        return this.name
    }

    getDescription(){
        return `${this.name} is ${this.age} old`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Thier major is ${this.major}`
        }

        return description
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation
    }
    hasHomeLocation() {
        return !!this.homeLocation
    }
    getGreeting() {
        let intro = super.getGreeting();

        if(this.hasHomeLocation()){
            intro += ` Home location: ${this.homeLocation}`
        }

        return intro
    }
}

const me = new Student('Andrew Mead', 26, 'Information Systems');
const other = new Student();
const traveller = new Traveller('Malama', 27, 'Montreal')

console.log(me)
console.log(other)
console.log(me.getDescription());
console.log(other.getDescription());
console.log(traveller.getGreeting());