function cleanSet(set, startString) {
  // Filter set values that start with the specified string
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));

  // Map over filtered values and extract the remaining part of the string
  const cleanedValues = filteredValues.map((value) => value.slice(startString.length));

  // Join the cleaned values with '-'
  return cleanedValues.join('-');
}

export default cleanSet;
