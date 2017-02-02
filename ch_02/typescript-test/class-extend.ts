class Person {
    name: string;
    age: number;
    static BLOOD_TYPE: string = 'O';
    static printBloodType() {
        console.log('Blood Type: ' + Person.BLOOD_TYPE);
    }
}

class Employee extends Person {
    department: string;
    role: string;
}

