import { Subjects } from './subjects';

// Constants
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Teacher object
export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Cpp Subject
cpp.setTeacher(cTeacher);
console.log('Cpp:');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java Subject
java.setTeacher(cTeacher);
console.log('\nJava:');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React Subject
react.setTeacher(cTeacher);
console.log('\nReact:');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
