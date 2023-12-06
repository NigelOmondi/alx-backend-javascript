// Implement the printTeacher function
var printTeacher = function (firstName, lastName) {
    var firstLetter = firstName.charAt(0);
    return "".concat(firstLetter, ". ").concat(lastName);
};
// Example usage
var result = printTeacher("John", "Doe");
console.log(result); // Output: J. Doe
