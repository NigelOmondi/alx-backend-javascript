export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var taskOne = true;
    var taskTwo = false;
  }

  return [task, task2];
}
