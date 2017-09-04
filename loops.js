function forLoop(array) {
  //var len = array.length
  const total = 25
  for (var i = 0; i < 25; i++) {
  array = [...array, `I am ${i} strange loop${i === 1 ? '' : 's'}.`]
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n)
    n--
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array = array.slice(0, array.length - 1);
  } while (array.length > 0 && maybeTrue());
  return array
}
