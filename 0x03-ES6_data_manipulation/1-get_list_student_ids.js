function getListStudentIds(students) {
  // Check if the input is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use the map function to extract the 'id' property from each object
  const studentIds = students.map((student) => student.id);

  return studentIds;
}

export default getListStudentIds;
