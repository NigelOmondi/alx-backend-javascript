// String literal type
type Subjects = 'Math' | 'History';

// Function teachClass
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    // Handle other cases if necessary
    return 'Unknown subject';
  }
}

// Test cases
console.log(teachClass('Math')); // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History
