class Person {
    static printBloodType() {
        console.log('Blood Type: ' + Person.BLOOD_TYPE);
    }
}
Person.BLOOD_TYPE = 'O';
class Employee extends Person {
}
