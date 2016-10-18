class MyCar {
    constructor(greeting, test) {
        this.greeting = greeting;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world", "wow");
