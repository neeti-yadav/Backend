class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hi my name is ${this.name}`);
    }
}

let p1 = new Person("neeti", 20);
let p2 = new Person("milee", 20);
