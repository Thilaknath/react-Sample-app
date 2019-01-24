const add = function (a,b){
    console.log(arguments)
    return a + b;
}

console.log(add(55,1))

const user = {
    name: 'Andrew',
    cities:['Montreal', 'Antibes', 'Toronto'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + 'has lived in ' + city);
        // this.cities.forEach((city) => {
        //     console.log(this.name + `has lived in ` + city)
        // })
    }
}
console.log(user.printPlacesLived());

const multiplier = {
    numbers: ['1', '2', '3'],
    multiplyby: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyby)
    }
}

console.log(multiplier.multiply())