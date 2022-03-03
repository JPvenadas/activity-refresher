export class Person {
    name: string;
    age: number;
    gender: string;
    address: string;

    constructor(
        name: string,
        age: number,
        gender: string,
        address: string
    ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

    getFullName() {
        return `Fullname: ${this.name}`;
    }

    getAge() {
        return this.age;
    }
}

const person1 = new Person("a",1,"1","1")