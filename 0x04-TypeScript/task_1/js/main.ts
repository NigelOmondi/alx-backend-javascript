// Define the interface for the printTeacher function
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0);
  return `${firstLetter}. ${lastName}`;
};

// Example usage
const result: string = printTeacher("John", "Doe");
console.log(result); // Output: J. Doe
