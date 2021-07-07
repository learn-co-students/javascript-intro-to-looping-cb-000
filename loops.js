function makeArray() {
  const array = []
  const t = 10

  for (var i = 0; i < t; i++) {
    array.push("I am a strange loop.")
  }

  return [array, t]
}

function forLoop(array)
{
  for (var i = 0; i < 25; i++) {
        //array[i-1] = `I am ${i} strange loop${i === 0 ? '' : 's'}.`;
        array.push(`I am ${i + 1} strange loop${i === 0 ? '' : 's'}.`);
        console.log (array[i]);
    }
    return array;
}
function whileLoop(n) {
  while (i =  n; i > 0; i--)
  {
    console.log("Calling ${i} times.");
  }
  return "done";
}
function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length != 0);
  return array;
}
