var forLoop = array => {
  for (let i = 0; i < 25; i++) {
    i === 1
      ? array.push('I am 1 strange loop.')
      : array.push(`I ${i} strange loops.`);
  }
  return array;
};

var whileLoop = num => {
  while (num > 0) {
    console.log(num);
    num--;
  }
  return 'done';
};

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }

  do {
    array = array.slice(1);
  } while (array.length > 0 && maybeTrue());

  return array;
}
