// Interface for the constructor of StudentClass
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface for the methods of StudentClass
interface StudentMethods {
  workOnHomework(): string;
  displayName(): string;
}

// Interface for the entire StudentClass
interface StudentClass extends StudentConstructor, StudentMethods {}

// Implementation of StudentClass
class Student implements StudentClass {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1: StudentClass = new Student({ firstName: 'John', lastName: 'Doe' });
console.log(student1.displayName()); // Output: John
console.log(student1.workOnHomework()); // Output: Currently working
