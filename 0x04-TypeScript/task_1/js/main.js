// Implementation of StudentClass
var Student = /** @class */ (function () {
    function Student(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    Student.prototype.displayName = function () {
        return this.firstName;
    };
    return Student;
}());
// Example usage
var student1 = new Student({ firstName: 'John', lastName: 'Doe' });
console.log(student1.displayName()); // Output: John
console.log(student1.workOnHomework()); // Output: Currently working
