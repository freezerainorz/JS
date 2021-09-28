// 構造函數function
// function createCard(initName) {
//     this.name = initName
// }

// class Card {
//     constructor(initName) {
//         this.name = initName
//     }
// }

// const c1 = new Card("alex")
// console.log("c1", c1)
// console.log(c1.name);

//this 
// class Card {
//     constructor(initName) {
//         this.name = initName
    
//     //this
//     this.hellooo = this.hello.bind(this)
//     }
//     hello = ()  => {
//         console.log("hello", this.name)
//     }
// }

// const c1 = new Card("alex")
// console.log("c1", c1)
// c1.hello()

// const a = { name: "aa"}
// a.hellooooo = c1.hellooo
// a.hellooooo()


//繼承
class Car {
    constructor(initName) {
        this.name = initName
    }
    start() {
        console.log("車子啟動")
    }
}

class Porsche extends Car {
    constructor(namePorsche) {
        super(namePorsche)
    }
    start2() {
        super.start()
        console.log("車子排氣")
    }
    start() {
        super.start()
        console.log("Porsche車子啟動")
    }
}

const p1 = new Porsche ("alex's Porsche")
p1.start()
console.log("name", p1.name)